import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from "react";

type UserType = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

type AuthType = {
  loading: boolean;
  userInfo: UserType | null;
};

interface UserContextInterface {
  auth: AuthType;
  setAuth: Dispatch<SetStateAction<AuthType>>;
}

export const AuthContext = createContext<Partial<UserContextInterface>>({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthType>({
    loading: true,
    userInfo: null
  });

  useEffect(() => {
    setTimeout(() => {
      setAuth((prevState) => ({ ...prevState, loading: false }));
    }, 2000);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
