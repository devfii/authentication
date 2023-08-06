import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../loading";

export const AuthenticationGuard = ({component}) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: ()=> (<Loading />),
    })
    return <Component />;
}
