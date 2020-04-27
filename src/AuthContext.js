import React from 'react';

const AuthContext = React.createContext({ logged: false, admin: false });

export default AuthContext;
