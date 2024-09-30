import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, db } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { TextField, Button, Typography, Card, CardContent, Box, CircularProgress } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const createUserDocument = async (user) => {
    setLoading(true);
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);

    if (!userData.exists()) {
      const { displayName, email, photoURL } = user;
      const createdAt = new Date();

      try {
        await setDoc(userRef, {
          name: displayName || user.email.split("@")[0],
          email,
          photoURL: photoURL || "",
          createdAt,
        });
        toast.success("Account Created!");
      } catch (error) {
        toast.error(error.message);
        console.error("Error creating user document: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAuth = async (e, type) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (type === "signup") {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        await createUserDocument(user);
        toast.success("Successfully Signed Up!");
        navigate("/");
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged In Successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error during authentication: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await createUserDocument(user);
      toast.success("User Authenticated Successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.error("Error signing in with Google: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
      <Card sx={{ width: 400, padding: 3, boxShadow: 5 }}>
        <CardContent>
          <Typography variant="h5" component="div" textAlign="center">
            {isSignup ? "NEW USER REGISTRATION" : "USER LOGIN"}
          </Typography>
          <form onSubmit={(e) => handleAuth(e, isSignup ? "signup" : "login")}>
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="standard"
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="standard"
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#2196f3", color: "#fff" }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : isSignup ? "Sign Up" : "Log In"}
              </Button>
            </Box>
          </form>
          <Box sx={{ textAlign: "center", my: 1 }}>
            <Typography variant="body2">or</Typography>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
              onClick={handleGoogleAuth}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Log In with Google"}
            </Button>
          </Box>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="body2">
              {isSignup ? "Have an account? " : "Don't have an account? "}
              <span
                style={{ color: "#2196f3", cursor: "pointer" }}
                onClick={() => setIsSignup(!isSignup)}
              >
                Here
              </span>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
