import {
    REGISTER, LOGIN_REQUEST, FAIL, LOAD_DATA, LOAD_SUCCESS, ADDPET
} from '../ActionTypes'


export const loadData = () => (dispatch) => {
    try {
        dispatch({ type: LOAD_DATA })
        const data = JSON.parse(localStorage.getItem("users")) || [];

        dispatch({
            type: LOAD_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({ type: FAIL, payload: error })
    }
}


export const registerUser = (userData) => (dispatch, getState) => {
    try {
        let Newuser = [...getState().user.users, userData]
        localStorage.setItem("users", JSON.stringify(Newuser))

        dispatch({
            type: REGISTER,
            payload: userData
        })
    }
    catch (error) {
        dispatch({
            type: FAIL,
            payload: error
        })
    }
}

export const userLogin = () => (dispatch) => {

    try {
        dispatch({ type: LOAD_DATA,})
    }
    catch (error) {
        dispatch({ type: FAIL, payload: error })
    }
}


export const addPet = (data) => (dispatch, getState) => {

    const loggeduser = JSON.parse(localStorage.getItem("logged"))
    let localdata = JSON.parse(localStorage.getItem("users")) || [];
    const filtered = localdata.filter((d, i) => {
        return d.username === loggeduser
    })
    let index = localdata.indexOf(filtered[0])
    localdata[index].pets.push(data)
    localStorage.setItem("users", JSON.stringify(localdata))
    dispatch({
        type: LOAD_SUCCESS,
        payload: localdata
    })
}

export const editData = (data) => (dispatch,getState) => {
    dispatch({
        type:LOAD_SUCCESS,
        payload:data
    })
    console.log(getState());
}