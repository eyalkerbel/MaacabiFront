const INITIAL_STATE = {
    users: [],
    userFetcing: false
};

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_ALL_USERS":
            return {
                users: action.users,
                statusAdding: null,
                userFetcing: true
            };
        case "ADD_USER_REQUEST":
            return state;
        case "NOT_VALIDATE":
            return {
                ...state,
                statusAdding: action.status
            };
        case "ADD_USER_SUCCESSFULLY":
            return {
                users: [...state.users, action.user],
                statusAdding: action.status,
            };
        case "ADD_USER_EXSIT":
            return {
                ...state,
                statusAdding: action.status
            };
        default:
            return state;
    }
}
export default user;