// lib/notion.ts
// Minimal Notion bridge using the REST API directly (no SDK), so it keeps working
// regardless of @notionhq/client version changes.
//
// Env vars (set in .env.local and in Vercel):
//   NOTION_TOKEN              - internal integration secret
//   NOTION_WORK_DATABASE_ID   - "Work" database
//   NOTION_ABOUT_DATABASE_ID  - "About" database (experience / services / journal rows)

const NOTION_VERSION = "2022-06-28";
const REVALIDATE_SECONDS = 3600; // ISR: refresh content hourly

/* ---------- Types ---------- */

export type WorkItem = {
  id: string;
  title: string;
  year: string;
  category: string;
  href: string;
  image: string | null;
};

export type AboutItem = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  section: string; // "Experience" | "Services" | "Journal"
  href: string;
};

/* ---------- Low-level helpers ---------- */

// Only the property shapes this file reads from Notion.
type NotionProperty = {
  title?: { plain_text: string }[];
  rich_text?: { plain_text: string }[];
  select?: { name: string } | null;
  url?: string | null;
  files?: {
    file?: { url: string };
    external?: { url: string };
  }[];
};

type NotionPage = { id: string; properties: Record<string, NotionProperty | undefined> };

async function queryDatabase(
  databaseId: string | undefined,
  body: Record<string, unknown> = {}
): Promise<NotionPage[]> {
  const token = process.env.NOTION_TOKEN;
  if (!token || !databaseId) {
    throw new Error("Missing NOTION_TOKEN or database ID environment variable");
  }

  const results: NotionPage[] = [];
  let cursor: string | undefined;

  do {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": NOTION_VERSION,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body, start_cursor: cursor, page_size: 100 }),
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!res.ok) {
      throw new Error(`Notion error ${res.status}: ${await res.text()}`);
    }

    const data: { results: NotionPage[]; has_more: boolean; next_cursor: string | null } =
      await res.json();
    results.push(...data.results);
    cursor = data.has_more && data.next_cursor ? data.next_cursor : undefined;
  } while (cursor);

  return results;
}

/* ---------- Property readers ---------- */

const text = (p?: NotionProperty): string => {
  if (!p) return "";
  const parts = p.title ?? p.rich_text ?? [];
  return parts.map((t) => t.plain_text).join("");
};

const select = (p?: NotionProperty): string => p?.select?.name ?? "";
const url = (p?: NotionProperty): string => p?.url ?? "";
const file = (p?: NotionProperty): string | null => {
  const f = p?.files?.[0];
  return f?.file?.url ?? f?.external?.url ?? null;
};

/* ---------- Public fetchers ---------- */

export async function getWork(): Promise<WorkItem[]> {
  const pages = await queryDatabase(process.env.NOTION_WORK_DATABASE_ID, {
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  return pages.map((page) => ({
    id: page.id,
    title: text(page.properties.Name),
    year: text(page.properties.Year),
    category: select(page.properties.Category),
    href: url(page.properties.Link),
    image: file(page.properties.Cover),
  }));
}

export async function getAbout(): Promise<AboutItem[]> {
  const pages = await queryDatabase(process.env.NOTION_ABOUT_DATABASE_ID, {
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  return pages.map((page) => ({
    id: page.id,
    title: text(page.properties.Name),
    subtitle: text(page.properties.Subtitle),
    period: text(page.properties.Period),
    section: select(page.properties.Section),
    href: url(page.properties.Link),
  }));
}
