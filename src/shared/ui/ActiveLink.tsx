import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, MouseEventHandler, PropsWithChildren } from 'react';

type Props = {
  href: string;
  className: string;
};

const ActiveLink: FC<PropsWithChildren<Props>> = ({ children, href, className }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'white',
  };

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} style={style}>
      {children}
    </Link>
  );
};

export default ActiveLink;
