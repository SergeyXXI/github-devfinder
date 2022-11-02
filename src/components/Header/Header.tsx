import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

export default function Header()
{
    return (
        <header className={styles.header}>
            <h2>devfinder</h2>
            <ThemeSwitcher />
        </header>
    );    
};