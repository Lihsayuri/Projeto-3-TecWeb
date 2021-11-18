import React, {useState} from 'react';
import Sound from 'react-sound';
import soundfile from './f1Soundtrack.mp3';


const PlaySound =(
) => {
    const[isPlaying, setIsPlaying] = useState(false);

    return(
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}> {!isPlaying ? 'Play' : 'Stop'}
            </button>
            <Sound
                url={soundfile}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                />
        </div>
    );
};

export default PlaySound;