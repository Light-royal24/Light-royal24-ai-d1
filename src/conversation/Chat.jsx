import React from 'react';
import '../App.css'

const Chat = ({messages}) => {
    React;
  return (
    <div className="messagesContainer">
       {messages.map((item) => {
            return (
                <>
                    {item.user == 'Ais' ? (
                        <div key={item.id}>
                            <div key={item.id} className='Ais'>
                                <p>{item.message}</p>
                            </div> 
                        </div>
                    ) : (
                        <div key={item.id}>
                            <div key={item.id} className='own'>
                                <p>{item.message}</p>
                            </div> 
                        </div>
                    )}
                </>
            )
        })}
    </div>
  )
}

export default Chat;
