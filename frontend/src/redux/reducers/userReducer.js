
const initialState = {
    username: '',
    repositories: [],
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
        default:
            return state;
    }
};

export default userReducer;
