import { ReactComponent as Icon } from "assets/icon-search.svg";
import styles from './Search.module.scss';

type SearchProps =
{
    onSubmit: (text: string) => void    
};

type FormFields = 
{
    username: HTMLInputElement
};

export default function Search({ onSubmit }: SearchProps)
{   

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement & FormFields>) =>
    {
        e.preventDefault();

        const text = e.currentTarget.username.value;

        if(!text) return;        

        onSubmit(text.toLowerCase().trim());
        e.currentTarget.reset();
    };   

    return (
        <form className={styles.form} onSubmit={onSubmitForm}
            autoComplete="off">
            <label htmlFor="username">
                <Icon />                
            </label>
            <div>
                <input type="text" id="username" name="username"
                    placeholder="Search for Github username..." />
            </div>            
            <button>Search</button>            
        </form>
    );    
};