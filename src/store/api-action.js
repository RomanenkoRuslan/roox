import { loadData } from "./action.js";

const getUsers = () => (dispatch, getStore, api) => {
    api.get('/users').then((response) => {
      dispatch(loadData(response.data));
    }).catch((error) => {
      console.error(error);
    })
  };

export default getUsers;