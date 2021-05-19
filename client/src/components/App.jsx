import React from "react";
import Playlist from "./Playlist";
import ContactForm from "./ContactForm";
import KimbleProfilePic from "../../public/kimble_photo1.jpg";
import DistroKid from "../../public/distrokid-button.png";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tracks: [
        {
          name: "In The Gray",
          track:
            "https://res.cloudinary.com/garethssites/video/upload/v1621466976/KimblesTracks/In_the_gray_xe0n5w.wav",
        },
        {
          name: "Entertainer",
          track:
            "https://res.cloudinary.com/garethssites/video/upload/v1621466961/KimblesTracks/Entertainer_rb7yrf.wav",
        },
        {
          name: "Vigilante",
          track:
            "https://res.cloudinary.com/garethssites/video/upload/v1621466983/KimblesTracks/Vigilante_aoeds0.wav",
        },
        {
          name: "Rise",
          track:
            "https://res.cloudinary.com/garethssites/video/upload/v1621466968/KimblesTracks/Rise_lx5oi4.wav",
        },
        {
          name: "Self Aware",
          track:
            "https://res.cloudinary.com/garethssites/video/upload/v1621466980/KimblesTracks/Self_aware_wpblcb.wav",
        },
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
        <div className="social-media-icons">
          <a href="https://www.instagram.com/kimble_crane_music/?hl=en">
            <FaInstagramSquare size="3em" />
          </a>
          <a href="https://facebook.com/kimblecranemusic">
            <FaFacebookSquare size="3em" />
          </a>
          <a href="https://distrokid.com/hyperfollow/kimblecrane/vigilante">
            <img className="distro-kid" src={DistroKid} />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
