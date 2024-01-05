import React from "react";
import { MentBox } from "../styles/MentBox";
import Fade from "react-reveal/Fade";
import { intro_image } from "../../assets/images";

export default function Ment() {
  return (
    <MentBox className="flex flex-col bg-gray">
      <section className="poetryBox">
        <Fade bottom delay={500}>
          <img
            src="https://cdn2.makedear.com/homepage/img/leaf1.png"
            draggable="false"
            alt="Img"
            className="mentImg pointColor"
          />
        </Fade>
        <Fade bottom cascade delay={500}>
          <div className="poetry nanumFont lineHeight flex flex-col ">
            <p>저절로 웃음이 났다.</p>
            <p>웃는 남자를 보고 여자도 웃었다.</p>
            <p>마음에 꽃이 피는 것 같았다.</p>
            <p>정말로 봄이었다.</p>
            <p> </p>
            <p>{`정현주 <다시, 사랑>`}</p>
          </div>
        </Fade>
      </section>

      <section>
        <img src={intro_image} alt="" height="660px" width="100%" />
      </section>

      <section>
        <Fade bottom delay={500}>
          <h2 className="title pointColor">Invite you</h2>
        </Fade>
        <Fade bottom cascade delay={500}>
          <ul className="lineHeight">
            <li>함께 있을 때 가장 나다운 모습이 되고</li>
            <li>함께 있을 때 미래를 꿈꾸게 하는 사람을 만나</li>
            <li>저희 둘, 결혼합니다.</li>
            <br></br>
            <li>지금처럼 서로에게 가장 친한 친구가 되어</li>
            <li>예쁘고 행복하게 잘 살겠습니다.</li>
            <br></br>
            <li>저희 두 사람의 새로운 시작을</li>
            <li>함께하시어 축복해 주시면 감사하겠습니다.</li>
          </ul>
        </Fade>
      </section>

      <section>
        <Fade bottom cascade delay={500}>
          <ul className="myName">
            <li>
              <strong>손용래</strong> · <strong>김은희</strong>의 장남{" "}
              <strong>창경</strong>
            </li>
            <li>
              <strong>조규정</strong> · <strong>조수정</strong>의 장녀{" "}
              <strong>하나</strong>
            </li>
          </ul>
        </Fade>
      </section>
    </MentBox>
  );
}
