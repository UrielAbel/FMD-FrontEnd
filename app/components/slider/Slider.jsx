'use client'

import Styles from './Slider.module.css';
import Card from '../../../components/card/Card';
import ArrowSlider from '@/icons/ArrowSlider';
import PostCard from '@/components/postCard/PostCard';

import { useRef } from 'react';

const Slider = ({ content, subtitle, post }) => {
    const sRef = useRef(null)
    const sizeRef = useRef(null)

    let handleChange = (right) => {
        let sliderRef = sRef.current
        let cardsToMove = 2
        let size = sizeRef.current.offsetWidth;
        
        let value = (size / content.length) * cardsToMove;

        right ? sliderRef.scrollLeft += value : sliderRef.scrollLeft -= value
    }

    return (
        <>
            <div className={Styles.contAll}>
            <h3 className={Styles.subtitle}>{subtitle}</h3>
                <div className={Styles.contSlider} ref={sRef}>
                    <div className={Styles.slider} ref={sizeRef}>
                        {content?.map((pod) => post ? 
                        <PostCard post={pod}/>
                        : 
                        <Card key={pod.uri} uri={`/podcasts/${pod.uri}`} imageURL={pod.imageUrl} title={pod.title} autor={pod.autor.name}/>
                        )}
                    </div>
                </div>
                <div className={Styles.buttonLeft} onClick={() => handleChange(false)}><ArrowSlider/></div>
                <div className={Styles.buttonRight} onClick={() => handleChange(true)}><ArrowSlider direction={"r"}/></div>
            </div>
        </>
    );
}

export default Slider;