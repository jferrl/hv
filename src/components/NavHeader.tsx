import { Anchor, Box, ResponsiveContext, Text } from 'grommet';
import { ReactElement } from 'react';

import { Logo } from './Logo';
import { SocialMedia } from './SocialMedia';

export const NavHeader = (): ReactElement => (
    <ResponsiveContext.Consumer>
        {(size: string): ReactElement => (
            <Box direction="row" justify="between" alignSelf="center" gap="medium" pad={{ top: 'large', horizontal: 'xlarge' }}>
                <Anchor
                    href="/"
                    icon={<Logo />}
                    color="black"
                    label={size !== 'xsmall' && size !== 'small' && <Text size="xxlarge">Hotel Villegas</Text>}
                />
                <SocialMedia />
            </Box>
        )}
    </ResponsiveContext.Consumer>
);
