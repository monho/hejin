import React, { useState, useEffect } from 'react'
import flower from '../images/flower.png'

function CalendarDay({ day, weekday, isWeddingDay, isHoliday }) {
  // 0=일, 1=월, ... 6=토
  const dayOfWeekClass =
    weekday === 0 ? 'red' :    // 일요일 빨강
    weekday === 6 ? 'blue' : ''; // 토요일 파랑
  const holidayClass = isHoliday ? 'red' : '';
  const specialDayClass = isWeddingDay ? 'heart red' : '';

  return (
    <div className={`calendar__day ${dayOfWeekClass} ${specialDayClass} ${holidayClass}`}>
      {day}
    </div>
  );
}

function Calendar() {
  const daysInMonth = 30;           // 2025년 9월은 30일까지
  const firstDayOfWeek = 1;         // 2025-09-01 = 월요일(0=일,1=월,...,6=토)
  const emptyDays = Array.from({ length: firstDayOfWeek }, () => null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const target = new Date('2025-09-27T11:30:00+0900');
      const diff = target.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer(); // 첫 렌더 즉시 계산
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='container calendar'>
      <img src={flower} className="flower" alt='flower' />
      <h4>2025년 9월 27일 토요일 오전 11시 30분</h4>
      <div className='calendar__line'></div>

      <div className="calendar__body">
        <div className="calendar__weekdays">
          {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        <div className="calendar__days">
          {emptyDays.map((_, i) => (<div key={`empty-${i}`} />))}
          {days.map((day, idx) => {
            // 요일 계산: (첫째날 요일 + (해당 날짜 - 1)) % 7
            const weekday = (firstDayOfWeek + (day - 1)) % 7;
            return (
              <CalendarDay
                key={day}
                day={day}
                weekday={weekday}
                isWeddingDay={day === 27}
                isHoliday={false}     // 필요하면 공휴일 데이터 넣어 처리
              />
            );
          })}
        </div>
      </div>

      <div className='calendar__remain'>
        <span>{timeLeft.days}일</span>
        <span>{timeLeft.hours}시간</span>
        <span>{timeLeft.minutes}분</span>
        <span>{timeLeft.seconds}초</span>
      </div>
      <div>신랑♥신부의 결혼식 <span className='calendar__remain-day'>{timeLeft.days}일</span> 전</div>
    </div>
  )
}

export default Calendar
