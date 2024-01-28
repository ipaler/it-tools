import { TimerOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '秒表',
  path: '/chronometer',
  description: 'Monitor the duration of a thing. Basically a chronometer with simple chronometer features.',
  keywords: ['chronometer', 'time', 'lap', 'duration', 'measure', 'pause', 'resume', 'stopwatch'],
  component: () => import('./chronometer.vue'),
  icon: TimerOutlined,
});
