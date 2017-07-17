export default function reducer(state = {
	
	uploadingImage: false,
	uploadingImageDone: false,
	error: null,
	},action){
	switch(action.type){
		case "UPLOAD_IMAGE": {
			return {...state,uploadingImage:true}
		}
		case "UPLOAD_IMAGE_DONE": {
			return {...state,
				uploadingImage: false,
				uploadingImageDone: true
			}
		}
		case "UPLOAD_IMAGE_ERR": {
			return {...state,error: action.payload, uploadingImage: false}
		}
	}
	return state;
}
