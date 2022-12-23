import {REGISTER,LOGIN_REQUEST,FAIL,LOAD_DATA,LOAD_SUCCESS,ADDPET} from '../ActionTypes'

const initstate = {
    users :[],
    error:null,
    loading:false,
}

const userReducer = (state = initstate ,{type,payload}) => {
    switch (type) {
        case LOAD_DATA:
            return {
                ...state,
                loading:true
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                loading:false,
                users:payload
            }

        case REGISTER:
            let b = [...state.users,payload]
            return {
                ...state,
                users:b,
                loading:false
            }
        
        case LOGIN_REQUEST:
            return{
                ...state,
                loading:true  
            }

        case FAIL:
            return{
                ...state,
                error:payload,
                loading:false
            }
        
    
        default:
            return state
    }
}

export default userReducer;
