import React from 'react'
import Date from '../Date/Date'
import Chat from '../conversation/chat';
import '../App.css';
import Message2 from '../messageInfo/Message2';
import { ToastContainer } from 'react-toastify';

const Messages = ({newdate2, messages}) => {
  return (
    <div>
         <div className="message">
                <div className="messageContainer">
                    <Date newdate2={newdate2}/>
                    <Message2 /> 
                    <Chat messages={messages}/>
                    <div style={{padding: '70px'}}></div>
			              <ToastContainer /> 
                </div>
            </div>
    </div>
  )
}

export default Messages
