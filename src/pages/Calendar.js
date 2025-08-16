import React, { useState, useEffect } from 'react'
import flower from '../images/flower.png'

function CalendarDay({ day, weekday, isWeddingDay, isHoliday, style }) {
  // 0=일, 6=토
  const dayOfWeekClass =
    weekday === 0 ? 'red' :
    weekday === 6 ? 'blue' : '';
  const holidayClass = isHoliday ? 'red' : '';
  const specialDayClass = isWeddingDay ? 'heart red' : '';

  return (
    <div className={`calendar__day ${dayOfWeekClass} ${specialDayClass} ${holidayClass}`} style={style}>
      {day}
    </div>
  );
}

function Calendar() {
  const daysInMonth = 30;      // 2025년 9월 = 30일
  const firstDayOfWeek = 1;    // 2025-09-01 = 월요일(0=일,1=월,...,6=토)
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
    updateTimer();
    const t = setInterval(updateTimer, 1000);
    return () => clearInterval(t);
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
          {days.map((day, idx) => {
            const weekday = (firstDayOfWeek + idx) % 7;
            // 1일만 시작 열 지정 (grid는 1~7)
            const style = day === 1 ? { gridColumnStart: firstDayOfWeek + 1 } : undefined;
            return (
              <CalendarDay
                key={day}
                day={day}
                weekday={weekday}
                isWeddingDay={day === 27}
                isHoliday={false}
                style={style}
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
