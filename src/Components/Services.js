import React from 'react';
import './Style/Services.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const cardsData = [
     {
    title: "Réservez maintenant et payez sur place",
    text: "Annulation GRATUITE sur la plupart des hébergements.",
    image:"https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/FreeCancellation.png"
  },
  {
    title: "Plus de 2 millions d'établissements à travers le monde",
    text: "Hôtels, maisons d'hôtes, appartements, etc.",
    image:"https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/TripsGlobe.png"
  },
 
  {
    title: "Un Service Clients de confiance, disponible 24h/24 et 7j/7",
    text: "Nous sommes là pour vous aider, à tout moment.",
    image:"https://t-cf.bstatic.com/design-assets/assets/v3.160.0/illustrations-traveller/CustomerSupport.png"
  },
];

function Services () {
  return (
 
  <Row xs={1} md={3} className="g-3">
      {cardsData.map((card, idx) => (
        <Col key={idx}>
          <Card className="h-100 shadow-sm service-card">
             <Card.Img
              variant="top"
              src={card.image}
              alt={card.title}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
  
}

export default Services;
