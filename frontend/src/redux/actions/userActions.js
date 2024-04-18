
import axios from 'axios';

export const setUsername = (username) => {
    return {
        type: 'SET_USERNAME',
        payload: username,
    };
};

export const setRepositories = (repositories) => {
    return {
        type: 'SET_REPOSITORIES',
        payload: repositories,
    };
};

export const fetchRepositories = (username) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${username}`);
            dispatch(setRepositories(response.data.repositories));
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    };
};
