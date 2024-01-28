import { Qrcode } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '二维码生成器',
  path: '/qrcode-generator',
  description:
    'Generate and download QR-code for an url or just a text and customize the background and foreground colors.',
  keywords: ['qr', 'code', 'generator', 'square', 'color', 'link', 'low', 'medium', 'quartile', 'high', 'transparent'],
  component: () => import('./qr-code-generator.vue'),
  icon: Qrcode,
});
