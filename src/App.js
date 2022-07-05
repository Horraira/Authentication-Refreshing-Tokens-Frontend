import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContex";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header></Header>
          <br></br>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage></HomePage>
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
