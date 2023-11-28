import styled from "styled-components";

const MainBox = styled.div`
  @font-face {
    font-family: "iceJaram-Rg";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceJaram-Rg.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumSquareRound";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  background-color: #fff;
  max-width: 440px;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;

  section {
    width: 100%;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-start {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .spacerB {
    padding-bottom: 100px;
  }

  .spacerB50 {
    padding-bottom: 50px;
  }

  .spacerT {
    padding-top: 100px;
  }

  .spacerT50 {
    padding-top: 50px;
  }

  .nanumFont {
    font-family: "NanumSquareRound";
  }

  .lineHeight {
    line-height: 2;
  }

  .text-left {
    width: 90%;
    text-align: left;
  }

  .font-size-095 {
    font-size: 0.95rem;
  }

  .pointColor {
    color: rgb(208, 140, 149);
  }

  .bg-gray {
    --tw-bg-opacity: 1;
    background-color: rgba(249, 249, 249, var(--tw-bg-opacity));
  }

  .relative {
    position: relative;
  }

  .bg-img {
    position: absolute;
    top: -50px;
    left: 0;
    z-index: 1;
  }

  .bg-img-top {
    position: absolute;
    top: -18px;
    left: 0;
    z-index: 1;
  }

  .bg-point {
    // filter: invert(73%) sepia(28%) saturate(714%) hue-rotate(306deg)
    //   brightness(86%) contrast(88%);
  }

  .title {
    font-family: "iceJaram-Rg";
    text-align: center;
    font-size: 1em;
    margin: 40px;
  }

  .line {
    width: 90%;
    border: 1px dashed #eee;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  .line2 {
    background-color: #fff;
    border-opacity: 1;
    border-color: rgb(238, 238, 238);
    border: 0 solid #e5e5e5;
    border-right-width: 1px;
    width: 1px;
    height: 1rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .btn {
    font-family: "SUIT-Regular";
    padding: 0.6rem;
    font-size: 0.925rem;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    color: #222;
  }
`;

const IntroBox = styled.div`
  width: 100%;

  .introTop {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: break-all;
    color: #222222;
  }

  .wedding-name {
    letter-spacing: 0.25em;
    white-space: break-spaces;
    line-height: 2.4rem;
    width: 100%;
  }

  .wedding-date {
    width: 17rem;
    text-align: center;
    font-size: 1.2rem;
    line-height: 3.2rem;

    .wedding-date-num {
      letter-spacing: 0.1em;
      line-height: 1.8rem;
    }

    .wedding-date-num-1 {
      margin-right: 1.8rem;
    }

    .wedding-date-num-2 {
      margin-left: 1.8rem;
    }

    .wedding-date-line {
      width: 3.3rem;
      margin-left: auto;
      margin-right: auto;
      transform: rotate(-45deg);
      border-top: 1px solid #222222;
    }
  }

  .wedding-about {
    padding: 1.3rem 2rem 6rem;
  }
`;

const MentBox = styled.div`
  .mentImg {
    width: 25px;
    height: 25px;
    filter: invert(73%) sepia(28%) saturate(714%) hue-rotate(306deg)
      brightness(86%) contrast(88%);
    margin-bottom: 2.5rem;
  }

  .poetryBox {
    padding-bottom: 5rem;

    .poetry {
      p {
        margin: 0;
        width: 250px;
        height: 2rem;
        border-bottom: 1px solid #eee;
      }
    }
  }

  .myName {
    padding-top: 3rem;
    letter-spacing: 2px;
    line-height: 2.5;
    padding-bottom: 4rem;
  }
`;

const CalendarBox = styled.div`
  padding-bottom: 4rem;
  .calendar {
    color: #777777;
    margin-bottom: 3rem;
    width: 100%;

    table {
      width: 80%;

      .table-th {
        padding-bottom: 1.2rem;
        padding-top: 1.2rem;
      }

      .table-td {
        padding: 0.5rem 0.2rem;

        .td-div {
          // width: 2.5rem;
          height: 2.5rem;
        }

        .special-day {
          position: relative;
          background-color: rgba(208, 140, 149, 0.7);
          color: #fff;
          border-radius: 50%;
          font-weight: 500;
        }

        .special-day-time {
          position: absolute;
          top: 110%;
          width: 4rem;
          color: rgb(173, 134, 139);
          font-weight: 700;
          font-size: 0.8rem;
        }
      }
    }

    @media screen and (max-width: 367px) {
      table {
        width: 90%;

        .td-div {
          max-height: 2rem;
          width: 2.2rem;
        }
      }
    }
  }
`;

const GalleryBox = styled.div`
  .gallery {
    margin: 20px 30px 10px 30px;
  }
`;

const VideoBox = styled.div`
  height: calc(${window.innerHeight}-84) px;
`;

const LocationBox = styled.div`
  @font-face {
    font-family: "NanumSquareRound";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  .map {
    width: 90%;
    height: 300px;
  }

  .customoverlay {
    position: relative;
    bottom: 85px;
    border-radius: 10px;
    border: 1px solid #ccc;
    float: left;
  }
  .customoverlay:nth-of-type(n) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  .customoverlay a {
    display: block;
    text-decoration: none;
    text-align: center;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    color: black;
    overflow: hidden;
    background: rgba(208, 140, 149, 0.9);
    background: rgba(208, 140, 149, 0.9)
      url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
      no-repeat right 14px center;
  }
  .customoverlay .title {
    font-family: "NanumSquareRound";
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    margin: 15px 35px 12px 22px;
    display: block;
    color: #fff;
  }

  .customoverlay:after {
    content: "";
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
  }

  .customoverlay:hover {
    scale: 1.05;
  }

  .lock {
    width: 100%;
    padding-bottom: 1rem;
    .btn-lock {
      position: absolute;
      bottom: 0.5rem;
      left: 1.3rem;
      padding-bottom: 5px;
    }
  }

  .navi-bar {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "SUIT-Regular";
    margin-top: 1.2rem;
    padding: 12px 0px 12px 0px;
    border: 1px solid #eee;
    border-radius: 7px;
    gap: 0.5rem;

    .navi-bar-box {
      width: 33.3333333%;
    }

    .navi-icon {
      padding-right: 5px;
    }

    .navi-icon-naver {
      width: 1.4rem;
    }

    .navi-icon-kakao {
      width: 1.2rem;
    }

    .navi-icon-tmap {
      width: 1rem;
    }
  }
  .bus-point {
    font-size: 0.8rem;
    padding-left: 1rem;
  }

  @media screen and (max-width: 367px) {
    .navi-bar {
      font-size: 0.8rem;
    }
  }
`;

const BankBox = styled.div`
  .account-container {
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    height: 40px; /* 토글되지 않았을 때의 높이 */
  }

  .account-container.open {
    height: 200px; /* 토글되었을 때의 높이 */
  }

  .account-box {
    font-family: "SUIT-Regular";
    border: 1px solid #eee;
    border-radius: 0.3rem;
    width: 85%;
    height: 3rem;
    cursor: pointer;

    .arrow {
      position: absolute;
      right: 1rem;
      top: 30%;
    }

    .btn-account {
      color: #1e1e1e;
      top: 15%;
      border-radius: 0.3rem;
      background-color: #f9f9f9;
      border: 1px solid #eee;
      height: 2rem;
      width: 5rem;
    }

    .btn-account-kakao {
      background-color: #ffdf00;
      border: none;
      width: 4.5rem;
    }

    .margin10 {
      margin: 10px;
    }
  }

  .account-box-sub {
    height: 0;
    border: none;
    border-radius: 0 0 0.3rem 0.3rem;
    overflow: hidden;
    transition: height 0.6s ease-in-out;
  }

  .account-box-sub.open {
    height: 180px;
    border: 1px solid #eee;
  }

  .account-box-about {
    width: 100%;
  }
`;

const GuestBookBox = styled.div`
  background-color: #f8f5f3;
`;

const ShareBox = styled.div`
  .btn-share {
    padding: 0.8rem 1rem 0.8rem 1rem;
    width: 12rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 367px) {
    flex-direction: column;
  }
`;

const FooterBox = styled.footer`
  font-family: "SUIT-Regular";
  padding: 2rem;
  padding-bottom: 4rem;
  font-size: 0.9rem;
`;

export {
  MainBox,
  IntroBox,
  MentBox,
  CalendarBox,
  GalleryBox,
  VideoBox,
  LocationBox,
  BankBox,
  GuestBookBox,
  ShareBox,
  FooterBox,
};
