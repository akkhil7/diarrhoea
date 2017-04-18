export default function reducer(state = {
  currentUser: {},
  fetching: false,
  fetched: false,
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
  }
  return state;
}
