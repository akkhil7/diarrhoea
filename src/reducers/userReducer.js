export default function reducer(state = {
  currentUser: {},
  User:{},
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
        currentUser: action.payload
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
        User: action.payload
      }
    }
  }
  return state;
}
