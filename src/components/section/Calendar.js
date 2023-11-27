import React from "react";
import { CalendarBox } from "../styles";
import Fade from "react-reveal/Fade";

class Calendar extends React.Component {
  state = {
    year: 2024,
    month: 2, // 3월은 2로 표현됩니다. (0부터 시작하는 인덱스)
  };

  render() {
    const weddingDay = new Date("2024-03-24");
    const today = new Date();
    const dDay = Math.floor((weddingDay - today) / (1000 * 60 * 60 * 24));
    const { year, month } = this.state;
    const cal = this.generateCalendar(year, month);
    const weeks = ["일", "월", "화", "수", "목", "금", "토"];

    return (
      <CalendarBox className="textAlignCenter relative">
        <Fade bottom cascade delay={500}>
          <div className="bg-img">
            <img
              src="https://cdn2.makedear.com/homepage/img/bg3/white-top.png"
              alt=""
              width="100%"
              className="bg-point"
            />
          </div>
        </Fade>

        <h2 className="title pointColor">Calendar</h2>

        <section className="calendar flex flex-col">
          <div style={{ marginBottom: "20px" }}>
            <strong>{month + 1}월</strong>
          </div>

          <table>
            <thead>
              <tr>
                {weeks.map((week, idx) => {
                  return (
                    <th className={`table-th ${idx === 0 ? "pointColor" : ""}`}>
                      <div>{weeks[idx]}</div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {cal.map((week, index) => (
                <tr key={index}>
                  {week.map((day, idx) => {
                    return (
                      <td key={idx} className="table-td">
                        <div
                          className={`td-div flex ${
                            day !== 0 && index === 4 && idx === 0
                              ? "special-day"
                              : ""
                          } ${day !== 0 && idx === 0 ? "pointColor" : ""}`}
                        >
                          <div>{day !== 0 ? day : ""}</div>

                          <div
                            className={` ${
                              day !== 0 && index === 4 && idx === 0
                                ? "special-day-time"
                                : ""
                            }`}
                          >
                            {index === 4 && idx === 0 && "오전 11:30"}
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <Fade bottom cascade delay={500}>
            <div>
              <p>
                {" "}
                창경 <span className="pointColor">♥</span> 하나의 결혼식이{" "}
                <string>
                  <span className="pointColor">{dDay}</span>일 남았습니다.
                </string>
              </p>
            </div>
          </Fade>
        </section>
      </CalendarBox>
    );
  }

  generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let day = 1;
    const calendar = [];

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(0);
        } else if (day <= lastDate) {
          week.push(day++);
        } else {
          week.push(0);
        }
      }
      calendar.push(week);
    }

    return calendar;
  }
}

export default Calendar;
