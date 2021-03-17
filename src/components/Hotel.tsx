import { Box, Carousel, Heading, Image, Paragraph } from 'grommet';
import { ReactElement } from 'react';

import { Features } from './features';
export const Hotel = (): ReactElement => (
    <Box align="center" pad="large">
        <Heading size="medium">El Hotel</Heading>
        <Paragraph size="xlarge" textAlign="center">
            Este establecimiento está compuesto de dos partes bien diferenciadas, la primera y más antigua, imagen tradicional del hotel, ha sido
            restaurada de una manera respetuosa, conservando el encanto de sus rincones más característicos y atractivos, pero siempre atendiendo a
            las nuevas tendencias estéticas y normativas actuales.
        </Paragraph>
        <Features />
        <Box height="large" width="xlarge" overflow="hidden">
            <Carousel fill={true}>
                <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
            </Carousel>
        </Box>
    </Box>
);
