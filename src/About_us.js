import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const About_us = () => {
    const [activeTab, setActiveTab] = useState('tab0');

    const openTab = (tabName) => {
        setActiveTab(tabName);
      };
    
      const TabButtonsContainer = styled.div`
        display: flex;
        justify-content: space-around;
      `;
    
      const TabButton = styled.div`
        cursor: pointer;
        padding: 10px;
        color:black;
      //  font-size:15px;
        border: 1px solid #ccc;
        background-color: ${(props) => (props.active ? 'white' : '#f1f1f1')};
        border-radius: 5px 5px 0 0;
    &:hover {
      background-color: #e0e0e0;
    }
      `;
    
      const TabContent = styled.div`
        display: ${(props) => (props.active ? 'block' : 'none')};
        padding: 10px;
        border: 1px solid #ccc;
        border-top: none;
      `;
      
  return (
    <div>
        <Header />
        <div className="main-container">
            <section className="text-center">
                <div className="container">
        
                <TabButtonsContainer className="tab-buttons">
                <TabButton
          id="button-tab0"
          active={activeTab === 'tab0'}
          onClick={() => openTab('tab0')}
        >
          About Us
        </TabButton>
        <TabButton
          id="button-tab1"
          active={activeTab === 'tab1'}
          onClick={() => openTab('tab1')}
        >
          Vision
        </TabButton>
        <TabButton
          id="button-tab2"
          active={activeTab === 'tab2'}
          onClick={() => openTab('tab2')}
        >
          Mission
        </TabButton>
        <TabButton
          id="button-tab3"
          active={activeTab === 'tab3'}
          onClick={() => openTab('tab3')}
        >
          CEO`s Message
        </TabButton>
        <TabButton
          id="button-tab4"
          active={activeTab === 'tab4'}
          onClick={() => openTab('tab4')}
        >
          Contact Us
        </TabButton>
        {/* Add more tab buttons as needed */}
      </TabButtonsContainer>
      <TabContent id="tab0" active={activeTab === 'tab0'}>
  
     
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <h2>About Us</h2>
                                <div  data-arrows="true" data-paging="true">
                                
                                <img alt="Image2" src="templates/bs_wtk/images/taskmantra_img/women.png" />
                                
                                </div>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>    
        
        
                        <div className="row">
                            <div className="col-sm-12 col-sm-offset-2 col-md-10 col-md-offset-4"><br />
                        
                        
                                <p className="lead" style={{textAlign:"justify"}}>
                                Task Mantra PVT LTD is a Bangalore-based leading online digital women empowerment platform dedicated to supporting women in enhancing their lives, gaining control, making informed decisions, earning money as a community, and nurturing their families. Our platform offers a diverse range of online methods, resources, and tools designed to empower women in various aspects of their lives.
                                </p>
                                <p className="lead" style={{textAlign:"justify"}}>
                                At Task Mantra, we understand that empowerment encompasses multiple dimensions, including personality development, education, career advancement, and financial stability. Therefore, we provide comprehensive resources and programs to equip women with the skills, knowledge, power and confidence they need to reach their full potential.
                                
                                </p>
                                <p className="lead" style={{textAlign:"justify"}}>
                                Our platform serves as a hub for women seeking personal and professional development opportunities. Whether it's developing new skills, pursuing educational endeavors, or advancing in their careers, Task Mantra provides the guidance and support necessary to foster growth and achievement. We believe that every woman deserves the opportunity to thrive and succeed, and we are committed to being their partner on this empowering journey and make them entrepreneurs.
                                
                                </p>
                                <p className="lead" style={{textAlign:"justify"}}>
                                Financial stability is a crucial aspect of empowerment, and Task Mantra offers various avenues for women to achieve it. We provide a wide range of hassle free online job opportunities, including earn-while-you-learn, earn-while-you-share, earn-while-you-play methods suitable for individuals of all ages, followed by other methods like  data development jobs, digital marketing, online reputation management, content making, image optimization, maping, brand promotion, surveys, advertisement, selling educational products and more. Through these opportunities, women can not only earn a sustainable income but also gain valuable skills and experience in the digital world.
                                
                                </p>
                                <p className="lead" style={{textAlign:"justify"}}>
                                Task Mantra is more than just an online platform; it is a vibrant community of women who support and uplift each other. We encourage collaboration, networking, and the sharing of experiences and knowledge. By connecting women from diverse backgrounds and providing a supportive environment, Task Mantra fosters a sense of belonging and sisterhood.
                                </p>
                                <p className="lead" style={{textAlign:"justify"}}>
                                *_Join Task Mantra today and embark on a transformative journey of empowerment. Together, we can break barriers, overcome challenges, and create a digital eco system where every woman can thrive and make a meaningful impact in her life and the lives of those around her, without fear of losing anything.
                                </p>
                            </div>
                        </div>
    
                </TabContent>
    
    
    
        
                <TabContent id="tab1" active={activeTab === 'tab1'}>
        
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <h2>OUR VISISON</h2>
                            <div  data-arrows="true" data-paging="true">
                            
                            <img alt="Image2" src="templates/bs_wtk/images/taskmantra_img/vision.png" />
                            
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>    
        
        
                    <div className="row">
                        <div className="col-sm-12 col-sm-offset-2 col-md-10 col-md-offset-4"><br />
                    
                    
                            <p className="lead" style={{textAlign:"justify"}}>
                            "Our vision at Task Mantra is to create a world where women are empowered to take control of their lives, realize their potential, and achieve personal and financial success. We envision a future where every woman has access to the resources, tools, and support needed to enhance her life and make informed decisions. Through our online platform, we aim to be the leading digital women empowerment hub, offering a comprehensive range of opportunities for personal and professional growth.
                            </p>
                            <p className="lead" style={{textAlign:"justify"}}>
                            In our vision, empowerment encompasses various dimensions, including personality development, education, career advancement, and financial stability. We strive to be the go-to platform for women seeking opportunities to learn, grow, and thrive in every aspect of their lives. We believe that by empowering women, we are not only transforming individual lives but also contributing to the betterment of families, communities, and society as a whole.
                            
                            </p>
                            <p className="lead" style={{textAlign:"justify"}}>
                                At Task Mantra, we are committed to providing women with the necessary skills, knowledge, power, and confidence to reach their full potential. We see ourselves as partners on their empowering journey, supporting and guiding them at every step. Our aim is to create a vibrant community of women who support and uplift each other, fostering collaboration, networking, and the sharing of experiences and knowledge.
                            
                            </p>
                            <p className="lead" style={{textAlign:"justify"}}>
                                Financial stability is a critical pillar of empowerment, and we envision Task Mantra as a platform that offers diverse online job opportunities tailored to meet the needs of women from all walks of life. From earn-while-you-learn and earn-while-you-share methods to various digital roles like data development, digital marketing, content creation, and more, we want to provide avenues for women to not only earn a sustainable income but also gain valuable skills and experience in the digital world.
                            
                            </p>
                            <p className="lead" style={{textAlign:"justify"}}>
                                Ultimately, our vision is to see Task Mantra as a catalyst for positive change, breaking down barriers and empowering women to overcome challenges and achieve their dreams. We aspire to create a society where gender equality is not just a goal but a reality, and women are recognized and celebrated for their contributions to every sphere of life. With Task Mantra, we strive to build a future where women are strong, confident, and in control of their destinies, nurturing themselves, their families, and the world around them."
                            </p>
                        </div>
                    </div>
    
          </TabContent>
    
    
    
          <TabContent id="tab2" active={activeTab === 'tab2'}>
      
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <h2>OUR MISSION</h2><br />
                            <div  data-arrows="true" data-paging="true">
                            
                            <img alt="Image1" src="templates/bs_wtk/images/taskmantra_img/mission.png" />
                            
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
    
    
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-md-10">
                        
                            <p className="lead" style={{textAlign:"justify"}}>
                            "To empower women across the globe by providing a comprehensive and inclusive online platform dedicated to personal and professional development. We strive to equip women with the necessary skills, knowledge, and resources to enhance their lives, make informed decisions, achieve financial stability, and thrive as entrepreneurs. Through a vibrant and supportive community, Task Mantra aims to foster sisterhood, collaboration, and networking, empowering women to reach their full potential and create a positive impact on their families and society as a whole."   
                            </p>    
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
          </TabContent>
    
    
    
    
    
    
          <TabContent id="tab3" active={activeTab === 'tab3'}>
      
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-md-10">
                            <h2>CEO MESSAGE</h2><br />
                            
                            <p className="lead" style={{textAlign:"left"}}>
                            Dear members of the Task Mantra community,
                            </p> 
                            <p className="lead" style={{textAlign:"justify"}}>
                            I am delighted to address all of you as the CEO of Task Mantra PVT LTD, an inspiring online digital platform dedicated to empowering women and fostering positive change in their lives. Our journey began with a simple yet powerful vision: to create a safe, supportive, and inclusive space where women could enhance their lives, make informed decisions, and take control of their destinies.
                            
                            </p> 
                            <p className="lead" style={{textAlign:"justify"}}>
                            In today's world, women play a vital role in shaping society, driving progress, and nurturing families. However, we recognize that many women face unique challenges and barriers that hinder them from realizing their true potential. At Task Mantra, we stand committed to providing you with the necessary tools, resources, and opportunities to break through these barriers and achieve greatness.
                            
                            </p> 
                            <p className="lead" style={{textAlign:"justify"}}>
                            Our platform offers a diverse range of online methods, resources, and tools tailored to address various aspects of your lives. We firmly believe that empowerment comes in many forms, and that's why we focus on holistic growth. Whether it's expanding your skillset, exploring educational opportunities, advancing your career, or even pursuing financial stability, we are here to support you at every step of your journey.
                            
                            </p> 
                            <p className="lead" style={{textAlign:"justify"}}>
                            One of our core principles is the "Earn While Learn" method, which enables people of all ages to acquire new skills while earning an income online. From data entry jobs to digital marketing, brand promotion to online reputation management, and even participating in surveys – we provide an array of avenues for financial growth and independence.
                            
                            </p> 
                            <p className="lead" style={{textAlign:"justify"}}>
                            Task Mantra is not just a platform; it is a thriving community where we celebrate each other's successes, lift one another in times of doubt, and grow together as a force to be reckoned with. Our strength lies in the power of collaboration and collective support. We encourage you to actively engage, share your stories, and embrace your unique abilities, for it is in our diversity that we find our greatest strength.
                            
                            </p> 
                            <p className="lead" style={{textAlign:"justify"}}>
                            As we continue to evolve, we pledge to remain committed to your growth, to listen to your needs, and to develop innovative solutions that empower you to shape your destiny. Your success is our success, and we take immense pride in being a part of your journey towards greatness.
                            
                            </p> 
                            <p className="lead" style={{textAlign:"justify"}}>
                            Thank you for being a part of the Task Mantra family. Together, let's break boundaries, overcome obstacles, and create a world where every woman can realize her dreams, unapologetically.
                            
                            </p> 
                            <p className="lead" style={{textAlign:"left"}}>
                            Empowering women, empowering humanity.
                            
                            </p> 
                            <p className="lead" style={{textAlign:"left"}}>
                            With gratitude and determination,
                            
                            </p> 
                            <p className="lead" style={{textAlign:"left"}}>
                            NITHIN
                            <br />
                            CEO, Task Mantra PVT LTD   
                            </p> 
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
        </TabContent>
    
    
    
    
        <TabContent id="tab4" active={activeTab === 'tab4'}>
      
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                                <h2>Contact Us</h2><br />
                                <div className="slider border--round" data-arrows="true" data-paging="true">
                                <ul className="slides">
                                <li>
                                <img alt="Image" src="templates/bs_wtk/images/taskmantra_img/contactus.jpg" />
                                </li>
                                </ul>
                                </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                                
                                
                    <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-md-10">
                                
                                <p className="lead" style={{textAlign:"center"}}>
                                TASK MANTRA PVT LTD
                                
                                </p> 
                                <p className="lead" style={{textAlign:"center"}}>
                                22ND FLOOR, 26/1,
                                </p>
                                <p className="lead" style={{textAlign:"center"}}>
                                World Trade Centre ,
                                </p>
                                <p className="lead" style={{textAlign:"center"}}>
                                BRIGADE GATEWAY, DR RAJKUMAR RD, 
                                </p>
                                <p className="lead" style={{textAlign:"center"}}>
                                MALLESHWARA, BENGALURU 55 
                                </p>
                                <p className="lead" style={{textAlign:"center"}}>
                                PH 98 20 60 1008
                                </p>
                            </div>
                            <div className="col-sm-1"></div>
                    </div>
            </TabContent>
    
    
    
    
            </div>
        </section>
    </div>
    
   
    
    
    <section className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-sm-offset-4 col-md-8 col-md-offset-5">
                <br />
                
                <h2>We're always looking for day dreamers</h2>
                <p className="lead">
                Join our vibrant community! We will transform your life into the new world.
                </p>
                <a className="btn btn--primary type--uppercase" href="https://user.taskmantra.com/signup_new.php">
                <span className="btn__text">
                Register Now
                </span>
                </a>
                
                </div>
            </div>
        
        </div>
        
    </section>
    <Footer />
    </div>

  )
}

export default About_us