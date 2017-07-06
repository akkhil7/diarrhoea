export default function reducer(state = {
	current: ""
	},action){
	switch(action.type){
		case "LOAD_SETTINGS": {
			return {...state,current:action.payload}
		}
	}
	return state;
}