import styled from "styled-components";

const GalleryBox = styled.div`
  .gallery-container {
    margin: auto;
    max-width: 95%;
    height: 39rem;
  }

  .gallery-container img {
    position: absolute;
    max-width: 190px;
    border-radius: 0.4rem;
  }

  .modal {
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    visibility: hidden;

    .modal-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0.3rem;
      height: 550px;
      display: flex;

      img {
        width: 22rem;
        border-radius: 0.3rem;
        margin: auto;
      }
    }
  }
  .modal-open {
    opacity: 1;
    visibility: visible;
    display: block;
  }

  .btn-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.3rem;
    position: absolute;
    right: 2rem;
    top: -10rem;
    cursor: pointer;
  }

  @media screen and (max-width: 440px) {
    .modal {
      .modal-box {
        img {
          width: 20rem;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .modal {
      .modal-box {
        img {
          width: 18rem;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    .modal {
      .modal-box {
        img {
          width: 16rem;
        }
      }
    }
  }
`;

const ButtonIcon = styled.svg`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 52.5%;
`;

export { GalleryBox, ButtonIcon };
