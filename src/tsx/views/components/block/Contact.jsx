import "../../../styles/block/Contact.css"

import React from 'react';

import {Scroll} from "../atoms/ScrollReveal"


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit(){
    this.setState({isSubmitted:true})
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form  
        className="contactForm"
        onSubmit={()=>{this.handleSubmit()}} >
          <p>お名前</p>
          <input 
           type="text" 
           name="name"
           placeholder="Your Name"
           className="name"
          />
          <p>メールアドレス（必須）</p>
          <input 
           type="email" 
           name="email"
           placeholder="Your Email"
           className="email"
          />
          <p>お問い合わせ内容（必須）</p>
          <textarea 
           rows="5" 
           placeholder="Messages..."
           />
          <button 
            type='submit'
            value='Submit'
            className="submit"
           >
             Submit
          </button>
        </form>
      );
    }

    return (   
      <div>
        <div className='Form' id="contact">
        <div className="Contact">
          <Scroll>
            <h1 className="title">Contact</h1>
          </Scroll>
          <Scroll>
            {contactForm}
          </Scroll>
          </div>
        </div>
      </div> 
    );
  }
}

export default Contact;