import { createContext } from 'react';
import { AuthContextType } from '../api/types';

const authContext: AuthContextType = {
  isAuth: 0,
  setIsAuth: () => undefined
};

export const AuthContext = createContext(authContext);
