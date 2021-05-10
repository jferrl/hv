import { Box, Button, Text } from 'grommet';
import { ReactElement } from 'react';

export const Booking = (): ReactElement => {
    return (
        <Box direction="row" width="xlarge" justify="center">
            <Button size="large">
                <Box round="xlarge" background="accent-1" pad={{ vertical: 'medium', horizontal: 'xlarge' }}>
                    <Text size="large" color="brand" weight="bold" textAlign="center">
                        Reservar
                    </Text>
                </Box>
            </Button>
        </Box>
    );
};
