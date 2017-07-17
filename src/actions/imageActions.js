import API from '../components/API';
import Request from 'superagent';


export function uploadImage(files){
	return function(dispatch){
		dispatch({type:"UPLOAD_IMAGE"})
		var url = API.url('notes');
		var formData = new FormData();

		for (var key in files) {
    	// is the item a File?
    		if (files.hasOwnProperty(key) && files[key] instanceof File) {
        		formData.append(key, files[key]);
   	 		}
		}

		formData.append('entry', 'wowwowoww'); 
		formData.append('title', 'meow'); 


		console.log(formData.getAll('note'))
	    	Request.post(url)
	    	.send(formData)
			.end((err,res) => {
	    	console.log(res);
	    })
	    // .end((err,res) => {
	    // 	if(res.status == 200){
	    //     	console.log("added")
	    // 		dispatch({type:"UPLOAD_IMAGE_DONE", payload: res});
	    // 	}
	    //   	else{
	    //     	console.log("failed");
	    //     	dispatch({type:"UPLOAD_IMAGE_ERR", payload: res});
	    // 	}
	    // })
	}
}
