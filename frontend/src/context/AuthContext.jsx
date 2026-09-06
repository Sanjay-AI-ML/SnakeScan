import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [profile, setProfile] = useState(null);
  const [token, setToken]     = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (u) {
        const t = await u.getIdToken();
        setUser(u); setToken(t);
        try {
          const r = await fetch(`/api/profile/${u.uid}`, { headers: { Authorization: `Bearer ${t}` } });
          setProfile(r.ok ? await r.json() : null);
        } catch { setProfile(null); }
      } else {
        setUser(null); setToken(null); setProfile(null);
      }
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, setProfile, token, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
