import { environment } from '../../environments/environment'
export const API_CONFIG = {
	GET_USERS_DETAILS : environment.API_URL+"/users",
	GET_USER_DETAIL : environment.API_URL+"/users/{user-id}",
	POST_USER_INFO : environment.API_URL+"/users"
}