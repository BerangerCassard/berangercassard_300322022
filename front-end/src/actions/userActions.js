import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({type : USER_LOGIN_REQUEST});
		const config = {
			header: {
				"Content-type" : "application/json"
			}
		}
		const { data } = await axios.post(
			'http://localhost:3001/api/v1/user/login',
			{email, password},
			config
		)
		dispatch({ type : USER_LOGIN_SUCCESS, payload: data});
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
				? error.response.data.message
				: error.message
		})
	}
}
