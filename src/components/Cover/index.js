import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import coverPhoto from '../../assets/cover/0.jpg';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Cover() {
    return(
        <Container fluid className='cover-bg'>
            <div className='cover-container'>
                <p className='cover-text'>
                ‘Who are you, O great mountain? Before Zerubbabel you shall become a plain! And he shall bring forth the capstone With shouts of “Grace, grace to it!” ’ ”
                <span>Zechariah 4:7</span>
                </p>
            <img
            fluid
            src={coverPhoto}
            alt=''
            className='cover-photo'
            />
            </div>
        </Container>
    )
}

export default Cover;