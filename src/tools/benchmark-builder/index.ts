import { SpeedFilled } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '基准生成器',
  path: '/benchmark-builder',
  description: 'Easily compare execution time of tasks with this very simple online benchmark builder.',
  keywords: ['benchmark', 'builder', 'execution', 'duration', 'mean', 'variance'],
  component: () => import('./benchmark-builder.vue'),
  icon: SpeedFilled,
  createdAt: new Date('2023-04-05'),
});
