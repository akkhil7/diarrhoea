import {combineReducers} from 'redux';

import user from './userReducer';
import note from './noteReducer';
import dashboard from './dashBoardReducer';
import settings from './settingsReducer';
import goals from './goalsReducer';

export default combineReducers({
    user,
    note,
    dashboard,
    settings,
    goals
})
