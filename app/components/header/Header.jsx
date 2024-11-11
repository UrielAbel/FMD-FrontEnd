'use client'

import Styles from './Header.module.css'

import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ contenido }) => {
    return (
        <Carousel>
            {contenido?.map((cont) => (
                <Carousel.Item key={cont.title}>
                    <div className={Styles.slide}>
                        <Image
                            key={cont.title}
                            alt={cont.title}
                            src={cont.imageUrl}
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <Carousel.Caption>
                        <Link href={`/podcasts/${cont.uri}`} className={Styles.linkCaption} >
                            <h3>{cont.title}</h3>
                            <p className={Styles.description}>{cont.description}</p>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Header;