import { LocalGithubUser } from 'types';
import styles from './UserStat.module.scss';

type UserStatProps = {} & Pick<
    LocalGithubUser, "followers" | "following" | "repos"
>;

export default function UserStat({ repos = 0, following = 0, followers = 0 }: UserStatProps)
{
    return (
        <div className={styles.userStat}>
            <span className={styles.statName}>Repos</span>
            <span className={styles.statName}>Following</span>
            <span className={styles.statName}>Followers</span>
            <span className={styles.statValue}>{repos}</span>
            <span className={styles.statValue}>{following}</span>
            <span className={styles.statValue}>{followers}</span>
        </div>
    );    
};