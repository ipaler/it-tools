import { Speakerphone } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '文本转北约字母表',
  path: '/text-to-nato-alphabet',
  description: 'Transform text into NATO phonetic alphabet for oral transmission.',
  keywords: ['string', 'nato', 'alphabet', 'phonetic', 'oral', 'transmission'],
  component: () => import('./text-to-nato-alphabet.vue'),
  icon: Speakerphone,
});
