import React, { useState } from 'react';
import MessageViewer from './MessageViewFC';
import './App.css';

function App() {
  const [inputValue, setinputValue] = useState('')

  function handleSendMessage() {
    MessageViewer.addMessage(inputValue);
    setinputValue('');
  }

  return (
    <div className="App">
      <div className="container">
        <MessageViewer />
        <div className="send-message">
          <input value={inputValue}
            onChange={event => setinputValue(event.target.value)}
            className="send-message__input" />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
