import React, {useState} from 'react'
import flower from '../images/flower.png'
import ContactModal from '../components/ContactModal';

function Invitation() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function FamilyInfo({dad, mom, child, relation}) {
    return (
      <div className='invitation__family'>
          <div className='invitaion__parent'>
              <div>{dad}·{mom}</div>
          </div>
          <div>{relation}</div>
          <div className='invitation__child'>{child}</div>
      </div>
    )
  }
  return (
    <div className='bc-pink container'>
        <img src={flower} className='flower' alt='flower'/>
        <div className='invitation__title'>초대합니다</div>
        <div className='invitation__content'>
          <div>각자 다른 화분에서 자란 넝쿨이</div>
          <div>서로에게 굴러 들어와 </div>
          <div>1121일이라는 시간동안 아름답게 얼시설기 엉켜</div>
          <div>예쁜 꽃을 피웠습니다.</div>
          <div>이제는 하나의 화분에 모여</div>
          <div>새로운 출발을 하려 합니다. </div>
          <div>친구에서 연인으로, 연인에서 부부로</div>
          <div>평생 서로의 든든한 배우자로서</div>
          <div>서로의 삶에 꽃이 될 수 있게</div>
          <div>저희의 단단한 토양이 되어주십시오.</div>
        </div>
        <FamilyInfo dad="최권호" mom="손유정" child="최영민" relation="의 차남" />
        <FamilyInfo dad="방보섭" mom="홍경자" child="방혜진" relation="의 차녀" />
        {/* <button className='invitation__btn-contact' onClick={openModal}>연락하기</button> */}
        {isModalOpen && (
          <ContactModal closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Invitation
