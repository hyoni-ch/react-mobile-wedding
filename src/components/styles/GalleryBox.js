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
      display: flex;

      img {
        background-size: cover;
      }

      img.w {
        width: 100vw;
        max-width: 1380px;
      }
      img.h {
        max-height: 100vh;
        max-width: 100vw;
      }
    }
  }
  .modal-open {
    opacity: 1;
    visibility: visible;
    display: block;
  }

  .img-page {
    position: fixed;
    left: 0rem;
    top: 0.5rem;
    left: 0.5rem;
    color: #ffff;
    font-size: 1.3rem;
  }
  .btn-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.3rem;
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    font-weight: 700;
  }
`;

const ButtonIcon = styled.svg`
  cursor: pointer;
  position: fixed;
  top: 50vh;
  z-index: 999;

  &.buttonIcon1 {
    left: 0.5rem;
  }

  &.buttonIcon2 {
    right: 0.5rem;
  }
`;

export { GalleryBox, ButtonIcon };
