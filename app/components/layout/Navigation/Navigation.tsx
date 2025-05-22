'use client';
import NavigationListItem from '../../NavigationListItem/NavigationListItem';

export default function Navigation() {

  return (
    <nav className="relative">
      <ul className="flex flex-row gap-4">
        <NavigationListItem
          href="#mainContent"
          label="Zum Inhalt springen"
          className="sr-only focus:not-sr-only"
        />
        <NavigationListItem href="/" label="Home" />
        <NavigationListItem href="/about" label="About" />
        <NavigationListItem href="#contact" label="Contact" />
      </ul>
    </nav>
  );
}