import React, { useState, useEffect } from 'react';
import AuthContext from './auth-context';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = () => {
	const [isLoggedIn, serIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');
		if (storedUserLoggedInfo === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsloggedIn(false);
	};

	const loginHandler = () => {
		localStorage.setItem('isLoggedIn', '1');
		setIsloggedIn(true);
	};
	return (
		<AuthContext.Provider>
			value=
			{{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
