export function loadSettings(value,changeStyle){
	let payload = {}
	return function(dispatch){
		dispatch({type:"LOAD_SETTINGS",payload:value})

	}
}
