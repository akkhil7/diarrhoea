import Request from 'superagent';

export function fetchCurrentUser(user){
  let payload = {}
  return function(dispatch) { 
    dispatch({type:"FETCH_CURRENT_USER"})
    Request
    .post("http://localhost:3000/tokens/verify")
    .send({user:user})
    .end((err,res) => {
      if(res.status == 200)
        {
          var response = JSON.parse(res.text).token
          localStorage.diary_user_token = response;
          res = JSON.parse(res.text)
          dispatch({type:"FETCH_CURRENT_USER_DONE", payload: res.token})
        }
      else
        dispatch({type:"FETCH_CURRENT_USER_ERROR", payload: err})
    })
  }
}

export function verifyCurrentUser(){
  let payload = {}
  var token = localStorage.diary_user_token
  return function(dispatch) { 
    dispatch({type:"VERIFY_CURRENT_USER"})
    Request
    .post("http://localhost:3000/tokens/verify_token")
    .send({token:token})
    .end((err,res) => {
      if(res.status == 200)
        {
          res = JSON.parse(res.text)
          dispatch({type:"VERIFY_CURRENT_USER_DONE", payload: res.user})
        }
      else
        dispatch({type:"VERIFY_CURRENT_USER_ERROR", payload: err})
    })
  }
}