
const initialState = {
    username: '',
    repositories: [],
    userData: {},
    followers: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload,
            };
        case 'SET_REPOSITORIES':
            return {
                ...state,
                repositories: action.payload,
            };
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.payload,
            };
        case 'SET_FOLLOWERS':
            return {
                ...state,
                followers: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;

