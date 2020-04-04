import React, { PureComponent } from 'react'

export default class MessageViewer extends PureComponent {
  /**Instancia para ser chamada quando adicionar mensagem. */
  static instance;

  /**Método estátio para adicionar mensagens. */
  static addMessage(message) {
    if (this.instance != null) {
      //Chamando o método da instância do componente.
      this.instance.localAddMessage(message);
    } else {
      throw new Error('The component is not created yet');
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }

    //Registrando nossa instância.
    MessageViewer.instance = this;
  }

  //Metodo a ser chamado pelo metodo estátio addMessage.
  localAddMessage(message) {
    const { messages: preMessages } = this.state;
    this.setState({ messages: [...preMessages, message] })
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="message-viewer">
        {
          messages.map((message, index) => (<div key={index} className="message-viwer__message">{message}</div>))
        }
      </div>
    )
  }
}