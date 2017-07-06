import {combineReducers} from 'redux';

import user from './userReducer';
import note from './noteReducer';
import dashboard from './dashBoardReducer';
import settings from './settingsReducer';
export default combineReducers({
    user,
    note,
    dashboard,
    settings
})
