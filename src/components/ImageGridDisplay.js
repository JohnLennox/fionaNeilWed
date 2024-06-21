import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ImageGridDisplay(props) {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageStyle = {
        padding: '5px',
        borderRadius: '10px',
        height: 'auto', // Maintain aspect ratio
        minHeight: '300px',
        width: '100%',  // Ensure the image takes full width of its container
        objectFit: 'cover' // Ensure the image covers the container while maintaining aspect ratio
    };

    const openModal = (index) => {
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setCurrentIndex(null);
    };

    const grid = (
        <div className="col-12 col-md-6 text-center">
            <div className="row">
                <div className="col-6 p-2">
                    <img className="img-fluid" style={imageStyle} src={props.images[0].src} alt="Gallery Image 1" onClick={() => openModal(0)} data-bs-toggle="modal" data-bs-target={`#${props.modalId}`} />
                </div>
                <div className="col-6 p-2">
                    <img className="img-fluid" style={imageStyle} src={props.images[1].src} alt="Gallery Image 2" onClick={() => openModal(1)} data-bs-toggle="modal" data-bs-target={`#${props.modalId}`} />
                </div>
            </div>
            <div className="row">
                <div className="col-6 p-2">
                    <img className="img-fluid" style={imageStyle} src={props.images[2].src} alt="Gallery Image 3" onClick={() => openModal(2)} data-bs-toggle="modal" data-bs-target={`#${props.modalId}`} />
                </div>
                <div className="col-6 p-2">
                    <img className="img-fluid" style={imageStyle} src={props.images[3].src} alt="Gallery Image 4" onClick={() => openModal(3)} data-bs-toggle="modal" data-bs-target={`#${props.modalId}`} />
                </div>
            </div>
        </div>
    );

    const mainImage = (
        <div className="col-12 col-md-6 text-center">
            <img className="img-fluid" style={{ padding: '5px', borderRadius: '10px' }} src={props.images[4].src} alt="Main Gallery Image" onClick={() => openModal(4)} data-bs-toggle="modal" data-bs-target={`#${props.modalId}`} />
        </div>
    );

    const first = props.mainImage === "right" ? grid : mainImage;
    const second = props.mainImage === "right" ? mainImage : grid;

    return (
        <div className="container" style={{ marginTop: '10px', paddingTop: '10px' }}>
            <div className="row">
                {first}
                {second}
            </div>

            <div className="modal fade" id={props.modalId} tabIndex="-1" aria-labelledby={`${props.modalId}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${props.modalId}Label`}>{currentIndex !== null && props.images[currentIndex].title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body text-center">
                            {currentIndex !== null && (
                                <img src={props.images[currentIndex].src} className="img-fluid" alt="Selected" />
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setCurrentIndex((currentIndex - 1 + props.images.length) % props.images.length)}>Previous</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setCurrentIndex((currentIndex + 1) % props.images.length)}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageGridDisplay;
