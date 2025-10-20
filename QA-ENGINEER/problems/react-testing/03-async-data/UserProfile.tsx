import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchUser = async (id: number): Promise<User> => {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error('Failed');
  return res.json();
};

export const UserProfile: React.FC<{ userId: number }> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      const data = await fetchUser(userId);
      setUser(data);
      setError(null);
    } catch (err) {
      setError('Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div><p>{error}</p><button onClick={load}>Retry</button></div>;
  return <div><h1>{user?.name}</h1><p>{user?.email}</p></div>;
};
