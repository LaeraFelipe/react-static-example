import React, { useState } from 'react'
import { useEffect } from 'react';

export default function MessageView() {
  const [messages, setMessages] = useState([]);

  //Atualizando o contexto de addMessageRef para referenciar as mensagens antigas.
  useEffect(() => {
    MessageView.addMessageRef = localAddMessage.bind({ messages });
  }, [messages])

  //Metodo a ser chamado pelo metodo estátio addMessage.
  function localAddMessage(message) {
    setMessages([...this.messages, message])
  }

  return (
    <div className="message-viwer">
      {
        messages.map((message, index) => (<div key={index} className="message-viwer__message">{message}</div>))
      }
    </div>
  )
}

MessageView.addMessageRef = undefined;

MessageView.addMessage = function (message) {
  if (this.addMessageRef != null) {
    //Chamando o método do componente.
    this.addMessageRef(message);
  } else {
    throw new Error('The component is not created yet');
  }
}