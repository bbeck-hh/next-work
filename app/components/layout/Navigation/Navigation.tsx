'use client';
import NavigationListItem from '../../NavigationListItem/NavigationListItem';

export default function Navigation() {

  return (
    <nav className="relative">
      <ul className="flex flex-row gap-4">
        <NavigationListItem href="/" label="Home" />
        <NavigationListItem href="/about" label="About" />
        <NavigationListItem href="#contact" label="Contact" />
      </ul>
    </nav>
  );
}