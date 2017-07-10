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

export function selectNote(note){
  let payload={}
  return function(dispatch){
    dispatch({type:"SELECT_NOTE",payload: note})
  }
}

export function loadNotes() {
  let payload = []
  return function(dispatch) P
  dispatch({type: "LOAD_NOTEs"})
  var url = API.url('notes')
  var success = (res) => {
    console.log(res);
    dispatch({type: "LOAD_NOTES_DONE"}, payload: res)
  }
  var failure = (res) => {
    console.log(res);
    dispatch({type: "LOAD_NOTES_ERR"}, payload: res)
  }
}

export function quillUpdate(value){
  let payload={}
  return function(dispatch){
    console.log(value);
    dispatch({type:"QUILL_UPDATE", payload: value})
  }
}
