import { Box, Button, Grommet, Heading } from 'grommet';
import { Notification } from 'grommet-icons';
import { ReactElement } from 'react';

const theme = {
    global: {
        colors: {
            brand: '#fff'
        },
        font: {
            family: 'Roboto',
            height: '20px',
            size: '18px'
        }
    }
};

const AppBar = (props: any): ReactElement => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="medium"
        style={{ zIndex: '1' }}
        {...props}
    />
);

export default function App(): ReactElement {
    return (
        <Grommet full={true} theme={theme}>
            <Box fill>
                <AppBar>
                    <Heading level="3" margin="none">
                        Hotel Villegas
                    </Heading>
                    <Button icon={<Notification />} onClick={() => {}} />
                </AppBar>
                <Box direction="row" flex={true} overflow={{ horizontal: 'hidden' }}>
                    <Box flex={true} align="center" justify="center">
                        app body
                    </Box>
                    <Box width="medium" background="light-2" elevation="small" align="center" justify="center">
                        sidebar
                    </Box>
                </Box>
            </Box>
        </Grommet>
    );
}
