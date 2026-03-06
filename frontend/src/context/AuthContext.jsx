import { useEffect } from "react";
import { createContext, useState } from "react";
import API from "../api/axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


export const AuthProvider = ({children}) => { 

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    API.get("/auth/me") 
    .then( res => setUser(res.data ))
    .catch(() => setUser(null))
    .finally(() => setLoading(false))

   },[])

   const register = async(name,email,password) => { 
    const res = await API.post("/auth/register",{name,email,password})
    setUser(res.data.user)
    }
    const login = async(email,password) => { 
    const res = await API.post("/auth/login",{email,password})
    setUser(res.data.user)
    }
    const logout = async(email,password) => { 
    await API.get("/auth/logout",{email,password})
    setUser(null)
    };
    return (
      <AuthContext.Provider value={{user,login,logout,register,loading}}>
        {children}
      </AuthContext.Provider>
    )

 }