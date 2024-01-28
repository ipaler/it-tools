import { Lock } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '加密/解密文本',
  path: '/encryption',
  description: 'Encrypt and decrypt text clear text using crypto algorithm like AES, TripleDES, Rabbit or RC4.',
  keywords: ['cypher', 'encipher', 'text', 'AES', 'TripleDES', 'Rabbit', 'RC4'],
  component: () => import('./encryption.vue'),
  icon: Lock,
  redirectFrom: ['/cypher'],
});
