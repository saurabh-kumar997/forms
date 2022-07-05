import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CustomCard from "./components/Card/CustomCard";
import Layout from "./Layout/Layout";
import MyRoutes from "./Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
