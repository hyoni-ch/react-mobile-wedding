import React from "react";
import { GuestBookBox } from "../styles/GuestBookBox";
import Fade from "react-reveal/Fade";

export default function GuestBook() {
  return (
    <GuestBookBox className="relative spacerB">
      <Fade bottom cascade delay={500}>
        <div className="bg-img-top">
          <img
            src="https://cdn2.makedear.com/homepage/img/bg3/pink-top.png"
            alt=""
            width="100%"
            className="bg-point"
          />
        </div>
      </Fade>
      <Fade bottom delay={500}>
        <h2 className="title pointColor">guest book</h2>
      </Fade>
    </GuestBookBox>
  );
}
