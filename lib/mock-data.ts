export interface BentoItem {
  id: string;
  type: 'project' | 'about' | 'social' | 'tech';
  title: string;
  description?: string;
  content?: string;
  link?: string;
  image?: string;
  tags?: string[];
  value?: string;
}

export const MOCK_BENTO_DATA: BentoItem[] = [
  {
    id: '1',
    type: 'about',
    title: 'Elon Musk',
    content: 'Architect of the future. Driving humanity toward a multi-planetary existence while accelerating the transition to sustainable energy.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elon',
  },
  {
    id: '2',
    type: 'project',
    title: 'SpaceX',
    description: 'Making humanity multi-planetary. Developing the most powerful rockets in history to reach Mars.',
    link: 'https://spacex.com',
    tags: ['Aerospace', 'Mars', 'Starship'],
  },
  {
    id: '3',
    type: 'social',
    title: 'X (Twitter)',
    link: 'https://x.com/elonmusk',
    value: '@elonmusk',
  },
  {
    id: '4',
    type: 'tech',
    title: 'Ventures',
    tags: ['Neuralink', 'The Boring Company', 'Tesla', 'xAI', 'OpenAI'],
  },
  {
    id: '5',
    type: 'project',
    title: 'Tesla',
    description: 'Accelerating the world\'s transition to sustainable energy through EVs and solar.',
    link: 'https://tesla.com',
    tags: ['Energy', 'EV', 'Autopilot'],
  },
  {
    id: '6',
    type: 'social',
    title: 'Official Website',
    link: 'https://tesla.com',
    value: 'Tesla.com',
  },
];
