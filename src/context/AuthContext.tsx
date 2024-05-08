import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import useFetch from '@/hooks/useFetch';

type IUser = {
  id: string;
  name: string;
  email: string;
};

type IToken = {
  token: string;
};

type IUserAuth = IUser & IToken;

type ILoginData = {
  email: string;
  password: string;
};

type IRegisterData = {
  email: string;
  password: string;
  confirmPassword: string;
};

type IAuthContext = {
  user: IUserAuth | null;
  loading: boolean;
  error: string | Array<any> | null;
  login(loginData: ILoginData): Promise<void>;
  register(registerData: IRegisterData): Promise<void>;
  logout(): void;
};

const AuthContext = React.createContext<IAuthContext | null>(null);

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be within AuthContextProvider');
  }
  return context;
}

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<IUserAuth | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | Array<any> | null>(null);

  const login = async (loginData: ILoginData) => {
    /** REMOVER DAQUI */
    const teste = {
      id: '123',
      name: 'Silvio Lucas',
      email: 'silvio@hotmail.com',
      token: 'gbhjh3wevhg4h23b34v2',
    };

    await AsyncStorage.multiSet([
      ['@Nanicas@Tatame:token', teste.token],
      ['@Nanicas@Tatame:user', JSON.stringify(teste)],
    ]);

    const [token, user] = await AsyncStorage.multiGet([
      '@Nanicas@Tatame:token',
      '@Nanicas@Tatame:user',
    ]);
    console.log('LOGIN', token, user);

    setUser(teste);
    return;
    /** ATÉ DAQUI */

    setLoading(true);

    const { data, error } = useFetch<{ access_token: string }>({
      method: 'post',
      url: '/login',
      options: {
        data: loginData,
      },
    });

    if (error) {
      setError(error);
    } else if (data && data.access_token) {
      await getUserData(data.access_token);
    }

    setLoading(false);
  };

  const register = async (registerData: IRegisterData) => {
    /** REMOVER DAQUI */
    const teste = {
      id: '123',
      name: 'Silvio Lucas',
      email: 'silvio@hotmail.com',
      token: 'gbhjh3wevhg4h23b34v2',
    };

    await AsyncStorage.multiSet([
      ['@Nanicas@Tatame:token', teste.token],
      ['@Nanicas@Tatame:user', JSON.stringify(teste)],
    ]);

    const [token, user] = await AsyncStorage.multiGet([
      '@Nanicas@Tatame:token',
      '@Nanicas@Tatame:user',
    ]);
    console.log('REGISTER', token, user);

    setUser(teste);
    return;
    /** ATÉ DAQUI */

    setLoading(true);

    const { data, error } = useFetch<{ access_token: string }>({
      method: 'post',
      url: '/register',
      options: {
        data: registerData,
      },
    });

    if (error) {
      setError(error);
    } else if (data && data.access_token) {
      await getUserData(data.access_token);
    }

    setLoading(false);
  };

  const logout = async () => {
    /** REMOVER DAQUI */
    setUser(null);

    await AsyncStorage.multiRemove([
      '@Nanicas@Tatame:token',
      '@Nanicas@Tatame:user',
    ]);

    return;
    /** ATÉ DAQUI */

    setLoading(true);

    const { error } = useFetch({
      method: 'post',
      url: '/logout',
      options: {
        headers: {
          Authorization: 'Bearer ' + user?.token,
        },
      },
    });

    if (error) {
      setError(error);
    } else {
      setUser(null);

      await AsyncStorage.multiRemove([
        '@Nanicas@Tatame:token',
        '@Nanicas@Tatame:user',
      ]);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    const loadStoredData = async () => {
      const [token, user] = await AsyncStorage.multiGet([
        '@Nanicas@Tatame:token',
        '@Nanicas@Tatame:user',
      ]);

      /** REMOVER DAQUI */
      console.log('LOAD', token, user);
      setUser(user[1]);
      return;
      /** ATÉ DAQUI */

      if (token[1] && user[1]) {
        const user = await getUserData(token[1]);

        if (error) {
          setUser(null);
          setError(error);
        } else if (user) {
          setUser(user);
        }
      }
    };

    loadStoredData();
  }, []);

  const getUserData = async (token: string): Promise<IUserAuth | undefined> => {
    const { data, error } = useFetch<IUser>({
      method: 'get',
      url: '/user',
      options: {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    });

    if (error) {
      setUser(null);
      setError(error);
    } else if (data) {
      const user = {
        ...data,
        token,
      };

      await AsyncStorage.multiSet([
        ['@Nanicas@Tatame:token', token],
        ['@Nanicas@Tatame:user', JSON.stringify(user)],
      ]);

      setUser(user);
      return user;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
