//App.js 
import React, { useState } from 'react'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Emoji = ({EmojiPicker, ToastContainer, toast, choosenEmoji, setChoosenEmoji, emojiPickerFunction, copyEmojiFunction, setShowEmoji, }) => { 
	return ( 
		<div className="emoji-app emoji">
			<div className="emoji-picker"> 
				<EmojiPicker height="280px" width="100%" searchDisabled={true} className="EmojiPicker" onEmojiClick={emojiPickerFunction} onClick={()=> {
        }}/> 
			</div> 
			<ToastContainer /> 
		</div> 
	); 
}; 

export default Emoji;


