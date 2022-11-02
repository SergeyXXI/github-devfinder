import { LocalGithubUser } from 'types';
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import styles from './ProfileInfo.module.scss';

type ProfileInfoProps = {} & Pick<
    LocalGithubUser, "location" | "twitter" | "blog" | "company"
>;

export default function ProfileInfo({ location, twitter, blog, company }: ProfileInfoProps)
{
    const blogHref = blog && blog.startsWith("http") ? blog :
                        blog ? "https://" + blog : null;    

    return (
        <ul className={styles.profileInfo}>
            <li className={styles.item + (location ? "" : " empty")}>
                <LocationIcon />
                { location ? location : "none"}
            </li>
            <li className={styles.item + (twitter ? "" : " empty")}>
                <TwitterIcon />
                { twitter ? twitter : "none"}
            </li>
            <li className={styles.item + (blog ? "" : " empty")}>
                <BlogIcon />
                {
                    blogHref ?
                        <a href={blogHref} target="_blank" rel="noreferrer">{blog}</a> :
                        "none"
                }
            </li>
            <li className={styles.item + (company ? "" : " empty")}>
                <CompanyIcon />
                { company ? company : "none"}
            </li>
        </ul>
    );    
};