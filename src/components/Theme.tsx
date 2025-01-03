import type { ReactNode } from 'react';

import '@/components/theme.css';

export function Theme({ children, id }: { children: ReactNode; id: string }) {
  return (
    <>
      <input
        aria-hidden={true}
        id={id}
        style={{ display: 'none' }}
        type="checkbox"
      />
      <div className="app theme">{children}</div>
    </>
  );
}
