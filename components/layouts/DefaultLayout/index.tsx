type Props = {
  children: React.ReactNode;
};

export function DefaultLayout({ children }: Props) {
  return (
    <div>
      <p>default layout</p>
      {children}
    </div>
  );
}
