import API from '../components/API';

export function fetchGoals(){
	let payload=[]
	return function (dispatch){
	dispatch({type:"FETCH_GOALS"})
	var url = API.url('goals')
	var success = (res) => {
        console.log(res)
     	dispatch({type:"FETCH_GOALS_DONE", payload: res})
    }

    var failure = (res) => {
     	dispatch({type:"FETCH_GOALS_ERR", payload: res})
  	}
  	API.get(url,success,failure)	
	}

}

export function createGoal(description){
	let payload = {}
  	return function(dispatch){
    dispatch({type:"CREATE_GOAL"})

    var url = API.url('goals');
    var success = (res) => {
          console.log("goal added")
          dispatch({type:"CREATE_GOAL_DONE", payload: res.user})
    }
    var failure = (res) => {
        console.log("goal not added")
        dispatch({type:"CREATE_GOAL_ERROR", payload: res})
    }
    API.post(url,{description},success,failure)
  }
}