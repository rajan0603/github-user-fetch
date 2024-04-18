
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function RepositoryListPage() {
    const { username, repositories } = useSelector(state => state.user);

    return (
        <div className="container">
            <h2>Repositories for {username}</h2>
            <ul>
                {repositories.map(repo => (
                    <li key={repo._id}>
                        <Link to={`/repositories/${username}/${repo.name}`}>{repo.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to={`/followers/${username}`}>View Followers</Link>
        </div>
    );
}

export default RepositoryListPage;

