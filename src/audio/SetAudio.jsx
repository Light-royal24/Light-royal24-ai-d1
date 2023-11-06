import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const SetAudio = () => {
  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    console.log(url)
  };

  return (
    <div className='recorder'>
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
    </div>
  )
}

export default SetAudio