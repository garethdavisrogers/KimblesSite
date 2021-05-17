import React from "react";

const Playlist = ({ tracks }) => {
  return (
    <div className="audio-player">
      {tracks.map((track, index) => (
        <div key={index} className="track-and-name">
          <div>{track.name}</div>
          <audio
            className="track"
            src={track.track}
            type="audio/wav"
            controls
          />
        </div>
      ))}
    </div>
  );
};

export default Playlist;
