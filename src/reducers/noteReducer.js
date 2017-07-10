export default function reducer(state = {
	
	creating: false,
	created: false,
	error: null,
	text: "",
	selectedNote: "",
  notes: []
	},action){
	switch(action.type){
		case "CREATE_NOTE": {
			return {...state,creating:true}
		}
		case "CREATE_NOTE_DONE": {
			return {...state,
				creating: false,
				created: true,
				// Note: action.payload
			}
		}
		case "CREATE_NOTE_ERR": {
			return {...state,error: action.payload}
		}

    case "LOAD_NOTES": {
      return {...state,loadingNote: true}
    }

    case "LOAD_NOTES_DONE": {
      console.log(action.payload)
      return {...state, 
        loadedNote: true, loadingNote: false, notes: action.payload}
    }
    case "LOAD_NOTES_ERR": {
			return {...state,error: action.payload}
		}

		case "QUILL_UPDATE": {
			return {...state,text: action.payload}
		}

		case "SELECT_NOTE": {
			return {...state,selectedNote: action.payload}
		}
	}
	return state;
}
