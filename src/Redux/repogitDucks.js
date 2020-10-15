import axios from 'axios';

//constantes
const initialState={
    data:[],
    page:0,
}

//types
const INFOREPOS_USUARIO="INFOREPOS_USUARIO"

const UPDATELIST="UPDATELIST"

//reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATELIST:
        return {...state, data: action.payload }
      case INFOREPOS_USUARIO:
        return {...state, data: action.payload }
    
            default:
                return state
    }
  }

//actions
export const infoReposAccion = (user) => async (dispatch, getState) => {


    const url = `https://api.github.com/users/${user}/repos?sort=updated`;

    try {
      const res = await axios.get(url);
      console.log("repos api", res.data);
      dispatch({
        type: INFOREPOS_USUARIO,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateList = (list) => async (dispatch, getState) => {
     dispatch({
        type: UPDATELIST,
        payload: list
      })
  };