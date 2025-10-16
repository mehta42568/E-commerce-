import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const signup = ({ name, email, phone, password }) => {
    const alreadyExists = registeredUsers.find(u => u.email === email);
    if (alreadyExists) throw new Error("User already exists!");
    const newUser = { name, email, phone, password };
    setRegisteredUsers(prev => [...prev, newUser]);
    setUser(newUser);
  };

  const login = ({ email, password }) => {
    const found = registeredUsers.find(u => u.email === email && u.password === password);
    if (!found) throw new Error("Invalid credentials!");
    setUser(found);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
