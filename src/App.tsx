import { Box, Grommet } from 'grommet';
import { ReactElement } from 'react';

import { Booking, Footer, Hotel, NavHeader, Section, Slider, Town, Wellcome } from './components';
import { customTheme } from './theme';

export default function App(): ReactElement {
    return (
        <Grommet full={true} theme={customTheme}>
            <NavHeader />
            <Slider />
            <Box align="center" pad="large">
                <Wellcome size="xlarge" />
                <Booking />
                <Hotel />
            </Box>
            <Town />
            <Section>
                <Footer />
            </Section>
        </Grommet>
    );
}
