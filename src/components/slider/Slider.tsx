// tslint:disable: no-magic-numbers

import { Box, ResponsiveContext } from 'grommet';
import { ReactElement } from 'react';
import Slider from 'react-slick';

import { images } from './data';
import { SliderImage } from './SliderImage';

const settings = {
    autoplay: true,
    className: 'center',
    infinite: true,
    slidesToScroll: 1,
    speed: 1200
};

const getNumOfItemsToShow = (size: string): number =>
    size === 'xsmall' ? 1 : size === 'small' ? 1 : size === 'medium' ? 3 : size === 'large' ? 5 : 5;

const galleryItems = (): ReactElement[] => images.map((item: string, index: number): ReactElement => <SliderImage src={item} key={index} />);

const GallerySlider = (): ReactElement => (
    <ResponsiveContext.Consumer>
        {(size: string): ReactElement => (
            <Box pad="large">
                <Slider slidesToShow={getNumOfItemsToShow(size)} {...settings}>
                    {galleryItems()}
                </Slider>
            </Box>
        )}
    </ResponsiveContext.Consumer>
);

export { GallerySlider as Slider };
