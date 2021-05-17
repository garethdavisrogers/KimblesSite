import React from "react";

const Playlist = ({ tracks }) => {
  return (
    <div>
      {tracks.map((track, index) => (
        <div key={index}>
          {track.name}
          <audio src={track.track} type="audio/wav" controls />
        </div>
      ))}
    </div>
  );
};

export default Playlist;
