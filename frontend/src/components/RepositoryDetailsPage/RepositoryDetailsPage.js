
import React from 'react';
import { useParams } from 'react-router-dom';

function RepositoryDetailsPage() {
    const { username, repoName } = useParams();

    // Fetch repository details using username and repoName

    return (
        <div className="container">
            <h2>Repository Details</h2>
            <p>Username: {username}</p>
            <p>Repository Name: {repoName}</p>
            {/* Display other repository details */}
        </div>
    );
}

export default RepositoryDetailsPage;

