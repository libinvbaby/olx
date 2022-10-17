import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv" style={{padding:"20px 0"}}>
      <Container>
      <Row>
        <Col>
            <h5 style={{marginLeft:"30px"}}>Polpular Locations</h5>
            <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
            </ul>
        </Col>
        <Col>
        <h5 style={{marginLeft:"28px"}}>trending Locations</h5>
            <ul>
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
            </ul>
        
        </Col>
        <Col>
              <h5 style={{marginLeft:"30px"}}>About Us</h5>
              <ul>
                <li>About OLX Group</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>OLXPeople</li>
                <li>Waah Jobs</li>
              </ul>
           
        </Col>
        <Col>
       <h5 style={{marginLeft:"30px"}}>OLX</h5>
       <ul>
        <li>Help</li>
        <li>Sitemap</li>
        <li>Legal & Privacy information</li>
        <li>Blog</li>
       </ul>
           
        </Col>
        <Col>
          <h5>Follow Us </h5>
          <div>
          <i style={{padding:"5px"}} class="fa-brands fa-facebook"></i>
          <i  style={{padding:"5px"}}  class="fa-brands fa-instagram"></i>
          <i   style={{padding:"5px"}}  class="fa-brands fa-twitter"></i>          </div>
        </Col>
      </Row>
      
      </Container>
      

     
       <div className="footerParentDiv">
      
      <div className="footer">
        <Row>
          <Col className="p-3 ">        <p className="px-3 ">Other Countries Pakistan - South Africa - Indonesia</p>
</Col>
          <Col className="p-3 ">        <p className="px-3  ">Free Classifieds in India. © 2006-2021 OLX</p>
</Col>
        </Row>
      </div>
    </div>
    
    
    </div>
  );
}

export default Footer;
