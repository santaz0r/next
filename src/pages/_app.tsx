import { Provider } from 'effector-react';
import { fork } from 'effector';

import { useMemo } from 'react';
import Layout from '@/shared/layout/Layout';
import type { AppProps } from 'next/app';

import './globals.scss';

const initializeScope = (initialData: Record<string, unknown>) => {
  const scope = fork({
    values: {
      ...initialData,
    },
  });

  return scope;
};

export default function App({ Component, pageProps }: AppProps) {
  const useScope = (initialData = {}) => useMemo(() => initializeScope(initialData), [initialData]);

  const scope = useScope(pageProps.initialState);

  return (
    <Provider value={scope}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
