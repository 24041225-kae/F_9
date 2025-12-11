// intro of our project and team members
//contact for feedbacks and any issues occurred
// heading "About Us"
import React from 'react';
export default function About() {
  return (
    <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to our project! We are a dedicated team committed to making a positive impact on the world through innovative solutions and collaborative efforts.</p>
        <h2>Our Team</h2>
        <ul>
            <li><strong><img src='kaelynn.jpg'>Kaelynn Fong</img></strong> - Project Manager</li>
            <li><strong><img src='luoqian.jpg'>Guo Luo Qian</img></strong> - Lead Developer</li>
            <li><strong><img src='chiaen.jpg'>Cheng Chia En</img></strong> - UX/UI Designer</li>
        </ul>
        <h2>Our Mission</h2>
        <p>Our mission is to create engaging and educational experiences that raise awareness about important global issues. Through our games and interactive content, we aim to inspire change and encourage proactive behavior in our community.</p>
        <h3>Group Photo</h3>
        <img src="threeofus.jpg" alt="Group Photo" style={{width: '400px', height: 'auto'}}/>
        <form>
        <h2>Feeback Form</h2>
        <label>Your Feedback:</label><br/>
        <textarea rows="4" cols="50" placeholder="Enter your feedback here..."></textarea><br/>
        <button type="submit">Submit</button>
        </form>
        <h2>Contact Us</h2>
        <p>If you have any feedback or encounter any issues, please feel free to reach out to us at <a href="mailto:luowian@gmail.com"> gmail.com</a>. We value your input and are here to assist you.</p>
    </div>
    );
}