import useGitHub from "./hooks/useGitHub";

const GitHubUser = ({ username }) => {
    // https://api.github.com/users/

    const { user, loading, error } = useGitHub(username);

    return (
        <div className="github-user">
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}

            {user && (
                    <ul className="details">
                        <li>
                            <img src={user.avatar_url} alt={user.login} />
                        </li>
                        <li>
                            <strong>Name: </strong>{user.name}
                        </li>
                        <li>
                            <strong>Bio: </strong>{user.bio ? user.bio : "NA"}
                        </li>
                        <li>
                            <strong>Location: </strong>{user.location ? user.location : "NA"}
                        </li>
                        <li>
                            <strong>Blog or Site: </strong>{user.blog ? <a href={user.blog} target="_blank">{user.blog}</a> : "-"}
                        </li>
                        <li>
                            <strong>Public Repos: </strong>{" "}
                            {user.public_repos ? user.public_repos : 0}
                        </li>
                        <li>
                            <strong>Followers: </strong>{user.followers ? user.followers : "NA"}
                        </li>
                        <li>
                            <strong>Following: </strong>{user.following ? user.following : "NA"}
                        </li>
                    </ul>
                    
                )
            }
        </div>
    );
};

export default GitHubUser;