import React from "react";
import { useEffect, useState } from "react";
import WeekendSpecialDetail from "../WeekendSpecialDetail/WeekendSpecialDetail";

const WeekendSpecial = () => {
  const [weekendSpecials, setWeekendSpecial] = useState([]);
  useEffect(() => {
    fetch("weekendSpecial.json")
      .then((res) => res.json())
      .then((data) => setWeekendSpecial(data));
  }, []);
  return (
    <div id="weekendSpecial">
      <h2 className="text-primary text-center fw-bolder fs-3  my-4">
        My Weekend Special Services
      </h2>
      <div className="row g-4">
        {weekendSpecials.map((weekendSpecial) => (
          <WeekendSpecialDetail
            key={weekendSpecial.id}
            weekendSpecial={weekendSpecial}
          ></WeekendSpecialDetail>
        ))}
      </div>
    </div>
  );
};

export default WeekendSpecial;
