import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header style={{ padding: '1rem', background: '#f5f5f5' }}>
        <h1>My App Header</h1>
      </header>
      <main style={{ padding: '1rem' }}>{children}</main>
      <footer style={{ padding: '1rem', background: '#f5f5f5' }}>
        <p>My App Footer</p>
      </footer>
    </div>
  );
}