import React, {useState} from 'react';
import AudioManager from './AudioManager';
import AudioList from './AudioList';


const Home = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);

      
    return(
        <div>
            <AudioManager
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            isLooping={isLooping}
            setIsLooping={setIsLooping}
            />
            <AudioList 
            isPlaying={isPlaying}
            isLooping={isLooping}
            setIsPlaying={setIsPlaying}
            />
        </div>
    )
}

export default Home;
