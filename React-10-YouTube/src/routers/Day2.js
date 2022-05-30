import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day from "../components/Day2/Day";
import DayList from "../components/Day2/DayList";
import EmptyPage from "../components/Day2/EmptyPage";
import Header from "../components/Day2/Header";

function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" exact element={<DayList />} />
            <Route path="/day/:day" exact element={<Day />} />
          </Routes>
        <EmptyPage />
    </BrowserRouter>
  );
}

export default App;