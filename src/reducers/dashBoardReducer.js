export default function reducer(state = {
	
	loading: false,
	loaded: false,
	error: null,
	note: []
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
	}
	return state;
}