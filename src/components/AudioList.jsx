import React, {useState, useEffect} from "react";
import audios from "../constants/Audios";
import AudioItem from './AudioItem';

//AudioList deals with mapping audios
//passing props to AudioItem

const AudioList = ({isPlaying, isLooping,setIsPlaying}) => {
    const [audioToPlay, setAudioToPlay] = useState();
    const [seek, setSeek] = useState(0);
    const [changeSeek, setChangeSeek] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [duration, setDuration] = useState(0)
    const [isSeeking,setIsSeeking] = useState(false);

    //Set up an audio array to to AudioItem
    useEffect(()=> {
        setAudioToPlay(audios())
    },[])

    //Handling changes for audio time
    const handleMouseDownSeek = () => {
        setIsSeeking(true)
      }
    
     const handleMouseUpSeek = (e) => {
        setIsSeeking(false)
    
        setChangeSeek(e.target.value)
      }
    
     const handleSeekingChange = (e) => {
        setSeek(parseFloat(e.target.value))
      }


    return(
        <div>
        {isLoaded?(         
        <p>
          {'Status: '}
          {seek.toFixed(2)}
          {' / '}
          {(duration) ? duration.toFixed(2) : 'NaN'}
        </p>):<p></p>}
            <div className='seek'>
          <label>
            <span className='slider-container' >
              <input
                type='range'
                min='0'
                max={duration ? duration.toFixed(2) : 0}
                step='.01'
                value={seek}
                onChange={handleSeekingChange}
                onMouseDown={handleMouseDownSeek}
                onMouseUp={handleMouseUpSeek}
              />
            </span>
          </label>
        </div>

            {audioToPlay  && audioToPlay.map((track, index) => (
            <AudioItem  
            key={index} 
            track={track}
            isPlaying={isPlaying} 
            isLooping={isLooping}
            isSeeking={isSeeking}
            setSeek={setSeek}
            setDuration={setDuration}
            setIsLoaded={setIsLoaded}
            setIsPlaying={setIsPlaying}
            changeSeek={changeSeek}
            />
        ))}
        </div>
    )

}


export default AudioList;