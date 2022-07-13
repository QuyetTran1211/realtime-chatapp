import React, { createContext, useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        history('/');
        return;
      }

      setUser({});
      setIsLoading(false);
      history('/login');
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
