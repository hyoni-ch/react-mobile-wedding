import React from "react";
import Ment from "./section/Ment";
import Gallery from "./section/Gallery";
import Intro from "./section/Intro";
import Calendar from "./section/Calendar";
import Location from "./section/Location";
import Bank from "./section/Bank";
import GuestBook from "./section/GuestBook";
import Share from "./section/Share";

export default function Layout() {
  return (
    <>
      <Intro />
      <Ment />
      <Calendar />
      <Gallery />
      <Location />
      <Bank />
      <Share />
    </>
  );
}
