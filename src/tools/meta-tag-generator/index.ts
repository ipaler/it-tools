import { Tags } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'HTML META生成器',
  path: '/og-meta-generator',
  description: '为您的网站生成OpenGraph和HTML META标记。',
  keywords: [
    'meta',
    'tag',
    'generator',
    'social',
    'title',
    'description',
    'image',
    'share',
    'online',
    'website',
    'open',
    'graph',
    'og',
  ],
  component: () => import('./meta-tag-generator.vue'),
  icon: Tags,
});
