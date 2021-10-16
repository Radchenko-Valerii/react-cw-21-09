import { startOfToday } from "date-fns";
import React from "react";
import { useState } from "react";
import Calendar from "./components/Calendar";
import { CalendarContext } from "./contexts";

const App = () => {
  const [today, setToday] = useState(startOfToday())
  return (
    <>
      <CalendarContext.Provider value={[today, setToday]}>
        <Calendar />
      </CalendarContext.Provider>
    </>
  );
};

export default App;
