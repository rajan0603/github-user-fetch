import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchRepositoryDetails } from '../../redux/actions/userActions';
import styles from './RepositoryDetailsPage.module.css';

function RepositoryDetailsPage() {
    const { username, repoName } = useParams();
    const dispatch = useDispatch();
    const { repository, userData } = useSelector(state => state.user);
    const navigate = useNavigate(); 

    useEffect(() => {
        dispatch(fetchRepositoryDetails(username, repoName));
    }, [dispatch, username, repoName]);


    const renderRepositoryDetails = () => {
        if (!repository) {
            return {
                name: repoName,
                description: 'This is a demo repository description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            };
        }
        return repository;
    };

    const repoDetails = renderRepositoryDetails();

    return (
        <div className={styles.wrapper}>
            <div className={styles.back}>
                <h2>Repository Details of {repoName}</h2>
                <button className={styles.backButton} onClick={() => navigate(-1)}>Back</button> 
            </div>
            <div className={styles.container}>
            <div className={styles.detailsContainer}>
                <div className={styles.rowContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.image}>
                            <img src={userData.avatarUrl || 'https://via.placeholder.com/200'} alt="Repository" />
                        </div>
                        <div>
                            <p>Verify By Github</p>
                            <p>Github confirm that this app meets the requirement for verification.</p>
                            <p>Categories</p>
                            <div className={styles.category}>
                                <p>Code Review</p>
                                <p>Free</p>
                                <p>IDEs</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h3>{repoDetails.name}</h3>
                        <button className={styles.setupButton}>Set Up Plan</button>
                        <p>{repoDetails.description}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default RepositoryDetailsPage;




