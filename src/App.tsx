import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./providers/AuthProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
