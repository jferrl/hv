import { Box } from 'grommet';
import { ReactElement } from 'react';

interface Props {
    children: ReactElement;
    width?: string;
    rest?: any;
}

export const Section = ({ children, width = 'xlarge', ...rest }: Props): ReactElement => (
    <Box align="center" pad="large" {...rest}>
        <Box width={width}>{children}</Box>
    </Box>
);
