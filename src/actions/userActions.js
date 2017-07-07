import Request from 'superagent';
import API from '../components/API';

export function fetchCurrentUser(user){
  let payload = {}
  return function(dispatch) { 
    dispatch({type:"FETCH_CURRENT_USER"})

    var url = API.url('tokens/verify');
    var success = (res) => {
        var response = res.token
        localStorage.diary_user_token = response;
        dispatch({type:"FETCH_CURRENT_USER_DONE", payload: res.token})
    }
    var failure = (res) => {
      dispatch({type:"FETCH_CURRENT_USER_ERROR", payload: res})
    }
    API.post(url,user,success,failure)
  }
}

export function verifyCurrentUser(){
  let payload = {}
  var token = localStorage.diary_user_token
  return function(dispatch) { 
    dispatch({type:"VERIFY_CURRENT_USER"})

    var url = API.url('tokens/verify_token');
    var success = (res) => {
         dispatch({type:"VERIFY_CURRENT_USER_DONE", payload: res.user})
    }
    var failure = (res) => {
          dispatch({type:"VERIFY_CURRENT_USER_ERROR", payload: res})
    }
    API.post(url,token,success,failure)
  }
}

export function registerUser(user){
  let payload = {}
  return function(dispatch){
    dispatch({type:"REGISTER_USER"})

    var url = API.url('users');
    var success = (res) => {
          console.log("register successfull")
          dispatch({type:"REGISTER_USER_DONE", payload: res.user})
    }
    var failure = (res) => {
        console.log("register failed")
        dispatch({type:"REGISTER_USER_ERROR", payload: res})
    }
    API.post(url,{user},success,failure)
  }
}
