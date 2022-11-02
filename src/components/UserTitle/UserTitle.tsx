import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

type UserTitleProps = {} & Pick<
    LocalGithubUser, "login" | "name" | "created"
>;

const localDate = new Intl.DateTimeFormat("en-GB",
{
    day: "numeric",
    month: "short",
    year: "numeric"
});

export default function UserTitle({ login, name, created }: UserTitleProps)
{    
    const date = localDate.format(new Date(created));

    return (
        <div className={styles.userTitle}>
            <h2>{name}</h2>
            <span>{date}</span>
            <h3>{login}</h3>
        </div>
    );    
};