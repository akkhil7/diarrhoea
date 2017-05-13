export default function reducer(state = {
	Note: {},
	creating: false,
	created: false,
	error: null
	},action){
	switch(action.type){
		case "CREATE_NOTE": {
			return {...state,creating:true}
		}
		case "CREATE_NOTE_DONE": {
			return {...state,
				creating: false,
				created: true,
				// Note: action.payload
			}
		}
		case "CREATE_NOTE_ERR": {
			return {...state,error: action.payload}
		}
	}
	return state;
}