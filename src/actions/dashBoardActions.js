import API from '../components/API';

export function loadCalendarData(){
  let payload = {}
  return function(dispatch) { 
    var url = API.url('notes')
    dispatch({type:"LOAD_CALENDAR"})
    var success = (res) => {
      console.log(res);
      dispatch({type:"LOAD_CALENDAR_DONE", payload: res})
    }

    var failure = (res) => {
      dispatch({type:"LOAD_CALENDAR_ERR", payload: res})
    }

    API.get(url,success,failure)
  }

} 

export function toggleGoal(e,goal) {
  let payload = {}
  e.preventDefault();
  return function(dispatch) {
    console.log(goal);
    dispatch({type: "TOGGLE_GOAL", payload: goal})
  }
}
