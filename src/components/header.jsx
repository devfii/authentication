import AuthNav from "./auth/auth-nav";
import NavBar from "./navbar";

const Header = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <NavBar />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default Header;