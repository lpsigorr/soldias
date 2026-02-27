import { createContext, useContext, useState, useEffect, useCallback } from "react";

const RouterContext = createContext(null);

export function Router({ children }) {
  const [path, setPath] = useState(window.location.hash.replace("#", "") || "/");

  const navigate = useCallback((to) => {
    window.location.hash = to;
    setPath(to);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handler = () => {
      const p = window.location.hash.replace("#", "") || "/";
      setPath(p);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export const useRouter = () => useContext(RouterContext);