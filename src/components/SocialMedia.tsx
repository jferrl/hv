import { Anchor, Box } from 'grommet';
import { FacebookOption, Instagram } from 'grommet-icons';
import { ReactElement } from 'react';

export const SocialMedia = (): ReactElement => (
    <Box direction="row" gap="xxsmall" justify="center">
        <Anchor
            target="_blank"
            a11yTitle="Share feedback on Github"
            href="https://www.instagram.com/"
            icon={<Instagram color="brand" size="medium" />}
        />
        <Anchor
            target="_blank"
            a11yTitle="Chat with us on Slack"
            href="https://www.facebook.com/"
            icon={<FacebookOption color="brand" size="medium" />}
        />
    </Box>
);
