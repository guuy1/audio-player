import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';
import ReactHowler from 'react-howler';
import raf from 'raf' // requestAnimationFrame polyfill

//AudioItem deals with PLAY, STOP and MUTE funcionality, 
//and diplaying color lines with Mute toggle button

//Variable for audio real-time animation
var _raf = null

const AudioItem = ({track, isPlaying, isLooping,isSeeking,changeSeek,setIsPlaying,setIsLoaded,setDuration,setSeek}) => {
    const [isMute, setIsMute] = useState(false);
    const [vol, setVol] = useState(1);
    const audioRef = useRef(null)

    //Handle PLAY button
    useEffect(() => {
        if (!isPlaying) {
            audioRef.current.stop()
        } 
        else{
            renderSeekPos()
        }
    }, [isPlaying]);

    //Audio time change handler
    useEffect(() => {
        audioRef.current.seek(changeSeek)
    },[changeSeek])

    //Passed value of audio duration to AudioList
    const handleOnLoad = () =>{
        setIsLoaded(true)
        setDuration(audioRef.current.duration())
    }

    //Handler whether a loop is needed or stop the music
    const handleOnEnd = () =>{
        if(!audioRef.current.loop())
            setIsPlaying(false)
    }

    //Musie Progres bar
    const renderSeekPos = () => {
        if (!isSeeking) {
            setSeek(audioRef.current.seek())
        }
        if (isPlaying) {
            _raf = raf(renderSeekPos)
        }
      }

    //Handle Mute button
    const handleMute = (bool) => {
        setIsMute(bool)
        isMute? setVol(1) : setVol(0)
    }

    return (<div>
        <div 
        style={{
            backgroundColor: track.color,
            borderRadius:"10px",
            marginLeft:"5px",
            height:"30px",
            width:"300px"
            }}>
            <div style={{
            marginLeft:"10px",
            }}>
            <ReactHowler 
            src={track.audio}
            playing={isPlaying}
            ref={audioRef}
            volume={vol}
            onLoad={handleOnLoad}
            onEnd={handleOnEnd}
            loop={isLooping}
            />            
            {track.lable}
            </div>
        </div>
        <Flex>
                <Switcher selected={isMute}/>
                <Text
                onClick={() => handleMute(true)}>Mute</Text>
                <Text
                onClick={() => handleMute(false)}>UnMute</Text>
            </Flex>
        </div>
    )

}
const Flex = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: grey;
  height: 20px;
  width: 120px;
  position: relative;
  margin-bottom: 5px;
`;
const Switcher = styled.div`
  background: white;
  border-radius: 2px;
  height: 20px;
  line-height: 41px;
  width: 50%;
  cursor: pointer;
  position: absolute;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 1;
  left: ${({ selected }) =>
    selected === true ? "0px" : "60px"};
`;

const Text = styled.div`
  color: ${({ selected }) => (selected ? "black" : "white")};
  font-size: 13px;
  font-weight: 20;
  line-height: 4px;
  padding: 30;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;
export default AudioItem;