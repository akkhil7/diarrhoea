export default function reducer(state = {
	
	loadingCalendar: false,
	loadedCalendar: false,
	error: null,
	note: [],
	days: []
	},action){
	switch(action.type){
		case "LOAD_CALENDAR": {
			return {...state,loadingCalendar:true}
		}
		case "LOAD_CALENDAR_DONE": {
			console.log(action.payload)
			return {...state,
				loadingCalendar: false,
				loadedCalendar: true,
				note: action.payload.res,
				days: action.payload.days
			}
		}
		case "LOAD_CALENDAR_ERR": {
			return {...state,error: action.payload, loadingCalendar: false}
		}
	}
	return state;
}