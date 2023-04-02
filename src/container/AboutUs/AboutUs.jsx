import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
  {/* this is for the big G in the background */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    {/* this is for the upper visible part */}
    <div className="app__aboutus-content flex__center">
        {/* for about us  */}
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button className="custom__button" type='button'>Know More</button>
        </div>
        {/* for the middle knife */}
        <div className="app__aboutus-content_knife">
          <img src={images.knife} alt="about_knife" />
        </div>
        {/* for our history */}
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button className="custom__button" type='button'>Know More</button>
        </div>

    </div>
  </div>
);

export default AboutUs;
