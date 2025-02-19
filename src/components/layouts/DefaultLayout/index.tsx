import { Header } from '@/components/header';

type Props = {
  children: React.ReactNode;
};

export function DefaultLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
