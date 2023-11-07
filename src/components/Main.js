import React from "react";
import { MainBox } from "./styles";
import styled from "styled-components";
import Ment from "./section/Ment";
import Gallery from "./section/Gallery";
import Video from "./section/Video";
import Location from "./section/Location";
import Bank from "./section/Bank";
import Share from "./section/Share";

export default function Main() {
  return (
    <MainBox>
      <Video />
      <Ment />
      <Gallery />
      <Location />
      <Bank />
      <Share />
    </MainBox>
  );
}
