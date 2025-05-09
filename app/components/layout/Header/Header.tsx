// components/layout/Header/Header.tsx
import { Navigation } from '../Navigation';
import  styles from './Header.module.css';


export default function Header() {
  return (
    <header className={styles.container}>
        <h1 className="text-lg font-bold">Meine App</h1>
        <Navigation />
    </header>
  );
};

