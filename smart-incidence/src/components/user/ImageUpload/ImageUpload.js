import React from 'react';
import classes from './ImageUpload.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageUpload = (props) => (
    <div className={classes.introtext}>
        <h1 className={classes.h1}>Scan a new incident</h1>
        <h2 className={classes.h2}>Spotted something strange? Take an image and send it to us! We will take care of this!</h2>

        <div className={classes.circleQRCode}>
            <div className={classes.icon}>
                <FontAwesomeIcon icon="qrcode" size="2x"/>
            </div>
        </div>
        <div className={classes.circleUpload}>
            <div className={classes.icon}>
                <FontAwesomeIcon icon="upload" size="2x"/>
            </div>
        </div>
        <div className={classes.circleCam}>
            <div className={classes.icon}>
                <FontAwesomeIcon icon="camera" size="4x"/>
            </div>
        </div>
    </div>

);

export default ImageUpload;