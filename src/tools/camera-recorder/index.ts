import { Camera } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '摄像机记录器',
  path: '/camera-recorder',
  description: 'Take a picture or record a video from your webcam or camera.',
  keywords: ['camera', 'recoder'],
  component: () => import('./camera-recorder.vue'),
  icon: Camera,
  createdAt: new Date('2023-05-15'),
});
