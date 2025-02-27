'use client';

import { Amplify } from 'aws-amplify';

import AmplifyConfig from '@/../amplify_outputs.json';

Amplify.configure(AmplifyConfig, { ssr: true });

export function ConfigureAmplifyClientSide() {
  return null;
}
