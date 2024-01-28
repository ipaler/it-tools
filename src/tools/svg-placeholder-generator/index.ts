import { ImageOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'SVG 图片占位生成器',
  path: '/svg-placeholder-generator',
  description: 'Generate svg images to use as placeholder in your applications.',
  keywords: ['svg', 'placeholder', 'generator', 'image', 'size', 'mockup'],
  component: () => import('./svg-placeholder-generator.vue'),
  icon: ImageOutlined,
});
