import API from '../components/API';

export function createNote(note){
  let payload = {}
  return function(dispatch) { 
    dispatch({type:"CREATE_NOTE"})
    var url = API.url('notes');
    var success = (res) => {
      console.log("New note added successfully");
      dispatch({type:"CREATE_NOTE_DONE", payload: res});
    }
    var failure = (res) => {
      console.log("Failed to add new note");
      dispatch({type:"CREATE_NOTE_ERR", payload: res})
    }
    API.post(url,note,success,failure)
  }
}