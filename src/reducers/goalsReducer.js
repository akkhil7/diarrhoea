export default function reducer(state = {
	creating: false,
	created: false,
	fetching: false,
	fetched: false,
	error: null,
	goals: []
	},action){
	switch(action.type){
		case "FETCH_GOALS": {
			return {...state,fetching:true}
		}
		case "FETCH_GOALS_DONE": {
			return {...state,
				fetching: false,
				fetched: true,
				goals: action.payload
			}
		}
		case "FETCH_GOALS_ERR": {
			return {...state,error: action.payload}
		}
		case "CREATE_GOAL": {
			return {...state,creating:true}
		}
		case "CREATE_GOAL_DONE": {
			return {...state,
				creating: false,
				created: true
			}
		}
		case "CREATE_GOAL_ERR": {
			return {...state,error: action.payload}
		}


	}
	return state;
}