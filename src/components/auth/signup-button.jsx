import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = ()=> {
    const {loginWithRedirect} = useAuth0();
    return (
        <button 
            className="btn btn-primary btn-block"
            onClick={()=>{
                loginWithRedirect({
                    'screen_hint': 'signup'
                })
            }}
        >
            Signup
        </button>
    )
}
export default SignupButton;