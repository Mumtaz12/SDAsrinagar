
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Banner.module.css';
import { main_backend_path } from '../../../constants/constants';

export default function Banner(props) {
    return (
        <Carousel className={styles['slide']}>
            {props.banners &&
                props.banners.map((image, index) => (
                    <Carousel.Item key={index} className={styles['slide']}>
                        <img
                            className="d-block w-100"
                            src={main_backend_path + image.file.url}
                            alt={image.title}
                        />
                        <Carousel.Caption>
                            <p>{image.title}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            {!props.banners && (
                <Carousel.Item className={styles['slide']}>
                    <img
                        className="d-block w-100"
                        src="/placeholder.jpg" // Provide a placeholder image
                        alt="Placeholder"
                    />
                    <Carousel.Caption>
                        <p>No banners available</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
}
