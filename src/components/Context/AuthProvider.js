import { Spin } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        history.push('/');
      }

      history.push('/login');
    });

    // Clean functions
    return () => {
      unsubscribe();
    };
  }, [history]);

  return (
    <div>
      <AuthContext.Provider value={{ user }}>
        {isLoading ? <Spin /> : children}
      </AuthContext.Provider>
    </div>
  );
}
