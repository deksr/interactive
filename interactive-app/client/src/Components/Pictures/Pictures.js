import React from 'react';
import Radium from 'radium';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container} from 'reactstrap';
import './Pictures.css';




const textStyle = {
  // backgroundColor: 'green',
  ':hover': {
    backgroundColor: 'pink'
  }
}


const colStyle = {
  // backgroundColor: 'red'
};


const rowStyle = {
  // backgroundColor: 'blue',
  marginTop: '30px'
};

const cardStyle = {
  backgroundColor: '#F5F5F5',
  border: 'none'
}







const Pictures = (props) => {

	const pictures = props.dummyPictureData;
  const listItemsPictures = pictures.map((picture, index) =>
        <Col style={rowStyle} xs="4">
          <Card style={cardStyle} className="cardstyleHover" key={picture.id}>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle style={textStyle}>{picture.name}</CardTitle>
              <CardSubtitle>{picture.profession}</CardSubtitle>
              <CardText>Some quick example</CardText>
            </CardBody>
          </Card> 
        </Col>
  )



  return (
    <div>
        <Container>
          <br /><br />
          <Row style={colStyle}>  
            {listItemsPictures}
          </Row>
          <br /><br />

        </Container>
    </div>
  );

	
}










export default Radium(Pictures)