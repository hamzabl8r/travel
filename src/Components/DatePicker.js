import React, { useState } from 'react';

const DatePicker = ({ onClose, onSave }) => {
    const [selectedDates, setSelectedDates] = useState(['2025-08-10', '2025-08-11']);

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const renderMonth = (year, month) => {
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayIndex = getFirstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < firstDayIndex; i++) {
            days.push(<span key={`empty-${i}`} className="calendar-day empty"></span>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const isSelected = selectedDates.includes(dateStr);
            days.push(
                <span
                    key={dateStr}
                    className={`calendar-day ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleDateClick(dateStr)}
                >
                    {i}
                </span>
            );
        }
        return days;
    };

    const handleDateClick = (dateStr) => {
        if (selectedDates.length === 2 || selectedDates.length === 0) {
            setSelectedDates([dateStr]);
        } else if (selectedDates.length === 1) {
            const newDates = [...selectedDates, dateStr].sort();
            setSelectedDates(newDates);
        }
    };
    
    return (
        <div className="date-picker-container">
            <div className="date-picker-tabs">
                <span className="tab active">Calendrier</span>
                <span className="tab">Dates flexibles</span>
            </div>
            <div className="calendar-grid-container">
                <div className="calendar-month">
                    <span className="month-title">août 2025</span>
                    <div className="weekdays">
                        <span>lu</span><span>ma</span><span>me</span><span>je</span><span>ve</span><span>sa</span><span>di</span>
                    </div>
                    <div className="days-grid">
                        {renderMonth(2025, 7)}
                    </div>
                </div>
                <div className="calendar-month">
                    <span className="month-title">septembre 2025</span>
                    <div className="weekdays">
                        <span>lu</span><span>ma</span><span>me</span><span>je</span><span>ve</span><span>sa</span><span>di</span>
                    </div>
                    <div className="days-grid">
                        {renderMonth(2025, 8)}
                    </div>
                </div>
            </div>
            <div className="flexible-dates-options">
                <button className="option-btn active">Dates exactes</button>
                <button className="option-btn">± 1 jour</button>
                <button className="option-btn">± 2 jours</button>
                <button className="option-btn">± 3 jours</button>
                <button className="option-btn">± 7 jours</button>
            </div>
            <div className="date-picker-footer">
                <button className="btn-terminer" onClick={() => onSave(selectedDates)}>Terminer</button>
            </div>
        </div>
    );
};

export default DatePicker;