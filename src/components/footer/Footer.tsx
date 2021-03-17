import { Box, ResponsiveContext, Text } from 'grommet';
import { ReactElement } from 'react';

import { Logo, SocialMedia } from '../index';

import { FooterContent } from './FooterContent';

interface Props {
    rest?: any;
}

export const Footer = ({ ...rest }: Props): ReactElement => (
    <ResponsiveContext.Consumer>
        {(size: string): ReactElement => (
            <Box direction="row" justify="between" border={{ side: 'top', color: 'light-4' }} pad={{ top: 'xlarge' }} {...rest}>
                <Box gap="large" align="start">
                    <Box
                        gap="small"
                        direction="row-responsive"
                        align="center"
                        pad={{ horizontal: 'small' }} // align with margin of icons from SocialMedia
                    >
                        <Logo />
                        {size !== 'small' && size !== 'xsmall' && (
                            <Text weight="bold" size="large">
                                Hotel Villegas
                            </Text>
                        )}
                    </Box>
                    <SocialMedia />
                </Box>
                <FooterContent />
            </Box>
        )}
    </ResponsiveContext.Consumer>
);
