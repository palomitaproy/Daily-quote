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

class SocialNetworks extends React.Component {
  render() {
    return (
      <div className="mx-auto social row">
        <div className="col-sm">
          <FacebookShareButton url="http://localhost:3000" children="FacebookIcon">
            <FacebookIcon  className="mx-auto" size={32} round={true} />
          </FacebookShareButton>
        </div>
        <div className="col-sm">
          <TwitterShareButton url="http://localhost:3000" children="TwitterIcon"> 
            <TwitterIcon className="mx-auto" size={32} round={true} />
          </TwitterShareButton>
        </div> 
        <div className="col-sm">
          <WhatsappShareButton url="http://localhost:3000" children="WhatsappIcon">
            <WhatsappIcon className="mx-auto" size={32} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    );
  }
}

export default SocialNetworks;
