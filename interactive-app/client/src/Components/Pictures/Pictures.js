import * as React from 'react';

import Radium from 'radium';
import { Card, CardImg, CardText, CardBody,CardColumns, CardTitle, CardSubtitle, Row, Col, Container} from 'reactstrap';

import Masonry from 'react-masonry-component';
import './Pictures.css';



// style related
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

    pictures.map((picture, index) =>{
      console.log(picture.preview_photos)
    } )


    const listItemsPictures = pictures.map((picture, index) =>
      picture.preview_photos.map((p,i)=>

        <Card style={cardStyle} className="cardstyleHover" key={picture.id}>
          <CardImg top width="100%" src={p.urls.regular} />
          <CardBody>
            <CardTitle style={textStyle}>{picture.name}</CardTitle>
            <CardSubtitle>{picture.profession}</CardSubtitle>
            <CardText>
            </CardText>
          </CardBody>
        </Card> 
      )
    )


  return (
    <div>
      <Container>
        <br /><br />
        <CardColumns>
          {listItemsPictures}
        </CardColumns>
        <br /><br />
      </Container>
    </div>
  );

	
}










export default Radium(Pictures)