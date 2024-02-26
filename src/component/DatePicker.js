import React, { useState } from "react";
import { generateDate, months } from "./CalenderUtils/calender";
import dayjs from "dayjs";
// import moment from "moment";

export default function DatePicker() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  // var date = moment()
  //     .utcOffset('+05:30')
  //     .format('YYYY-MM-DD hh:mm:ss a');
  // console.log('date', date)
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const newDate = generateDate(today.month(), today.year());


  return (
    <div className="calenderInn flex justify-around items-center">
      <div className="w-96 h-96 ">
        <div className="flex justify-around items-center">
          <div className="flex gap-10 items-center ">
            <span
              className="icon-left-d-arrow cursor-pointer text-3xl text-spiroDiscoBall"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            ></span>
            <h2 className="select-none font-semibold text-spiroDiscoBall">
              {months[today.month()]}, {today.year()}
            </h2>
            <span
              className="icon-right-d-arrow cursor-pointer text-3xl text-spiroDiscoBall"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            ></span>
          </div>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <p
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-xl text-black font-extralight select-none"
              >
                {day}
              </p>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                const dates = date.date();
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm  "
                  >
                    <p
                      className={`
                                               h-10 w-10 rounded-full grid place-content-center transition-all select-none
                                            `}
                    >
                      {currentMonth ? dates : null}
                    </p>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
