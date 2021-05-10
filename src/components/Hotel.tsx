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
                <Image fit="cover" src="/images/hotel/gallery/167 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/118 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/119 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/121 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/122 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/123 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/124 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/126 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/128 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/133 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/137 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/140 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/142 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/145 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/148 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/151 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/153 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/154 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/155 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/156 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/159 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/160 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/161 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/165 FOTO.jpg" />
                <Image fit="cover" src="/images/hotel/gallery/174 FOTO.jpg" />
            </Carousel>
        </Box>
    </Box>
);
