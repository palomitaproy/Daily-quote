import React from "react";
import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";

const {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon("facebook");
const TwitterIcon = generateShareIcon("twitter");
const WhatsappIcon = generateShareIcon("whatsapp");
const titel = "Your Fortune cookie:";
const url = "https://yourfortunecookie.herokuapp.com";

class SocialNetworks extends React.Component {
  render() {
    return (
      <div className="mx-auto social row">
        <div className="col-sm">
          <FacebookShareButton titel={titel} url={url} children="FacebookIcon">
            <FacebookIcon  className="mx-auto" size={32} round={true} />
          </FacebookShareButton>
        </div>
        <div className="col-sm">
          <TwitterShareButton titel={titel} url={url} children="TwitterIcon"> 
            <TwitterIcon className="mx-auto" size={32} round={true} />
          </TwitterShareButton>
        </div> 
        <div className="col-sm">
          <WhatsappShareButton titel={titel} url={url} children="WhatsappIcon">
            <WhatsappIcon className="mx-auto" size={32} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    );
  }
}

export default SocialNetworks;
