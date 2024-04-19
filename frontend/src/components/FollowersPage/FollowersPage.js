import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollowers } from '../../redux/actions/userActions';
import styles from './FollowersPage.module.css';

function FollowersPage() {
    const { username } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const { userData, followers } = useSelector(state => state.user);

    useEffect(() => {
        if (userData.followers_url) {
            dispatch(fetchFollowers(userData.followers_url));
        }
    }, [dispatch, userData]);

    return (
        <div className={styles.container}>
            <div className={styles.back}>
                <h2>Followers of {username}</h2>
                <button className={styles.backButton} onClick={() => navigate(-1)}>Back</button> 
            </div>
            <div className={styles.cardContainer}>
                {followers.map(follower => (
                    <Link
                        key={follower.id}
                        to={`/repositories/${follower.login}`}
                        className={styles.cardLink}
                    >
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={follower.avatar_url} alt="Follower Avatar" className={styles.image} />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3>{follower.login}</h3>
                                <p>Fullstack Developer</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FollowersPage;



