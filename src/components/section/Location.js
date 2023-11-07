import React, { useEffect } from "react";
import { LocationBox } from "../styles";

const { kakao } = window;

export default function Location() {
  useEffect(() => {
    const container = document.getElementById("map");
    //마커가 표시 될 위치
    const markerPosition = new kakao.maps.LatLng(
      37.54891511004421,
      126.66845411155482
    );
    const options = {
      center: markerPosition,
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커를 생성
    const marker = new kakao.maps.Marker({ position: markerPosition });

    // 커스텀 오버레이에 표출될 내용
    const content = `
      <div>
        <a href="https://map.kakao.com/?itemId=11394059" target="_blank">
          <span>인천아시아드웨딩컨벤션</span>
        </a>
      </div>
    `;

    // 커스텀 오버레이 생성
    new kakao.maps.CustomOverlay({
      map: map,
      position: markerPosition,
      content: content,
      yAnchor: 1,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);

  return (
    <LocationBox>
      <div className="title">오시는 길</div>
      <div id="map" className="map" style={{}}></div>
    </LocationBox>
  );
}
