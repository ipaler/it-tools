import { Link } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'URL编码/解码',
  path: '/url-encoder',
  description: 'Encode to url-encoded format (also known as "percent-encoded") or decode from it.',
  keywords: ['url', 'encode', 'decode', 'percent', '%20', 'format'],
  component: () => import('./url-encoder.vue'),
  icon: Link,
});
