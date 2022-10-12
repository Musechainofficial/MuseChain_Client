import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import Card from "react-bootstrap/Card";
import "react-h5-audio-player/lib/styles.css";
import Button from 'react-bootstrap/Button';
export default function Audio(props) {
  const musicTracks = [
    {
      name: "Trackname",
      src: "https://drive.google.com/uc?export=download&id=1UhEopYKMI6AyQdMbzCMKfSPD9BfBMxWl"//this is basically the direct link to the mp3 file format is https://drive.google.com/uc?export=download&id={fileID}
    },
  ];
  const [trackIndex, setTrackIndex] = useState(0);
  return (
    <Card style={{ width: '100%' }}>
      <Card style={{width:'100%'}}>
      <Card.Body>
    <div style={{fontFamily: 'sans-serif',textAlign: 'center',justifyContent:'center',alignItems:'center',padding:'5%'}}>
      <AudioPlayer
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem" }}
        
        // layout="horizontal"
        src={props.url}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={false}
        showJumpControls={false}
        header={`Now playing: ${props.name}`}
        footer=""
        onClickPrevious={false}
        onClickNext={false}
        onEnded={false}
      />
    </div>
    </Card.Body>
    </Card>
    </Card>
  );
}
