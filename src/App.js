import { startOfToday } from "date-fns";
import React from "react";
import { useState } from "react";
import Calendar from "./components/Calendar";
import { CalendarContext } from "./contexts";

const App = () => {
  const [today, setToday] = useState(startOfToday())
  const [selected, setSelected] = useState(today)
  return (
    <>
      <CalendarContext.Provider value={[today, setToday, selected, setSelected]}>
        <Calendar />
      </CalendarContext.Provider>
    </>
  );
};

export default App;
