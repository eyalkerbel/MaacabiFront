export function setAllUsers(users) {
    return {
        type: "SET_ALL_USERS",
        users: users
    }
}
export function getAllUsers() {
    return {
        type: "GET_ALL_USERS_REQUEST",
    }
}
export function addUser(user) {
    return {
        type: "ADD_USER_REQUEST",
        user: user
    }
}
