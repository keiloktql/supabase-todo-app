import { useSupabaseClient } from "@supabase/auth-helpers-react";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from "react";

type AuthType = {
  loading: boolean;
  event: string | null;
  userInfo: any;
};

interface UserContextInterface {
  auth: AuthType;
  setAuth: Dispatch<SetStateAction<AuthType>>;
}

export const AuthContext = createContext<Partial<UserContextInterface>>({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthType>({
    loading: true,
    event: null,
    userInfo: null
  });
  const supabaseClient = useSupabaseClient();

  // On initial load, check if user info is loaded
  useEffect(() => {
    (async () => {
      const user = await supabaseClient.auth.getUser();
      if (!user.data.user) {
        setAuth((prevVal) => ({ ...prevVal, loading: false }));
      }
    })();
  }, []);

  // Determine if user is logged in
  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT")
      setAuth({ loading: false, event, userInfo: null });
    if (event === "SIGNED_IN")
      setAuth({ loading: false, event, userInfo: session?.user });
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
