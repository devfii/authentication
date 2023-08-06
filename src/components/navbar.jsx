import {NavLink} from 'react-router-dom'
const NavBar = () => (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/"
        exact="true"
        className={({isActive})=>isActive?"host-nav-active": "nav-link"}
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        exact="true"
        className={({isActive})=>isActive?"host-nav-active": "nav-link"}
      >
        Profile
      </NavLink>
      <NavLink
        to="/external-api"
        exact="true"
        className={({isActive})=>isActive?"host-nav-active": "nav-link"}
      >
        External API
      </NavLink>
    </div>
  );
  
  export default NavBar;