
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './RepositoryListPage.module.css';

function RepositoryListPage() {
    const { username, repositories } = useSelector(state => state.user);

    return (
        <div className={styles.container}> {/* Apply CSS class */}
            <h2 className={styles.heading}>Repositories for {username}</h2> {/* Apply CSS class */}
            <div className={styles.cardContainer}> {/* Apply CSS class */}
                {repositories.map(repo => (
                    <div className={styles.card} key={repo._id}> {/* Apply CSS class */}
                        <div className={styles.imageContainer}> {/* Apply CSS class */}
                            <img src="https://via.placeholder.com/150" alt="Repository" /> {/* Use placeholder image */}
                        </div>
                        <div className={styles.infoContainer}> {/* Apply CSS class */}
                            <h3><Link to={`/repositories/${username}/${repo.name}`}>{repo.name}</Link></h3>
                            <p>{repo.description || 'No description available'}</p>
                            <p><strong>Language:</strong> {repo.language}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to={`/followers/${username}`} className={styles.link}>View Followers</Link> {/* Apply CSS class */}
        </div>
    );
}

export default RepositoryListPage;

