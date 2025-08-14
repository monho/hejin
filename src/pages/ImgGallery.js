import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import p4 from '../images/p4.jpg';
import p5 from '../images/p5.jpg';

import s1 from '../images/p1.jpg';
import s2 from '../images/p2.jpg';
import s3 from '../images/p3.jpg';
import s4 from '../images/p4.jpg';
import s5 from '../images/p5.jpg';

function ImgGallery() {

  const images = [
    {
      original: p1,
      thumbnail: s1,
    },
    {
      original: p2,
      thumbnail: s2,
    },
    {
      original: p3,
      thumbnail: s3,
    },
    {
      original: p4,
      thumbnail: s4,
    },
    {
      original: p5,
      thumbnail: s5,
    },
  ];

  
  return (
    <div className='bc-pink container'>
      <ImageGallery items={images} />
    </div>
  )
}

export default ImgGallery