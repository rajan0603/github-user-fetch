import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './RepositoryListPage.module.css';

function RepositoryListPage() {
    const { username, repositories, userData } = useSelector(state => state.user);
    const navigate = useNavigate(); 

    return (
        <div className={styles.wrapper}>
            <div className={styles.back}>
                <h2>Repository of {username}</h2>
                <button className={styles.backButton} onClick={() => navigate(-1)}>Back</button> 
            </div>
            <div className={styles.container}>
            <div className={styles.userInfo}>
                <div className={styles.avatarContainer}>
                    <img src={userData.avatarUrl} alt="Avatar" className={styles.avatar} />
                </div>
                <div className={styles.infoContainer}>
                    <h2>{userData?.name || username}</h2>
                    <p> Followers: {userData?.followers}  Following: {userData?.following}</p>
                    <Link to={`/followers/${username}`} className={styles.link}><button className={styles.btn}>View Followers</button></Link>
                </div>
            </div>
            <div className={styles.cardContainer}>
                {repositories.map(repo => (
                    <div className={styles.card} key={repo._id}>
                        <div className={styles.imageContainer}>
                            <img src= {userData.avatarUrl} alt="Repository" />
                        </div>
                        <div className={styles.infoContainer}>
                            <h3><Link to={`/repositories/${username}/${repo.name}`} className={styles.info_link}>{repo.name}</Link></h3>
                            <p>{repo.description || 'No description available'}</p>
                            <p><strong>Language:</strong> {repo.language}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
    );
}

export default RepositoryListPage;


