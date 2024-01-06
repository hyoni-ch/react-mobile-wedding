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
    padding-left: 2rem;
    padding-right: 2rem;
    width: 85%;

    .upload-form {
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 0.5rem;
      padding: 1.5rem;

      hr {
        border-right-width: 1px;
        height: 0.7rem;
        border-top-width: 0;
        border-color: #f9f9f9;
        background: #f9f9f9;
        color: #f9f9f9;
        margin-left: 0.5rem;
      }

      input {
        height: 1rem;
        padding: 0.5rem;
        border: none;
        font-family: inherit;
        font-size: 1rem;
        background: inherit;
      }

      textarea {
        position: absolute;
        top: -0.5rem;
        left: 0;
        resize: none;
        line-height: 2rem;
        text-indent: 3.2rem;
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
        margin-bottom: 0.3rem;
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
          margin-right: 0.5rem;
        }

        .upload-content {
          height: 10rem;
        }
      }
    }
  }
`;

export { GuestBookBox };
