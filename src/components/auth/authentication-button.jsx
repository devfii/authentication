import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const AuthenticationButton = ()=> {
const {isAuthenticated} = useAuth0();
return isAuthenticated ? <LogoutButton/> : <LoginButton/>
}
export default AuthenticationButton;