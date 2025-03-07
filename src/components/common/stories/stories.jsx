import React from 'react';
import {useState, useEffect} from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket,faCompass,faCheckCircle,faDraftingCompass} from '@fortawesome/free-solid-svg-icons';



const Stories = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1170);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const newTimelineCard = {
    position: "relative",
    marginLeft: "55px",
    background: "#fff",
    width: "83%",
    borderRadius: "0.25em",
    padding: "1em",
    boxShadow: "0 0px 0 #ddd",
}
  
  const connectingLineStyle = {
    position: 'absolute',
    top: 0,
    left: isMobile ? "15px" : '50%',
    transform: isMobile ? 'none' : 'translateX(-50%)',
    width: '2px',
    height: '100%',
    background: '#ccc',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    height: "90%",
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)' , // Adjust the values for a thicker shadow
    /* Add any additional inline styling you want for the card appearance */
  };

  return (
    <>
    <h3
    style={{
      color: '#232323',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '800',
      marginBottom:'60px',
      fontSize: isMobile ? "42px" : '58px',
    }}
  >
    The Story,<br/>Unearthing Our <span
  style={{
    background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',
    WebkitBackgroundClip: 'text', // Use -webkit prefix for browser compatibility
    color: 'transparent', // Make the text transparent
  }}
>
  Journey
</span>

  </h3>
  
    <VerticalTimeline>
    <div style={connectingLineStyle}></div>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
  iconStyle={{ background: '#00002B', color: '#fff' }}
  icon={<FontAwesomeIcon icon={faRocket} />}
  contentStyle={isMobile ? newTimelineCard : { border: 'none', padding: '0' }}

      >
      <div style={cardStyle}>
        <h3 style={{fontSize: isMobile ? "25px" : '28px',    background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',
    WebkitBackgroundClip: 'text', // Use -webkit prefix for browser compatibility
    color: 'transparent', fontWeight:'800'}}>
        The Starting Point 
        </h3>
        <p className='vertical-timeline-element-title' style={{fontSize: isMobile ? "15px" : '18px',color:'#000000',  textAlign: 'justify',    // Aligns text to justify both left and right edges
  lineHeight: '1.5',}}>
        Our platform began with a simple yet powerful idea – to make global intellectual property (IP) easy and effective. Like a solution for a puzzle, we envisioned a way for innovators, businesses, and experts to protect, manage, and profit from their ideas worldwide.

        </p>
        </div>
    
      </VerticalTimelineElement>
  
      <VerticalTimelineElement
        className="vertical-timeline-element"
  iconStyle={{ background: '#00002B', color: '#fff' }}
  contentStyle={isMobile ? newTimelineCard : { border: 'none', padding: '0' }}
        icon={<FontAwesomeIcon icon={faCompass} />}
      >
       <div style={cardStyle}>
       <h3 style={{fontSize: isMobile ? '25px' : "28px",    background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',
    WebkitBackgroundClip: 'text', // Use -webkit prefix for browser compatibility
    color: 'transparent', fontWeight:'800'}}>
        Exploring Further 
        </h3>
        <p className='vertical-timeline-element-title' style={{fontSize: isMobile ? "15px" : '18px',color:'#000000',textAlign: 'justify',    // Aligns text to justify both left and right edges
  lineHeight: '1.5'}}>
        As we delved into the world of IP, we discovered that the challenges were widespread. People from all walks of life faced difficulties in handling their IP. Businesses, creators, and professionals needed a better way to navigate the complex world of IP process and management, and thats where our journey took a new direction.
        </p>
        </div>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
       className="vertical-timeline-element"
  iconStyle={{ background: '#00002B', color: '#fff' }}
  contentStyle={isMobile ? newTimelineCard : { border: 'none', padding: '0' }}
        icon={<FontAwesomeIcon icon={faDraftingCompass} />}

      >
       <div style={cardStyle}>
       <h3 style={{fontSize: isMobile ? "25px" : "28px",    background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',
    WebkitBackgroundClip: 'text', // Use -webkit prefix for browser compatibility
    color: 'transparent', fontWeight:'800'}}>
        Crafting the Solution 
        </h3>
        <p className='vertical-timeline-element-title' style={{fontSize: isMobile ? "15px" : '18px',color:'#000000',textAlign: 'justify',lineHeight: '1.5'}}>Our experienced team deep understanding of the field, we crafted a comprehensive platform that simplifies the entire IP journey. From safeguarding ideas to strategic management and finding ways to profit, our platform offers a unified space for all IP needs.
        </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element"
  iconStyle={{ background: '#00002B', color: '#fff' }}
  icon={<FontAwesomeIcon icon={faCheckCircle} />}
  contentStyle={isMobile ? newTimelineCard : { border: 'none', padding: '0' }}
      >
      <div style={cardStyle}>
      <h3 style={{fontSize: isMobile ? "25px" : '28px',    background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',
    WebkitBackgroundClip: 'text', // Use -webkit prefix for browser compatibility
    color: 'transparent', fontWeight:'800'}}>
      The Outcome 
        </h3>
        <p className='vertical-timeline-element-title' style={{fontSize: isMobile ? "15px" : "18px",color:'#000000',textAlign: 'justify',    // Aligns text to justify both left and right edges
  lineHeight: '1.5'}}>
        After careful development, our platform emerged as a transformative solution. It empowers anyone with ideas, creations, or innovations to thrive in the world of intellectual property. Our story is an invitation to join us and shape a future where IP isnt a challenge but an opportunity for all.
        </p>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </>
  );
};

export default Stories