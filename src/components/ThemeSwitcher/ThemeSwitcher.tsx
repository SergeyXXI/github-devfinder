import { useState, useEffect } from 'react';
import { ReactComponent as IconMoon } from "assets/icon-moon.svg";
import { ReactComponent as IconSun } from "assets/icon-sun.svg";
import styles from './ThemeSwitcher.module.scss';

export default function ThemeSwitcher()
{
    const [theme, setTheme] = useState(getTheme());
    const themeText = theme === "light" ? "dark" : "light";
    const icon = theme === "light" ? <IconMoon /> : <IconSun />;

    const onClick = () =>
    {
        const themeNew = theme === "light" ? "dark" : "light"; 
        
        localStorage.setItem("theme", themeNew);
        setTheme(themeNew); 
    } 

    useEffect(() =>
    {
        document.body.dataset.theme = theme;
    }, [theme]);    

    return (
        <div className={styles.themeSwitcher} onClick={onClick}>            
            <span>{themeText}</span>
            {icon}
        </div>
    );    
};

function getTheme()
{
    return localStorage.getItem("theme") || "light";
}