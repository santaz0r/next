import { Header } from '@/widgets/header';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
