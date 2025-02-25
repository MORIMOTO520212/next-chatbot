'use client';

import {
  Authenticator as AuthenticatorUI,
  ThemeProvider,
  Theme,
} from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify/utils';
import '@aws-amplify/ui-react/styles.css';

type Props = {
  children: React.ReactNode;
};

export function Authenticator({ children }: Props) {
  const theme: Theme = {
    name: 'custom-theme',
    tokens: {
      components: {
        button: {
          primary: {
            backgroundColor: '#ef797b',
            color: 'white',
          },
          link: {
            color: '#ef797b',
          },
        },
        tabs: {
          item: {
            _hover: {
              borderColor: '#442a00',
              color: '#442a00',
            },
            _active: {
              borderColor: '#ef797b',
              color: '#ef797b',
            },
          },
        },
      },
    },
  };

  const translations = {
    ja: {
      'Sign In': 'サインイン',
      'Sign in': 'サインイン',
      'Sign in with Google': 'Googleでログイン',
      'Create Account': 'アカウント作成',
      Email: 'メールアドレス',
      Password: 'パスワード',
      'Enter your Email': 'メールアドレスを入力',
      'Enter your Password': 'パスワードを入力',
      'Forgot your password?': 'パスワードをお忘れですか？',
    },
  };

  I18n.putVocabularies(translations);
  I18n.setLanguage('ja');

  return (
    <ThemeProvider theme={theme}>
      <AuthenticatorUI socialProviders={['google']}>{children}</AuthenticatorUI>
    </ThemeProvider>
  );
}
