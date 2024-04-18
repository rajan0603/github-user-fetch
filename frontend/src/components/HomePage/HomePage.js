import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function RepositoryListPage() {
    const { username } = useParams();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`);
                setRepositories(response.data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };
        fetchRepositories();
    }, [username]);

    return (
        <div className="container">
            <h1>Repositories for {username}</h1>
            <ul>
                {repositories.map(repo => (
                    <li key={repo.id}>
                        <Link to={`/repositories/${username}/${repo.name}`}>{repo.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default RepositoryListPage;
