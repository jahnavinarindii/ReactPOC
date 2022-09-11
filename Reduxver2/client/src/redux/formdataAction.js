import { GET_FORMDATA, SET_FORMDATA} from './actionTypes'


 
 export const setFormData = (data) => ({
  type: SET_FORMDATA,
  data
 });

 
 export const getFormData = () => ({
  type: GET_FORMDATA,
  
 });

