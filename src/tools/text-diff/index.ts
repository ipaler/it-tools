import { FileDiff } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '文本差异对比',
  path: '/text-diff',
  description: 'Compare two texts and see the differences between them.',
  keywords: ['text', 'diff', 'compare', 'string', 'text diff', 'code'],
  component: () => import('./text-diff.vue'),
  icon: FileDiff,
  createdAt: new Date('2023-08-16'),
});
