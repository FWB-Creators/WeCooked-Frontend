"use client"
import { useState } from 'react';
const TimeInput = ({ value, onChange }: { value: string; onChange: (time: string) => void }) => {
    const parseTimeString = (timeStr: string) => {
      if (!timeStr) return { hour: '12', minute: '00', period: 'AM' };
      
      try {
        const [time, period] = timeStr.split(' ');
        const [hour, minute] = time.split(':');
        return {
          hour: hour.padStart(2, '0'),
          minute: minute.padStart(2, '0'),
          period: period || 'AM'
        };
      } catch {
        return { hour: '12', minute: '00', period: 'AM' };
      }
    };
  
    const [timeState, setTimeState] = useState(parseTimeString(value));
  
    const hours = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const minutes = ['00', '15', '30', '45'];
    const periods = ['AM', 'PM'];
  
    const handleChange = (field: string, newValue: string) => {
      const newTimeState = { ...timeState, [field]: newValue };
      setTimeState(newTimeState);
      
      const formattedTime = `${newTimeState.hour}:${newTimeState.minute} ${newTimeState.period}`;
      onChange(formattedTime);
    };
  
    return (
      <div className="flex space-x-2">
        <select
          value={timeState.hour}
          onChange={(e) => handleChange('hour', e.target.value)}
          className="w-20 px-2 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
        >
          {hours.map(hour => (
            <option key={hour} value={hour}>{hour}</option>
          ))}
        </select>
        
        <select
          value={timeState.minute}
          onChange={(e) => handleChange('minute', e.target.value)}
          className="w-20 px-2 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
        >
          {minutes.map(minute => (
            <option key={minute} value={minute}>{minute}</option>
          ))}
        </select>
        
        <select
          value={timeState.period}
          onChange={(e) => handleChange('period', e.target.value)}
          className="w-20 px-2 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
        >
          {periods.map(period => (
            <option key={period} value={period}>{period}</option>
          ))}
        </select>
      </div>
    );
  };

export default TimeInput;