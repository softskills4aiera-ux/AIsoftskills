export interface AIModule {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  videoUrl?: string;
  videoScript?: string;
}

export const aiModules: AIModule[] = [
  {
    id: 'communication',
    name: 'Communication Skills',
    icon: '💬',
    color: 'from-blue-400/80 via-blue-500/90 to-indigo-500/80 dark:from-blue-500/80 dark:via-blue-600/90 dark:to-indigo-600/80',
    description: 'Master the art of effective communication in professional and personal settings.',
    videoUrl: 'https://www.youtube.com/embed/okH2fggK69k',
    videoScript: 'Communication Skills - The art of human connection in the AI era'
  },
  {
    id: 'adaptive-learning',
    name: 'Adaptive Learning',
    icon: '🧠',
    color: 'from-emerald-400/80 via-green-400/90 to-teal-500/80 dark:from-emerald-500/80 dark:via-green-500/90 dark:to-teal-600/80',
    description: 'Develop the ability to learn continuously and adapt to new challenges.',
    videoUrl: 'https://www.youtube.com/embed/DIvlq9rDuXA',
    videoScript: 'Adaptive Learning - Your secret weapon for staying ahead of the curve'
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    icon: '🤖',
    color: 'from-purple-400/80 via-violet-400/90 to-purple-500/80 dark:from-purple-500/80 dark:via-violet-500/90 dark:to-purple-600/80',
    description: 'Master the art of communicating effectively with AI systems.',
    videoUrl: 'https://www.youtube.com/embed/p3LGsmPRn60',
    videoScript: 'Prompt Engineering - The language that makes AI your superpower'
  },
  {
    id: 'critical-thinking',
    name: 'Critical Thinking',
    icon: '🔍',
    color: 'from-amber-400/80 via-orange-400/90 to-yellow-500/80 dark:from-amber-500/80 dark:via-orange-500/90 dark:to-yellow-600/80',
    description: 'Develop analytical thinking and problem-solving capabilities.',
    videoUrl: 'https://www.youtube.com/embed/iXyvNFka4G8',
    videoScript: 'Critical Thinking - The problem-solving superpower that finds solutions'
  },
  {
    id: 'design-thinking',
    name: 'Design Thinking',
    icon: '🎨',
    color: 'from-pink-400/80 via-rose-400/90 to-pink-500/80 dark:from-pink-500/80 dark:via-rose-500/90 dark:to-pink-600/80',
    description: 'Learn creative problem-solving and innovation methodologies.',
    videoUrl: 'https://www.youtube.com/embed/SxE6I39ZkRM',
    videoScript: 'Design Thinking - The creative superpower that invents breakthrough solutions'
  },
  {
    id: 'teamwork',
    name: 'Teamwork & Collaboration',
    icon: '👥',
    color: 'from-indigo-400/80 via-blue-400/90 to-cyan-500/80 dark:from-indigo-500/80 dark:via-blue-500/90 dark:to-cyan-600/80',
    description: 'Build effective collaboration and team leadership skills.',
    videoUrl: 'https://www.youtube.com/embed/NljYK4N8V4w',
    videoScript: 'Teamwork & Collaboration - The superpower that brings out the best in everyone'
  },
  {
    id: 'data-driven',
    name: 'Data-Driven Decision Making',
    icon: '📊',
    color: 'from-teal-400/80 via-cyan-400/90 to-blue-500/80 dark:from-teal-500/80 dark:via-cyan-500/90 dark:to-blue-600/80',
    description: 'Make informed decisions based on data analysis and insights.',
    videoUrl: 'https://www.youtube.com/embed/0Jt33CGw5hk',
    videoScript: 'Data-Driven Decision Making - The analytical superpower that makes decisions work'
  },
  {
    id: 'mental-health',
    name: 'Mental & Physical Health',
    icon: '❤️',
    color: 'from-rose-400/80 via-pink-400/90 to-red-500/80 dark:from-rose-500/80 dark:via-pink-500/90 dark:to-red-600/80',
    description: 'Maintain mental and physical wellness for peak performance.',
    videoUrl: 'https://www.youtube.com/embed/1Bye7w7TXzs',
    videoScript: 'Mental & Physical Health - The wellness superpower that makes you thrive'
  }
];
