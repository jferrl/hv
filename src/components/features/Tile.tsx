import { Box, Paragraph } from 'grommet';
import { ReactElement } from 'react';

interface Props {
    children?: ReactElement;
    summary: string;
    direction?: any;
}

export const Tile = ({ children, summary }: Props): ReactElement => (
    <Box basis="large" align="center" margin="small">
        <Box height="xsmall" align="center" justify="center">
            {children}
        </Box>
        <Paragraph size="large" textAlign="center">
            {summary}
        </Paragraph>
    </Box>
);
