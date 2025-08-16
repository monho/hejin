import React, { useState } from 'react'
import flower from '../images/flower.png'
// import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa6";
import Modal from '../components/Modal';
import '../css/Modal.css'

function ContactButton({ person, account, kakaopay }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="contact__box">
        <span>{person}</span>
        <div className="contact__icons">
          <button onClick={openModal} className="contact__btn"><FaMoneyCheck size="1.5em" /></button>
        </div>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} who={person} account={account} kakaopay={kakaopay} />
      )}
    </>
  );
}


function Account() {
  const groom_contact = [
    // { person: "신랑 최영민", account: "카카오뱅크 333-2186-485-17", kakaopay: "" },
    { person: "신랑 최영민, 신부 방혜진", account: "카카오뱅크 3333218648517", kakaopay: "" },
  ];

  const parent_contact = [
    { person: "신랑 부모님 (아버지 최권호 , 어머니 손유정)", account: "경남은행 605-22-0138232", kakaopay: "" },
    { person: "신부 부모님 (아버지 방보섭 , 어머니 홍경자)", account: "우체국은행 613687-02-048716", kakaopay: "" },
  ];

  return (
    <div className="container">
      <img src={flower} className="flower" alt="flower" />
      <div className="contact__title">마음 전하는 곳</div>

      {/* 신랑 신부 계좌 */}
      <div className="contact__section-title">신랑 · 신부</div>
      <div className="contact__boxes">
        {groom_contact.map((contact, index) => (
          <ContactButton
            key={index}
            person={contact.person}
            account={contact.account}
            kakaopay={contact.kakaopay}
          />
        ))}
      </div>

      {/* 부모님 계좌 */}
      <div className="contact__section-title">신랑 · 신부 부모님</div>
      <div className="contact__boxes">
        {parent_contact.map((contact, index) => (
          <ContactButton
            key={index}
            person={contact.person}
            account={contact.account}
            kakaopay={contact.kakaopay}
          />
        ))}
      </div>

      <div className="contact__guide-text">
        아이콘을 클릭하시면 계좌번호를 확인할 수 있습니다.
      </div>
    </div>
  );
}




export default Account
