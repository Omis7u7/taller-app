import { useState } from 'react';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import ClientePanel from './pages/ClientePanel';

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
    <div className="App">
      {!userRole && <Login onLogin={handleLogin} />}
      {userRole === 'admin' && <AdminPanel />}
      {userRole === 'cliente' && <ClientePanel />}
    </div>
  );
}

export default App;
