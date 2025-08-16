// src/components/KakaoShareButton.jsx
import React, { useEffect, useRef } from 'react';

const KakaoShareButton = ({
  title = '최영민♡방혜진 결혼식에 초대합니다.',
  description = '2025년 9월, 울산 보람컨벤션 4층 카리나홀',
  imageUrl = 'https://firebasestorage.googleapis.com/v0/b/heejin-d6d79.firebasestorage.app/o/w.jpg?alt=media&token=dddd58f0-8be0-4eef-a0bd-e678ef75fff2', // 반드시 HTTPS 절대경로
  linkUrl = 'https://hejinwedding.netlify.app',
}) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const Kakao = window.Kakao;
    if (!Kakao || !Kakao.isInitialized() || !btnRef.current) return;

    // 이미 바인딩된 버튼이 있을 수 있으니, 매 렌더마다 새로 붙이는 건 피함 (필요 시 가드)
    // 공식 API: container에 DOM 요소(혹은 CSS selector)를 넣으면 클릭 핸들러가 자동 바인딩됨
    Kakao.Share.createDefaultButton({
      container: btnRef.current, // 또는 '#kakaotalk-share-btn'
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: { mobileWebUrl: linkUrl, webUrl: linkUrl },
      },
      // 필요 없으면 itemContent/social 제거
      buttons: [
        {
          title: '청첩장 열기',
          link: { mobileWebUrl: linkUrl, webUrl: linkUrl },
        },
      ],
    });
  }, [title, description, imageUrl, linkUrl]);

  const styles = {
    button: {
      width: 340,
      height: 55,
      backgroundColor: '#FEE500',
      color: '#000',
      border: 'none',
      borderRadius: 8,
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: 'pointer',
      boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
    },
    icon: { width: 20, height: 20, display: 'block' },
  };

  return (
    <button
      // id="kakaotalk-share-btn"  // selector로 쓰고 싶으면 주석 해제
      ref={btnRef}
      type="button"
      aria-label="카카오톡 공유하기"
      style={styles.button}
      // onClick 넣지 마세요! (SDK가 바인딩합니다)
      onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)')}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.15)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <svg viewBox="0 0 24 24" style={styles.icon} aria-hidden="true">
        <path d="M12 3C6.9 3 3 6.3 3 10.2c0 2.2 1.3 4.1 3.4 5.4l-.7 3.1c-.1.6.4 1.1 1 1l3.7-1.6c.8.1 1.6.1 2.3.1 5.1 0 9-3.3 9-7.1C21.7 6.3 17.4 3 12 3z" fill="#000"/>
      </svg>
      카카오톡 공유하기
    </button>
  );
};

export default KakaoShareButton;
