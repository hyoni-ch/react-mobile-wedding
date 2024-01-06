import React, { useState, useEffect } from "react";
import axios from "axios";
import { GuestBookBox } from "../../styles/GuestBookBox";
import Fade from "react-reveal/Fade";
import Upload from "./Upload";

export default function GuestBook() {
  return (
    <GuestBookBox className="relative spacerB bg-pink box-sizing">
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

      <section className="flex flex-col">
        <Fade bottom delay={500}>
          <h3>방명록</h3>
          <div
            className="line"
            style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
          ></div>
        </Fade>
        <div className="btn btn-upload">글쓰기</div>
        <Upload />
      </section>
    </GuestBookBox>
  );
}
