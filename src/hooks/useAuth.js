import { useContext } from "react"
import { authContect } from "../Context/AuthProvider";

const useAuth = () => {
    return useContext(authContect);
}

export default useAuth;