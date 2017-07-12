export default function reducer(state = {
  token: {},
  currentUser:{},
  fetching: false,
  fetched: false,
  verifyingUser: false,
  verifiedUser: false,
  registering:false,
  registered:false,
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
      error: action.payload
      }
    }
    case "VERIFY_CURRENT_USER":{
      return {...state, verifyingUser: true}
    }
    case "VERIFY_CURRENT_USER_DONE": {
      return {...state,
        verifiedUser: true,
        verifyingUser: false,
        currentUser: action.payload
      }
    }
    case "VERIFY_CURRENT_USER_ERROR": {
      return {...state,
        verifiedUser: false,
        veriyingUser: false,
        verifyUserError: action.payload
      }
    }
    

    
    case "REGISTER_USER":{
      return{...state, registering: true}
    }
    
    case "REGISTER_USER_DONE":{
      return{
        ...state,
        registered: true,
        registering: false
      }
    }

    case "REGISTER_USER_ERROR":{
      return{
        ...state,
        registering:false,
        error: action.err
      }
    }
  }
  return state;
}
