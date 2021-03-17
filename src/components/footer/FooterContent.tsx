// tslint:disable: no-magic-numbers
import { Anchor, Box, ResponsiveContext, Text } from 'grommet';
import { ReactElement } from 'react';
import styled from 'styled-components';

import { data } from './data';

const StyledAnchor = styled(Anchor)`
    font-weight: 200;
`;

const getContent = (): ReactElement[] => {
    return data.map(
        (item: any, index: number): ReactElement => (
            <Box gap="medium" key={`${item}${index}`}>
                <Text weight="bold" size="small">
                    {item[0]}
                </Text>
                <StyledAnchor href="/" size="small" color="black">
                    {item[1]}
                </StyledAnchor>
                <StyledAnchor href="/" size="small" color="black">
                    {item[2]}
                </StyledAnchor>
                <StyledAnchor href="/" size="small" color="black">
                    {item[3]}
                </StyledAnchor>
            </Box>
        )
    );
};

export const FooterContent = (): ReactElement => (
    <ResponsiveContext.Consumer>
        {(size: string): ReactElement => (
            <Box direction="row" gap={size !== 'xsmall' && size !== 'small' ? 'xlarge' : 'small'}>
                {getContent()}
            </Box>
        )}
    </ResponsiveContext.Consumer>
);
