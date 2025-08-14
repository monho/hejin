import React, { useRef, useEffect } from 'react'
import naverMapIcon from '../images/naver.webp';
import kakaoMapIcon from '../images/kakao.png';

function Location() {
  const mapRef = useRef(null);
  const lat = 35.547180; // 위도
  const lng = 129.328049; // 경도

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  const gotoNavermap = () => {
    window.location.href = ''
  }

  const gotoKakaomap = () => {
    window.location.href = ''
  }


  return (
    <div className='container'>
      <div className='title'>오시는 길</div>
      <div className='location__details'>
        <div>보람컨벤션 4층 카리나 홀</div>
        <div>울산광역시 남구 왕생로 160 (삼산동 1493-5)</div>
      </div>
      <div ref={mapRef} className='location__map'></div>
      <div className='location__map-icon-box'>
        <div className='location__map-item' onClick={gotoNavermap}>
          <img src={naverMapIcon} className='location__map-icon' alt="naverMap" />
          <span>네이버지도</span>
        </div>
        <div className='location__map-item' onClick={gotoKakaomap}>
          <img src={kakaoMapIcon} className='location__map-icon' alt='kakaoMap' />
          <span>카카오지도</span>
        </div>
      </div>
      <div className='location__info'>
        <div>
          <p>자가용:네비게이션 '왕생로 160' 또는 '삼산동 1493-5'입력</p>
          <p>KTX:울산(통도사)역에서 5001리무진버스 탑승 후 남구청앞 하차<br></br>울산(통도사)역에서 택시 이용시 30분 소요</p>
          <p>기차,고속버스:태화강역, 울산시외·고속버스터미널에서 택시 이용시 10분 소요</p>
          <p>시내버스:남구청앞 : 남구10,442,514,752</p>
          <p>시내버스:남울산우체국 하차 : 남구02,남구05</p>
          <p>시내버스:kbs방송국앞 : 순환11,216,216(지원2),216(지원4),<br></br> 711,712,713,718,724,742,752</p>
        </div>
      </div>
    </div>
  )
}


export default Location
