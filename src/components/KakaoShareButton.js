// src/components/KakaoShareButton.jsx
import React from 'react';

const KakaoShareButton = ({
  title = '최영민♡방혜진 결혼식에 초대합니다.',
  description = '2025년 9월, 울산 보람컨벤션 4층 카리나홀',
  imageUrl = 'https://hejinwedding.netlify.app/main.jpg',
  linkUrl = 'https://hejinwedding.netlify.app',
}) => {
  const onClick = () => {
    const Kakao = window.Kakao;
    if (!Kakao || !Kakao.isInitialized()) {
      alert('카카오 SDK가 초기화되지 않았습니다.');
      return;
    }

    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl, // HTTPS 절대경로
        link: {
          mobileWebUrl: linkUrl,
          webUrl: linkUrl,
        },
      },
      buttons: [
        {
          title: '청첩장 열기',
          link: { mobileWebUrl: linkUrl, webUrl: linkUrl },
        },
      ],
    });
  };

  const styles = {
    button: {
      width: 340,
      height: 55,
      backgroundColor: '#FEE500', // 카카오톡 옐로우
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
    icon: {
      width: 20,
      height: 20,
      display: 'block',
    },
  };

  return (
    <button
      type="button"
      aria-label="카카오톡 공유하기"
      style={styles.button}
      onClick={onClick}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)')}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.15)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* 심플 톡풍 말풍선 아이콘 (상표 글자 없이) */}
      <svg viewBox="0 0 24 24" style={styles.icon} aria-hidden="true">
        <path d="M12 3C6.9 3 3 6.3 3 10.2c0 2.2 1.3 4.1 3.4 5.4l-.7 3.1c-.1.6.4 1.1 1 1l3.7-1.6c.8.1 1.6.1 2.3.1 5.1 0 9-3.3 9-7.1C21.7 6.3 17.4 3 12 3z" fill="#000"/>
      </svg>
      카카오톡 공유하기
    </button>
  );
};

export default KakaoShareButton;
