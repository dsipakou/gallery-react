import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { closeImage } from '../../store/actions';
import { ImageContainer, Image } from './styled';

export const ImageDetails = ({image}) => {
    const dispatch = useDispatch()
    return (
        <ImageContainer>
            <Image src={image.photo} onClick={() => dispatch(closeImage())} alt='Loading...' />
        </ImageContainer>
    )
}

ImageDetails.propTypes = {
    image: PropTypes.object.isRequired,
}
