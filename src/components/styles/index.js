import styled from "styled-components";

const MainBox = styled.div`
  min-width: 340px;
  text-align: center;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    display: flex;
    flex-basis: 100%;
    font-size: 2.5rem;
    color: #333333;

    &::before {
      content: "";
      flex-grow: 1;
      height: 1px;
      background-color: #bbb;
      margin: 20px 20px 0 20px;
    }

    &::after {
      content: "";
      flex-grow: 1;
      height: 1px;
      background-color: #bbb;
      margin: 20px 20px 0 20px;
    }
  }
`;

const MentBox = styled.div`
  line-height: 1.5;
  margin: 100px 0 100px;
`;

const GalleryBox = styled.div`
  .gallery {
    margin: 20px 30px 10px 30px;
  }
`;

const VideoBox = styled.div`
  height: ${window.innerHeight}px;
`;

const LocationBox = styled.div``;
const BankBox = styled.div``;
const ShareBox = styled.div``;

export {
  MainBox,
  MentBox,
  GalleryBox,
  VideoBox,
  LocationBox,
  BankBox,
  ShareBox,
};
