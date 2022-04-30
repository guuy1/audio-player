import React from "react";
import styled from "styled-components"
import { Button } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

//This component is responsible for the LOOP and PLAY/STOP buttons

const AudioManager = ({isPlaying, setIsPlaying, isLooping, setIsLooping}) => {

    return(
        
        <div>
            <div>
            {!isPlaying? (
            <Button variant="primary"
            onClick={() => setIsPlaying(true)} style={{
                backgroundColor: 'grey',
                marginLeft: '10px',
                color:'white'
                }}>play</Button>
         ) : (
            <Button variant="primary" type="button"
            onClick={() => setIsPlaying(false)} style={{
                backgroundColor: 'grey',
                marginLeft: '10px',
                color:'white'
                }}>stop</Button>
         )
        }
        </div>
        <Flex>
            <Switcher selected={isLooping} />
            <Text
            onClick={() => setIsLooping(true)}>
            Loop
            </Text>
            <Text
            onClick={() => setIsLooping(false)}>
            Unloop
            </Text>
        </Flex>
          <p/>
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
margin-bottom: 25px;
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

export default AudioManager;