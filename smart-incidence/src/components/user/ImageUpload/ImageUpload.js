import React, { Component } from 'react';
import classes from './ImageUpload.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QrReader from 'react-qr-reader';

class ImageUpload extends Component {
  render() {
    return (
      <div className={classes.big}>
        <div className={classes.introtext}>
          <h1 className={classes.h1}>Scan a new incident</h1>

          <h2 className={classes.h2}>
            Spotted something strange? Take an image and send it to us! We will
            take care of this!
          </h2>

          <div className={classes.container}>
            <a href="./QRRead">
              <div className={classes.circle}>
                <div className={classes.icon}>
                  <FontAwesomeIcon icon="qrcode" size="4x" />
                </div>
              </div>
            </a>
            <a href="./AddImage">
              <div className={classes.circle}>
                <div className={classes.icon}>
                  <FontAwesomeIcon icon="camera" size="4x" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
