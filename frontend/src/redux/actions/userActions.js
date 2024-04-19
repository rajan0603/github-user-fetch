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

export const setUserData = (userData) => {
    return {
        type: 'SET_USER_DATA',
        payload: userData,
    };
};

export const setFollowers = (followers) => {
    return {
        type: 'SET_FOLLOWERS',
        payload: followers,
    };
};

export const setRepositoryDetails = (repositoryDetails) => {
    return {
        type: 'SET_REPOSITORY_DETAILS',
        payload: repositoryDetails,
    };
};

export const fetchUserData = (username) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${username}`);
            dispatch(setUserData(response.data));
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
};

export const fetchFollowers = (followersUrl) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(followersUrl);
            dispatch(setFollowers(response.data));
        } catch (error) {
            console.error('Error fetching followers:', error);
        }
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

export const fetchRepositoryDetails = (username, repoName) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
            dispatch(setRepositoryDetails(response.data));
        } catch (error) {
            console.error('Error fetching repository details:', error);
        }
    };
};


