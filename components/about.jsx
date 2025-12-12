// intro of our project and team members
//contact for feedbacks and any issues occurred
// heading "About Us"
import React, {useEffect} from 'react';
export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="about-container" style={{padding: '40px', maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{fontSize: '32px', marginBottom: '20px', textAlign: 'center', color: '#4A90E2'}}>About Us</h1>
        <p style={{fontSize: '16px', marginBottom: '30px', lineHeight: '1.6', textAlign: 'center'}}>Welcome to our project! We are a dedicated team committed to making a positive impact on the world through innovative solutions and collaborative efforts.</p>
        
        <h2 style={{fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: '#4A90E2'}}>Our Team</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px'}}>
            <div className="flex flex-col items-center" style={{textAlign: 'center', padding: '20px', border: '2px solid #B7DBFF', borderRadius: '12px', backgroundColor: '#F0F7FF'}}>
                <img className="hover:animate-spin" src="./kaelynn.jpg" alt="Kaelynn Fong" loading="lazy" style={{width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px'}}/>
                <h3 style={{fontSize: '18px', margin: '10px 0', color: '#4A90E2'}}><strong>Kaelynn Fong</strong></h3>
                <p style={{fontSize: '14px', color: '#666'}}>Project Manager</p>
            </div>
            <div className="flex flex-col items-center" style={{textAlign: 'center', padding: '20px', border: '2px solid #B7DBFF', borderRadius: '12px', backgroundColor: '#F0F7FF'}}>
                <img className="hover:animate-spin" src="./luoqian.jpg" alt="Guo Luo Qian" loading="lazy" style={{width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px'}}/>
                <h3 style={{fontSize: '18px', margin: '10px 0', color: '#4A90E2'}}><strong>Guo Luo Qian</strong></h3>
                <p style={{fontSize: '14px', color: '#666'}}>Lead Developer</p>
            </div>
            <div className="flex flex-col items-center" style={{textAlign: 'center', padding: '20px', border: '2px solid #B7DBFF', borderRadius: '12px', backgroundColor: '#F0F7FF'}}>
                <img className="hover:animate-spin" src="./chiaen.jpg" alt="Cheng Chia En" loading="lazy" style={{width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px'}}/>
                <h3 style={{fontSize: '18px', margin: '10px 0', color: '#4A90E2'}}><strong>Cheng Chia En</strong></h3>
                <p style={{fontSize: '14px', color: '#666'}}>UX/UI Designer</p>
            </div>
        </div>
        
        <h2 className="opacity-0 animate-[fadeIn_3s_ease-out_forwards]" style={{fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: '#4A90E2'}}>Our Mission</h2>
        <p className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]" style={{fontSize: '16px', marginBottom: '30px', lineHeight: '1.6', textAlign: 'center'}}>Our mission is to create engaging and educational experiences that raise awareness about important global issues. Through our games and interactive content, we aim to inspire change and encourage proactive behavior in our community.</p>

        <h2 className="opacity-0 animate-[fadeIn_3s_ease-out_forwards]" style={{fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: '#4A90E2'}}>About Huumonia</h2>
        <i className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]" style={{fontSize: '16px', marginBottom: '30px', lineHeight: '1.6', textAlign: 'center'}}>Our Story</i>
        <p className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]" style={{fontSize: '16px', marginBottom: '30px', lineHeight: '1.6', textAlign: 'center'}}>Huumonia began from our team's discussion around the “save the world” problem statement and how it connects to issues happening locally. As we researched further, we became more aware of animal abuse and poaching cases within our own surroundings. These incidents showed us how harmful actions against animals do not only affect individual lives, but can also disrupt wildlife populations and ecosystems over time. Seeing these problems close to home made them feel more real, and motivated us to create a platform that encourages awareness instead of indifference.</p>

        <h3 style={{fontSize: '20px', marginBottom: '15px', textAlign: 'center', color: '#4A90E2'}}>Group Photos</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px', justifyItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
                <img src="./threeofus.jpg" alt="Group Photo" loading="lazy" style={{width: '400px', height: '400px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}/>
            </div>
            <div style={{textAlign: 'center'}}>
                <img src="./pic2ofus.jpg" alt="Group Photos" loading="lazy" style={{width: '400px', height: '400px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}/>
            </div>
        </div>
        
        <form style={{maxWidth: '600px', margin: '0 auto', padding: '30px', backgroundColor: '#F0F7FF', color: '#000000ff', borderRadius: '12px', border: '2px solid #B7DBFF'}}>
            <h2 style={{fontSize: '20px', marginBottom: '20px', color: '#4A90E2'}}>Feedback Form</h2>
            <label style={{fontSize: '16px', marginBottom: '10px', display: 'block', color: '#000000ff'}}>Your Feedback:</label>
            <textarea rows="5" cols="50" placeholder="Enter your feedback here..." style={{width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #B7DBFF', fontFamily: 'Arial', fontSize: '14px'}}></textarea>
            <button type="submit" style={{padding: '10px 20px', backgroundColor: '#4A90E2', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold'}}>Submit</button>
        </form>

        <h2 style={{fontSize: '24px', marginBottom: '20px', marginTop: '40px', textAlign: 'center', color: '#4A90E2'}}>Contact Us</h2>
        <p style={{fontSize: '16px', textAlign: 'center', lineHeight: '1.6'}}>If you have any feedback or encounter any issues, please feel free to reach out to us <a href="mailto:rphuumonia@gmail.com" style={{color: '#4A90E2', textDecoration: 'none', fontWeight: 'bold'}}>here</a>. We value your input and are here to assist you.</p>
    </div>
  );
}
