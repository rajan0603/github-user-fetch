import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function RepositoryDetailsPage() {
    const { username, repoName } = useParams();
    const [repository, setRepository] = useState({});

    useEffect(() => {
        const fetchRepository = async () => {
            try {
                const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
                setRepository(response.data);
            } catch (error) {
                console.error('Error fetching repository:', error);
            }
        };
        fetchRepository();
    }, [username, repoName]);

    return (
        <div className="container">
            <h1>{repository.name}</h1>
            <p>Description: {repository.description}</p>
            {/* Display other repository details */}
            <Link to={`/repositories/${username}`}>Go Back to Repository List</Link>
        </div>
    );
}

export default RepositoryDetailsPage;
