export function loadSettings(value,changeStyle){
	let payload = {}
	return function(dispatch){
		changeStyle();
		dispatch({type:"LOAD_SETTINGS",payload:value})

	}
}