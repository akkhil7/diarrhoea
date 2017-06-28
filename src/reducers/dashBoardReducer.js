export default function reducer(state = {
	
	loading: false,
	loaded: false,
	error: null,
	note: [],
  showGoal: false,
  goal: {}
	},action){
	switch(action.type){
		case "LOADING_CALENDAR": {
			return {...state,loading:true}
		}
		case "LOADING_CALENDAR_DONE": {
			return {...state,
				loading: false,
				loaded: true,
				note: action.payload
			}
		}
		case "LOADING_CALENDAR_ERR": {
			return {...state,error: action.payload}
		}

    case "TOGGLE_GOAL": {
      var showGoal = showGoal
      return {...state, 
        showGoal: !showGoal,
        goal: action.payload
      }
    }
	}
	return state;
}
