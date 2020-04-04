import React, { useState } from 'react';
import MessageViewer from './MessageViewerFC';
import './App.css';

function App() {
  const [inputValue, setinputValue] = useState('')

  function handleSendMessage() {
    //Chamando nosso método de adicionar mensagem.
    MessageViewer.addMessage(inputValue);
    //Resetando estado do input.
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
