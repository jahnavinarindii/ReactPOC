import { GET_FORMDATA, SET_FORMDATA} from './actionTypes.js'

const initialState = {
	formData:500,
	loading:false,

}

const formdataReducer = (state = initialState, action) => {
	console.log('hi')

	switch(action.type){
		case SET_FORMDATA:
			
		return {
			...state,
			formData: action.data,
			loading:false
		}
		case GET_FORMDATA: return {
			...state,
			loading:true
		}
	default : return state
	}
}

export default formdataReducer;