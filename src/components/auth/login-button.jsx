import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ()=> {
    const {loginWithRedirect} = useAuth0();
    
    return (
        <button
            className="btn btn-primary btn-block"
            onClick={async ()=> loginWithRedirect({
                appState: {
                    returnTo: window.location.pathname,
                }
            })}
        >
            Login
        </button>
    )
}

export default LoginButton;