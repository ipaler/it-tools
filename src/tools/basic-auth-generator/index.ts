import { PasswordRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Basic Auth生成器',
  path: '/basic-auth-generator',
  description: '根据用户名和密码生成Base64 Basic Auth标头。',
  keywords: [
    'basic',
    'auth',
    'generator',
    'username',
    'password',
    'base64',
    'authentication',
    'header',
    'authorization',
  ],
  component: () => import('./basic-auth-generator.vue'),
  icon: PasswordRound,
});
