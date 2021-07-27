import React from 'react';
import './HistoryEntry.css';

const HistoryEntry = ({ text, timestamp }) => {
  return (
    <div className="historyEntry">
      <div className="entryTimestamp">
        {new Date(timestamp).toLocaleString('en-US')}
      </div>
      <div className="entryText">{text}</div>
    </div>
  );
};

export default HistoryEntry;
