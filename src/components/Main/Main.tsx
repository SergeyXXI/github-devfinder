import { LocalGithubUser } from 'types';
import UserTitle from 'components/UserTitle/UserTitle';
import UserStat from 'components/UserStat/UserStat';
import ProfileInfo from 'components/ProfileInfo/ProfileInfo';
import styles from './Main.module.scss';

export default function Main(props: LocalGithubUser)
{
    const { 
        avatar, bio,
        repos, followers, following,
        login, name, created,
        location, twitter, blog, company
    } = props;
    const userStatData = { repos, followers, following };
    const userTitleData = { login, name, created };
    const profileInfoData = { location, twitter, blog, company };

    return (
        <main className={styles.main}>
            <img src={avatar} alt={login + " avatar"} />
            <div>
                <UserTitle { ...userTitleData } />
                {
                    bio ? <p className={styles.bio}>{bio}</p>
                        : <p className={styles.bio + " empty"}>
                              This profile has no bio
                          </p>
                }
                <UserStat { ...userStatData } /> 
                <ProfileInfo { ...profileInfoData } /> 
            </div>                      
        </main>
    );    
};