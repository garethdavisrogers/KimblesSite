import React from "react";
import Playlist from "./Playlist";
import Entertainer from "../../public/Entertainer.wav";
import SelfAware from "../../public/Self_aware.wav";
import InTheGray from "../../public/In_the_gray.wav";
import Rise from "../../public/Rise.wav";
import Vigilante from "../../public/Vigilante.wav";
import KimbleProfilePic from "../../public/kimble_photo1.JPG";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tracks: [
        { name: "In The Gray", track: InTheGray },
        { name: "Entertainer", track: Entertainer },
        { name: "Vigilante", track: Vigilante },
        { name: "Rise", track: Rise },
        { name: "Self Aware", track: SelfAware },
      ],
    };
  }
  render() {
    const { tracks } = this.state;
    return (
      <div>
        <header>Kimble Crane</header>
        <Playlist tracks={tracks} />
      </div>
    );
  }
}

export default App;
