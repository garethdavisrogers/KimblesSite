import React from "react";
import Playlist from "./Playlist";
import ContactForm from "./ContactForm";
import Entertainer from "../../public/Entertainer.wav";
import SelfAware from "../../public/Self_aware.wav";
import InTheGray from "../../public/In_the_gray.wav";
import Rise from "../../public/Rise.wav";
import Vigilante from "../../public/Vigilante.wav";
import KimbleProfilePic from "../../public/kimble_photo1.jpg";
import DistroKid from "../../public/distrokid-button.png";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

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
      <div className="page">
        <header className="page-header">Kimble Crane</header>
        <div className="picture-frame">
          <img className="profile-picture" src={KimbleProfilePic} />
        </div>
        <Playlist tracks={tracks} />
        <ContactForm />
        <div>
          <FaInstagramSquare />
          <FaFacebookSquare />
          <img src={DistroKid} />
        </div>
      </div>
    );
  }
}

export default App;
