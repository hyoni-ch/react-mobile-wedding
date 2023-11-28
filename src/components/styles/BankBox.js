import styled from "styled-components";

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

export { BankBox };
