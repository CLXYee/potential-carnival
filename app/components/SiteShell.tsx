import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type PageKey = 'home' | 'work' | 'about' | 'resume';

const navigation = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Work', href: '/projects', key: 'work' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Resume', href: '/resume', key: 'resume' },
] as const;

function NavigationLinks({ activePage }: { activePage: PageKey }) {
  return (
    <ul className="nav-links">
      {navigation.map((item) => (
        <li key={item.key}>
          <Link
            href={item.href}
            className="nav-link"
            aria-current={activePage === item.key ? 'page' : undefined}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SiteShell({
  activePage,
  children,
}: {
  activePage: PageKey;
  children: ReactNode;
}) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand" href="/" aria-label="Xin Yee Lai, home">
            <span className="brand-mark" aria-hidden="true">XY</span>
            <span>Xin Yee Lai</span>
          </Link>
          <nav className="desktop-navigation" aria-label="Primary navigation">
            <NavigationLinks activePage={activePage} />
          </nav>
          <details className="mobile-navigation">
            <summary aria-label="Toggle navigation menu">
              <span>Menu</span>
              <span className="menu-icon" aria-hidden="true"><i></i><i></i></span>
            </summary>
            <nav aria-label="Mobile navigation">
              <NavigationLinks activePage={activePage} />
            </nav>
          </details>
        </div>
      </header>
      <main className="main-content" id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>Xin Yee Lai <span aria-hidden="true">·</span> Computer Science, NTU</p>
          <a href="mailto:laixinyee04@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
          <Image className="footer-seagrass" src="/images/seagrass.png" alt="" width={72} height={80} />
        </div>
      </footer>
    </div>
  );
}