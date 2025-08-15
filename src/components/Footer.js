import React from 'react'
import KakaoShareButton from '../components/KakaoShareButton.js';
function Footer() {

  return (
    <div className='footer'>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <KakaoShareButton />
      </div>

      {/* <div className='footer__text'>Designed by Youngeun Suh</div>
        <div className='footer__text'>© 2024 All rights reserved by Youngeun Suh.</div> */}
    </div>
  )
}

export default Footer