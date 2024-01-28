import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '占位符文本生成器',
  path: '/lorem-ipsum-generator',
  description:
    'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
  keywords: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'placeholder', 'text', 'filler', 'random', 'generator'],
  component: () => import('./lorem-ipsum-generator.vue'),
  icon: AlignJustified,
});
