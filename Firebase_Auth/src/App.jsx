import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <h1>Firebase Auth</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <Logout />
        </div>
      ) : (
        <>
          <Login />
          <SignUp />
        </>
      )}
    </div>
  );
}

export default App;
