import { combineReducers } from 'redux';
import { users } from './users';
import { selectedUser, selectedPost } from './selector';

const allReducers = combineReducers({
    users: users,
    userSelected: selectedUser,
    postSelected: selectedPost
});

export default allReducers