import { useState, useEffect } from "react";
import { AppStatus, GithubUser, GithubError, LocalGithubUser } from "types";
import { isGithubUser } from "utils/typeGuards";
import { extractLocalUser } from "utils/mappings";
import Container from "components/Container/Container";
import Header from "components/Header/Header";
import Search from "components/Search/Search";
import Main from "components/Main/Main";

const BASE_URL = "https://api.github.com/users/";

export default function App()
{
    const [status, setStatus] = useState<AppStatus>("idle");
    const [user, setUser] = useState<LocalGithubUser | null>(getUser());

    const fetchUser = async (login: string) =>
    {
        setStatus("loading");
        const url = BASE_URL + login;

        try
        {
            const response = await fetch(url);
            const result: GithubUser | GithubError = await response.json();
            const userNew = isGithubUser(result) ? extractLocalUser(result) : null;

            localStorage.setItem("user", userNew ? JSON.stringify(userNew) : "");

            setUser(userNew);
            setStatus("fetched");
        }
        catch(e)
        {
            setStatus("error");
        }        
    };  

    useEffect(() =>
    {
        if(!user) fetchUser("sergeyxxi");
    }, []);   

    return (        
        <Container>
            <Header />
            <Search onSubmit={fetchUser}/>
            {
                status === "loading" ? <p>Loading...</p> :

                status === "error" ?
                    <p className="error">
                        Something is wrong. Please, reload page or try search.
                    </p> :

                user ? <Main { ...user } /> :

                status === "fetched" && !user && <p className="error">No result</p>
            }            
        </Container>        
    );
}

function getUser(): LocalGithubUser | null
{
    const user = localStorage.getItem("user");    

    return user ? JSON.parse(user) : null;
}