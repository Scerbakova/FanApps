import React, { useEffect, useState } from "react";
import { Months } from "../../../../../../static/months";
import { NewsDate, DateBackground } from "./DateStyles";

const DateToday = () => {
  const [date, setDate] = useState("JUL 14TH, 2020");

  useEffect(() => {
    todayF();
  });

  const day = new Date().getDate();

  const st = [1, 21, 31];

  const which = () => {
    if (st.some((date) => date === day)) {
      return "ST";
    } else if (day === 2 || day === 22) {
      return "ND";
    } else if (day === 3 || day === 23) {
      return "RD";
    } else {
      return "TH";
    }
  };

  const todayF = () => {
    let today = new Date();
    const dateMonth = Months[today.getMonth()];
    const dateDay = day + which();
    const dateYear = today.getFullYear();

    setDate(dateMonth + " " + dateDay + ", " + dateYear);
  };

  return (
    <DateBackground>
      <NewsDate>{date}</NewsDate>
    </DateBackground>
  );
};
export default DateToday;
