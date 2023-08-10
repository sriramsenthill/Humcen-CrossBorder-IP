import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '16px',
  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)', // Adjust the values for a thicker shadow
  /* Add any additional inline styling you want for the card appearance */
};

const connectingLineStyle = {
  position: 'absolute',
  top: 0,
  left: '50%', // Position in the middle
  transform: 'translateX(-50%)',
  width: '2px', // Adjust thickness as needed
  height: '100%', // Height spanning the entire timeline section
  background: '#ccc', // Adjust color as needed
};

const Stories = () => {
  return (
    <>
    <h3
    style={{
      color: '#232323',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '800',
      marginBottom:'60px',
      fontSize: '58px',
    }}
  >
    The Story,<br/>Unearthing Our <span style={{color:'#9b51e0'}}>Journey</span>  
  </h3>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="Starting Point"
        style={{ color: '#9b51e0',}} 
      >
      <div style={cardStyle}>
        <h3 style={{fontSize:'32px',color:'#232323',fontWeight:'800'}}>
        The Starting Point 
        </h3>
        <p className='vertical-timeline-element-title' style={{fontSize:'22px',color:'#000000'}}>
        Our platform began with a simple yet powerful idea – to make global intellectual property (IP) easy and effective. Like a solution for a puzzle, we envisioned a way for innovators, businesses, and experts to protect, manage, and profit from their ideas worldwide.

        </p>
        </div>
    
      </VerticalTimelineElement>
  
      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="Exploring Further"
        style={{ color: '#9b51e0' }} 
      >
       <div style={cardStyle}>
        <h3 style={{fontSize:'32px',color:'#232323',fontWeight:'800'}}>
        Exploring Further 
        </h3>
        <p className='vertical-timeline-element-title' style={{fontSize:'22px',color:'#000000'}}>
        As we delved into the world of IP, we discovered that the challenges were widespread. People from all walks of life faced difficulties in handling their IP. Businesses, creators, and professionals needed a better way to navigate the complex world of IP process and management, and that's where our journey took a new direction.
        </p>
        </div>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="Crafting the Solution"
        style={{ color: '#9b51e0' }} 
      >
       <div style={cardStyle}>
        <h3 style={{fontSize:'32px',color:'#232323',fontWeight:'800'}}>
        Crafting the Solution 
        </h3>
        <p className='vertical-timeline-element-title' style={{fontSize:'22px',color:'#000000'}}>
        Our experienced team deep understanding of the field, we crafted a comprehensive platform that simplifies the entire IP journey. From safeguarding ideas to strategic management and finding ways to profit, our platform offers a unified space for all IP needs.
        </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="The Outcome"
        style={{ color: '#9b51e0' }} 
      >
      <div style={cardStyle}>
      <h3 style={{fontSize:'32px',color:'#232323',fontWeight:'800'}}>
      The Outcome 
        </h3>
        <p className='vertical-timeline-element-title' style={{fontSize:'22px',color:'#000000'}}>
        After careful development, our platform emerged as a transformative solution. It empowers anyone with ideas, creations, or innovations to thrive in the world of intellectual property. Our story is an invitation to join us and shape a future where IP isn't a challenge but an opportunity for all.
        </p>
        </div>
      </VerticalTimelineElement>
     
    </VerticalTimeline>
    </>
  );
};

export default Stories;
