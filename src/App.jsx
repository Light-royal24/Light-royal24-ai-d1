import './App.css';
import NavbarB from './bottomHeader/NavbarB';
import Header from './header/Header';
import Messages from './messages/Messages';
import { useState } from "react";
import OpenAI from "openai";
import { useEffect } from 'react';
import SetAudio from './audio/SetAudio';
import Demo from './audio/Demo';
import Emoji from './emoji/emoji';
import EmojiPicker from 'emoji-picker-react'; 
import { ToastContainer, toast } from 'react-toastify'; 


function App() {
  const date = new Date().toDateString();
  let datearr = date.split(" ");
  let newdate2 = datearr[0] + "," + " " + datearr[2] + " " + datearr[1];
  const [text, setText] = useState('');
  const [choosenEmoji, setChoosenEmoji] = useState(''); 
  const [showEmoji, setShowEmoji] = useState(false)


  useEffect(() => {
    <Messages newdate2={newdate2} messages={messages}/>
  });
  
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true ,
});

const [messages, setMessages] = useState([]);

const getReply = async() => {
   const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: `${text}` }],
      model: "gpt-3.5-turbo",
    });
    const newReply = {
      message: `${chatCompletion.choices[0].message.content}`,
      user: 'Ais',
      id: messages.length + 1,
    }

      setMessages([...messages, newReply])
      toast.success('New Message!', { 
        position: 'top-right', 
        autoClose: 2000, 
        hideProgressBar: true, 
        closeOnClick: true, 
        pauseOnHover: false, 
        draggable: false, 
        progress: undefined, 
      }); 
}

const createNewMessage = (e) => {
  e.preventDefault()
    const newMessage =  {
      message: `${text}`,
      user: 'own',
      id: messages.length + 1,
    }

    if (!text) {
      return;
    } else {
      getReply()
      messages.push(newMessage);      
    }

    setText('')
}

function LoadEmoji() {
  if(choosenEmoji) {
    const data = [...text, choosenEmoji];
      setText(data.join('').toString())
      setChoosenEmoji('')
    }
}

const emojiPickerFunction = (emojiObject) => { 
  const emoji = emojiObject.emoji; 
  setChoosenEmoji(emoji); 
  LoadEmoji();
  copyEmojiFunction(emoji); 
};

const copyEmojiFunction = (text) => { 
  const textArea = document.createElement('textarea'); 
  textArea.value = text; 
  document.body.appendChild(textArea); 
  textArea.select(); 
  document.execCommand('copy'); 
  document.body.removeChild(textArea); 
}; 

  return (
    <>
      <div>
      <div className="container">
        <div className="contain">
          <Header />
          <Messages newdate2={newdate2} messages={messages}/>
          {/* <Demo /> */}
          <NavbarB createNewMessage={createNewMessage} text={text} setText={setText} choosenEmoji={choosenEmoji} setChoosenEmoji={setChoosenEmoji} showEmoji={showEmoji} setShowEmoji={setShowEmoji}/> 
          {showEmoji ? (
            <Emoji EmojiPicker={EmojiPicker} ToastContainer={ToastContainer} toast={toast} setChoosenEmoji={setChoosenEmoji} choosenEmoji={choosenEmoji} emojiPickerFunction={emojiPickerFunction} copyEmojiFunction={copyEmojiFunction} />  
          ):null}
        </div>
    </div>
      </div>
    </>
  )
}

export default App
