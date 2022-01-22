
import { ComponentResolver } from "ag-grid/dist/lib/components/framework/componentResolver";
import axios from "axios";
import{SET_REMINDERS} from '../constant'

 

   export const FetchUser=()=>{
       console.log("sds");
    return function(dispatch){
        // dispatch(userRequest())  // you called another function here
        axios.get("http://localhost:1234/project")
        .then(response=>{
                        
            console.log("asd")
                        
            const users=response.data
            console.log("ttt",response.data);
            dispatch(userSuccess(users))
                console.log("fff",response.data)
        })
    }
}
        

      export function userSuccess(users){
        return{
          type:SET_REMINDERS,
          payload: users
        }
      }
    
 
 