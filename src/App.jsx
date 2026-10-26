import "./App.css";
import Home from "./pages/Home.jsx";
import ContactPage from "./pages/Contact.jsx";

function App() {
  if (window.location.pathname === "/contact") {
    return <ContactPage />;
  }

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
