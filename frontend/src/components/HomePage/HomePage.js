
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUsername, fetchRepositories, fetchUserData } from '../../redux/actions/userActions';
import styles from './HomePage.module.css';

function HomePage() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleSubmit = () => {
        dispatch(setUsername(input));
        dispatch(fetchUserData(input));
        dispatch(fetchRepositories(input));
        setInput('');
        navigate(`/repositories/${input}`);
    };

    return (
        <div className={styles.container}> 
            <h1 className={styles.heading}>GitHub Repository Search</h1> 
            <input 
                type="text" 
                className={styles.input} 
                placeholder="Enter GitHub Username" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button className={styles.button} onClick={handleSubmit}>Search</button>
        </div>
    );
}

export default HomePage;


