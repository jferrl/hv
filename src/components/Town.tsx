import { Box, Carousel, Heading, Image, Paragraph } from 'grommet';
import { ReactElement } from 'react';

export const Town = (): ReactElement => (
    <Box align="center" pad="large">
        <Heading size="medium">Valencia de Don Juan</Heading>
        <Paragraph size="xlarge" textAlign="center">
            our app's interaction is part of the attraction. simple and intuative so you can focus on the talent.
        </Paragraph>

        <Box height="large" width="xlarge" overflow="hidden">
            <Carousel fill={true}>
                <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
            </Carousel>
        </Box>
    </Box>
);
