import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Header, Footer, Loading} from './components'
import { Home, Profile, ExternalApi} from './pages'; 
import { useAuth0 } from '@auth0/auth0-react';
import { AuthenticationGuard } from './components/auth/authguard';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Header />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/profile" element={<AuthenticationGuard component={Profile} />} />
            <Route path="/external-api" element={<ExternalApi />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>   
  );
}

export default App;
