import React, { useEffect } from "react";
import { ShareBox } from "../styles/ShareBox";
import Fade from "react-reveal/Fade";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { intro_image1 } from "../../assets/images";

const { Kakao } = window;
export default function Share() {
  // 배포한 자신의 사이트
  const realUrl = "https://mobile-wedding-chh.netlify.app";
  // 로컬 주소 (localhost 3000 같은거)
  const resultUrl = window.location.href;

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.REACT_APP_KAKAOMAP_API_KEY);
    // 잘 적용되면 true
    //console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "손창경 ❤ 조하나 결혼합니다.",
        description:
          "2024년 3월 24일 일요일 오전 11시 30분 인천아시아드웨딩컨벤션 브릴리에홀",
        imageUrl:
          "https://doc-0c-1s-docs.googleusercontent.com/docs/securesc/j9le2apd3hnq7lk1eofim469ec8kn8uq/tfiultasdnmh08vib944v637egu852be/1704535650000/08913837047675087547/08913837047675087547/1-fr86PfvHPKgoiz-8XEeHRR2wDrP1KlF?ax=AEqgLxnCXkZ8-4ioV1MuMh-2yrwBf-mDSAiW7-YjQculwZUqQsFThL1dQgI6t8bGAQpFnJ8ySV5OFrSowCYP1bQGkaBNTXOMPWqbW89k0MS6X_VzvYEYnLyKXESjnHumG-K3bke2iR1WNs9BN0KAxNCrO6lKCryYosl0gI3tvWROaPxDAM9wnkMmKZs4DM7I4EFkAP4ge_4_svmnSTK9zn88zLfqgTo99FKwUmNygrVkKqBPe7BD-K4Zs0SmS3Ixx86IzyuK8udvYSvQDz2yLEkQT7Q1X7ylp2cHj5VGy09lJMy94EbKSoV9USIbll7nqFGW8rvTT4gau_N1sdxIZj-AnkHA_oAgKkdR--zMIeCb_nH6uPBqz6bOJGtQzqOVQlbNcbo2YXH8HUR7p4VqYBCYMAiMsMW3JD7cEGZCXmgAFzXRopkTGXRJPMZfQ6YqZha9iHtx-VY2IxfkBxaY7wkQatpNuK4K7vSJBWhF5KW6sioMVfEmTVfR4IcDb8cXklIBJuRVBhq1mLhPJoQBFuUfIvgUsdPaUxNHgzJ9RjrCx-hOqiALfmo2cr2EJmSy54zPOA5BRBsADwp1inhrwGM_TgZ-60mvbTkCClqYTklc3u1_7Ay0j7_w0oCjN7ZXyRHLrFamNG-CIRA00Ma3zJ6Yjqw7VUAarloC5tha91fASgF40GjCqiDt5jbtyeqjzJWWW40YXVaZf_eCjS7QG7UWsue7IB3FwBO8k0vwJKYYTFaz3CnYYwO0qA7xUwW425T3rbTj6SWpeuxqxF7yngjzqUGq2j9KZJ1ntZKZ-ehSUeyFwDnpd_Vc2n0AkwE79esO-Xm3cC9aqnUi-sVq1EN0_fqOtT9t5NJF0Qx_e3ZdbTc&uuid=1e7d8250-3f3b-4e83-a20b-740f0280d0c7&authuser=0&nonce=1v3qpttbelgcs&user=08913837047675087547&hash=del4h77g7iohs5qvch64kbiq5jtav089",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "모바일 청첩장 보기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <ShareBox className="relative spacerT50 bg-gray">
      <Fade bottom cascade delay={500}>
        <div className="bg-img-top">
          <img
            src="https://cdn2.makedear.com/homepage/img/bg3/gray-top.png"
            alt=""
            width="100%"
            className="bg-point"
          />
        </div>
      </Fade>
      <section className="flex">
        <div>
          <CopyToClipboard
            text="https://mobile-wedidng-chh.netlify.app"
            onCopy={() => alert("클립보드에 복사되었습니다.")}
          >
            <button className="btn btn-share" style={{ marginRight: "0.5rem" }}>
              URL 복사하기
            </button>
          </CopyToClipboard>
        </div>

        <div>
          <button className="btn btn-share" onClick={shareKakao}>
            카카오톡 공유하기
          </button>
        </div>
      </section>
    </ShareBox>
  );
}
