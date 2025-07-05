import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useAuth = () =>
{
    const location = useLocation();
    const nav = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const currentPath = location.pathname;
    const isAdminPath = currentPath.startsWith("/admin");
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(token !== null);
        if (token === null && isAdminPath) {
            nav("/login", { replace: true });
        } else if (token !== null && currentPath === "/login") {
            nav("/admin/dashboard", { replace: true });
        }
    }, []);
    return {isAuthenticated};
}

export default useAuth;

const AuthWrapper= ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const nav = useNavigate();
    const currentPath = location.pathname;
    const isAdminPath = currentPath.startsWith("/admin");
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null && isAdminPath) {
            nav("/login", { replace: true });
        } else if (token !== null && currentPath === "/login") {
            nav("/admin/dashboard", { replace: true });
        }
    }, []);
    return <>{children}</>;
}
export { AuthWrapper };


