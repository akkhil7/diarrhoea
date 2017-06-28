import {combineReducers} from 'redux';

import user from './userReducer';
import note from './noteReducer';
import dashboard from './dashBoardReducer';

export default combineReducers({
    user,
    note,
    dashboard
})
