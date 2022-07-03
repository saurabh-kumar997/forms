import "./App.css";
import CustomCard from "./components/Card/CustomCard";
import CustomDatePicker from "./components/Date";
import Radio from "./components/Radio";
import Switch from "./components/Switch";

function App() {
  return (
    <div>
      <CustomDatePicker />
      {/* <Switch label="Required" /> */}
    </div>
  );
}

export default App;
