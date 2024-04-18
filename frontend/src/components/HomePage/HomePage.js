
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUsername, fetchRepositories } from '../../redux/actions/userActions';

function HomePage() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        dispatch(setUsername(input));
        dispatch(fetchRepositories(input));
        setInput('');
        history.push(`/repositories/${input}`);
    };

    return (
        <div className="container">
            <h1>GitHub Repository Search</h1>
            <input 
                type="text" 
                placeholder="Enter GitHub Username" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
}

export default HomePage;


