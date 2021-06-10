import React, { useState } from 'react';
import AuthContext from './auth-context';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = () => {
	const [isLoggedIn, serIsLoggedIn] = useState(false);
	const logoutHandler = () => {
		setIsloggedIn(false);
	};

	const loginHandler = () => {
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
