import Request from 'superagent';

export function fetchCurrentUser(user){
  let payload = {}
  return function(dispatch) { 
    dispatch({type:"FETCH_CURRENT_USER"})
    Request
    .post("http://localhost:3000/tokens/verify")
    .send(user)
    .end((err,res) => {
      if(res.status == 200)
        {
          res = JSON.parse(res.text)
          dispatch({type:"FETCH_CURRENT_USER_DONE", payload: res.token})
        }
      else
        dispatch({type:"FETCH_CURRENT_USER_ERROR", payload: err})
    })
   }
}
