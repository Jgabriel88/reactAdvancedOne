import { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
	const ctx = useContext(AuthContext);
	return (
		<>
			<MainHeader onLogout={logoutHandler} />
			<main>
				{!ctx && <Login />}
				{ctx && <Home />}
			</main>
		</>
	);
}

export default App;
