export default function reducer(state = {
  token: {},
  currentUser:{},
  fetching: false,
  fetched: false,
  verifing: false,
  verified: false,
  error: null
}, action){
  switch (action.type) {
    case "FETCH_CURRENT_USER":{
      return {...state, fetching: true}
    }
    case "FETCH_CURRENT_USER_DONE": {
      return {...state,
        fetched: true,
        fetching: false,
        token: action.payload
      }
    }
    case "FETCH_CURRENT_USER_ERROR": {
      return {...state,
      fetching: false,
      error: action.err
      }
    }
    case "VERIFY_CURRENT_USER":{
      return {...state, verifing: true}
    }
    case "VERIFY_CURRENT_USER_DONE": {
      return {...state,
        verified: true,
        verifing: false,
        currentUser: action.payload
      }
    }
  }
  return state;
}
