import { Routes, Route } from "react-router-dom";
import Log from "./Login/Login";
import MonthData from "./Dashboard/MonthData";
import TransData from "./Transaction/TransData";
import JanT22 from "./Tables/janT22";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/MonthData" element={<MonthData />} />
        <Route path="/TransData" element={<TransData /> } />
        <Route path="/JanT22" element={<JanT22 />} />
      </Routes>
    </>
  );          
}

export default App;