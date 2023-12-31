import styled from "styled-components";

const GuestBookBox = styled.div`
  .btn-upload {
    width: 80%;
    min-height: 1.2rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .upload-box {
    font-family: "SUIT-Regular";
    width: 80%;

    .upload-form {
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 0.5rem;
      padding: 1.5rem;

      hr {
        margin-top: 0.1rem;
        border-right-width: 1px;
        height: 0.7rem;
        border-top-width: 0;
        border-color: #f9f9f9;
        background: #f9f9f9;
        color: #f9f9f9;
        margin-left: 0.2rem;
      }

      input {
        height: 1rem;
        padding: 0.5rem;
        border: none;
        font-family: inherit;
        font-size: 1rem;
        background: inherit;
      }

      input#name {
        width: 80%;
      }

      textarea {
        position: absolute;
        top: -0.4rem;
        left: 0;
        resize: none;
        line-height: 2rem;
        width: 100%;
        text-indent: 2.9rem;
        overflow: hidden;
        background: inherit;
        border: none;
        font-family: inherit;
        font-size: 1rem;
      }

      input:focus,
      textarea:focus {
        outline: none;
      }

      .margin-b03 {
        margin-bottom: 0.6rem;
      }

      .btn-upload-submit {
        background-color: #f9f9f9;
        margin-top: 0.5rem;
      }

      .upload {
        background-image: linear-gradient(
          transparent,
          transparent calc(2rem - 1px),
          #eee 0
        );
        background-size: 100% 2rem;

        .title-upload {
          padding-right: 0.5rem;
          min-width: 36px;
        }

        .upload-content {
          height: 10rem;
        }
      }
    }
  }
`;

export { GuestBookBox };
