import './App.css';
import './interactive.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

//twitterfooter
ReactDOM.render(<SocialIcon url="https://twitter.com/medusa_protocol" bgColor="none" fgColor="#FFFFFF" style={{ height: 40, width: 40 }}/>, document.querySelector(".twitterfooter"));
//telegramfooter
ReactDOM.render(<SocialIcon url="https://t.me/medusaprotocol" network="telegram" bgColor="#FFFFFF" fgColor="none" style={{ height: 20, width: 20 }}/>, document.querySelector(".telegramfooter"));
//instagramfooter
ReactDOM.render(<SocialIcon url="https://www.instagram.com/accounts/login/?next=/medusaprotocol/" bgColor="none" fgColor="#FFFFFF" style={{ height: 40, width: 40 }}/>, document.querySelector(".instagramfooter"));
//linkedinfooter
ReactDOM.render(<SocialIcon url="https://www.linkedin.com/company/medusa-protocol/" bgColor="none" fgColor="black" style={{ height: 35, width: 35 }} /> , document.querySelector(".linkedinfooter"));


//twitterheader
ReactDOM.render(<SocialIcon url="https://twitter.com/medusa_protocol" bgColor="none" fgColor="#FFFFFF" style={{ height: 40, width: 40 }}/>, document.querySelector(".twitterheader"));
//telegramheader
ReactDOM.render(<SocialIcon url="https://t.me/medusaprotocol" network="telegram" bgColor="#FFFFFF" fgColor="none" style={{ height: 20, width: 20 }}/>, document.querySelector(".telegramheader"));
//instagramheader
ReactDOM.render(<SocialIcon url="https://www.instagram.com/accounts/login/?next=/medusaprotocol/" bgColor="none" fgColor="#FFFFFF" style={{ height: 40, width: 40 }}/>, document.querySelector(".instagramheader"));
//linkedinheader
ReactDOM.render(<SocialIcon url="https://www.linkedin.com/company/medusa-protocol/" bgColor="none" fgColor="black" style={{ height: 35, width: 35 }} /> , document.querySelector(".linkedinheader"));

//twittersectionfour
ReactDOM.render(<SocialIcon url="https://twitter.com/medusa_protocol" bgColor="none" fgColor="#FFFFFF" style={{ height: 48, width: 48 }}/>, document.querySelector(".twittersectionfour"));
//telegramsectionfour
ReactDOM.render(<SocialIcon url="https://t.me/medusaprotocol" network="telegram" bgColor="#FFFFFF" fgColor="none" style={{ height: 24, width: 24 }}/>, document.querySelector(".telegramsectionfour"));
//instagramsectionfour
ReactDOM.render(<SocialIcon url="https://www.instagram.com/accounts/login/?next=/medusaprotocol/" bgColor="none" fgColor="#FFFFFF" style={{ height: 48, width: 48 }}/>, document.querySelector(".instagramsectionfour"));
//linkedinsectionfour
ReactDOM.render(<SocialIcon url="https://www.linkedin.com/company/medusa-protocol/" bgColor="none" fgColor="black" style={{ height: 40, width: 40 }} /> , document.querySelector(".linkedinsectionfour"));
//mailtosectionfour
ReactDOM.render(<SocialIcon url="mailto:duarte.baltazar@medusaprotocol.com" bgColor="none" fgColor="#FFFFFF" style={{ height: 48, width: 48 }} /> , document.querySelector(".mailtosectionfour"));


function App() {  
  return (
    
    <div></div>
    
  );
}

export default App;
 