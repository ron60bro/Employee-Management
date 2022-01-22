import{SET_REMINDERS} from "../constant"
let defaultState={
    data:[]
}


const handleChange =(state=defaultState,action)=>{

switch(action.type){
    case SET_REMINDERS:
        return{
            ...state,
            data:action.payload
        }
        default:return state
}

 }
export default handleChange;