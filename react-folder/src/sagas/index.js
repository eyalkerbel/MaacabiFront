import { put, takeLatest, all } from 'redux-saga/effects';
import axios from "axios";




export function* addUser(action) {
    const answer = yield axios.request({
        method: 'POST',
        url: "/add_user",
        data: {
            userName: action.user.userName,
            email: action.user.email,
            age: action.user.age
        }
    }).then(res => res.data);
    if (answer.status == "notvalidate") {
        yield put({ type: "NOT_VALIDATE", status: answer.status });

    } else if (answer.status == "succ") {
        yield put({ type: "ADD_USER_SUCCESSFULLY", status: "successfully", user: action.user });
    } else {
        yield put({ type: "ADD_USER_EXSIT", status: answer.status });

    }
}
function* actionWatcher() {
    yield takeLatest('ADD_USER_REQUEST', addUser)
}
export function* getUser() {
    const answer = yield axios.request({
        method: 'POST',
        url: "/get_users",

    }).then(res => res.data);
    yield put({ type: "SET_ALL_USERS", users: answer.users });

}
function* actionWatcherUser() {
    yield takeLatest('GET_ALL_USERS_REQUEST', getUser)
}




export default function* rootSaga() {
    yield all([
        actionWatcher(),
        actionWatcherUser()
    ]);
}