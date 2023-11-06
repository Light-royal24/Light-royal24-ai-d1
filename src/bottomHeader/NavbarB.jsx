import React, { useState } from 'react'
import SetAudio from '../audio/SetAudio'
import Demo from '../audio/Demo'

const NavbarB = ({createNewMessage, text, setText, setShowEmoji, showEmoji, }) => {
  return (
    <div>
      <form className="bottomHeader" onSubmit={(e) => createNewMessage(e)} autoCorrect='true' autoComplete='true'>
            <div className="bottomHeaderContainer">
                <div title='send attachment'>
                    <p>➕</p>
                </div>
                <div className="bottomHeaderInput">
                    {/* {choosenEmoji ? console.log(choosenEmoji) : setText(e.target.value)} } */}
                    <input type="text" value={text} onChange={(e) => {
                        setText(e.target.value)
                    }}/>
                    <p onClick={()=> {setShowEmoji(!showEmoji)}}>😃</p>
                </div>
                <div className="bottomHeaderSend">
                      {!text ? (
                        // <Demo />
                        // <SetAudio />
                        <button style={{background: 'darkgray', width: '100%', height: '100%', borderRadius: '50%', cursor: 'pointer'}} title='Type in some text' disabled>
                          <img width="20" height="20" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-send-social-media-ui-tanah-basah-glyph-tanah-basah.png" alt="external-send-social-media-ui-tanah-basah-glyph-tanah-basah"/>
                        </button>
                      ) : (
                        <button className="bottomHeaderSendBtn" title='send text'>
                          <img width="20" height="20" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-send-social-media-ui-tanah-basah-glyph-tanah-basah.png" alt="external-send-social-media-ui-tanah-basah-glyph-tanah-basah"/>
                        </button>
                      )
                      }
                </div>
            </div>

        </form>
            {/* <Demo /> */}
    </div>
  )
}

export default NavbarB
