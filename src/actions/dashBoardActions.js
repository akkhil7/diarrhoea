import API from '../components/API';

export function loadCalendarData(){
	let payload = {}
    return function(dispatch) { 
		var url = API.url('notes')
		dispatch({type:"LOAD_CALENDAR"})
    	var success = (res) => {
            const notes = res;
            const days = []
            for(var i = 0; i<notes.length; i++) {
                const createdDate = new Date(notes[i].created_at)
                const createdDay = createdDate.getUTCDate();
                days.push(createdDate);
            }
            const payload = {
                days: days,
                res: res
            }
            console.log(payload)
     		dispatch({type:"LOAD_CALENDAR_DONE", payload: payload})
     	}

    	var failure = (res) => {
     		dispatch({type:"LOAD_CALENDAR_ERR", payload: res})
  		}

    	API.get(url,success,failure)
    }

} 