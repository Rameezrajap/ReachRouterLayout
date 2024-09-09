import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CountriesCards({ country }) {
  return (
    <Card style={{ width: '18rem', height: '20rem', margin: '10px' }}>
      <Card.Img variant="top" className='CardImage' src={country.flags.png} alt={`${country.name.common} flag`} />
      <Card.Body>
        <Card.Title>{country.name.common}</Card.Title>
        <Card.Text>
          {country.name.official}
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default CountriesCards;

