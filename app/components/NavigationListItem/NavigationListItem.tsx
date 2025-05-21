import Link from 'next/link';
import styled from 'styled-components';


interface NavigationListItemProps {
  href: string;
  label: string;
}

export default function NavigationListItem({
  href,
  label,
}: NavigationListItemProps) {
  return (
    <li>
      <NavLink href={href}>{label}</NavLink>
    </li>
  );
}

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;