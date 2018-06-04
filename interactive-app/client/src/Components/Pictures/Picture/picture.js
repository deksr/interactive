import React, { Component } from 'react';

import Modal from 'react-responsive-modal';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';




//********* styles **********
const textStyle = {
  ':hover': {
    backgroundColor: 'pink'
  }
}

const cardStyle = {
  backgroundColor: '#F5F5F5',
  border: 'none'
}
//****************************








class Picture extends Component {


  state = {
    open: false,
  };
 

  onOpenModal = () => {
    this.setState({ open: true });
  };
 

  onCloseModal = () => {
    this.setState({ open: false });
  };
 



  render() {
    const { open } = this.state;

    return (
      <div>
        <Card style={cardStyle} className="cardstyleHover">
          <CardImg top width="100%" src={this.props.pictureobj.urls.regular} />
          <CardBody>
	          <CardTitle style={textStyle}></CardTitle>
	          <CardSubtitle></CardSubtitle>
	          <CardText> 
	          <button onClick={this.onOpenModal}>Open modal</button>
	          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Simple centered modal 
              <CardImg top width="10%" src={this.props.pictureobj.urls.regular} /> 
             </h2>
            </Modal>
	          </CardText>
          </CardBody>
        </Card>
            <br/> <br/>

      </div>
    );

  }
}


  




export default Picture;