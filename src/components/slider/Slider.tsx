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

// tslint:disable-next-line: no-magic-numbers
const getNumOfItemsToShow = (size: string): number => (size === 'xsmall' ? 2 : size === 'small' ? 3 : size === 'medium' ? 4 : 5);

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
