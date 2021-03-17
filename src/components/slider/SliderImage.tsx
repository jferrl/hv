import { Box, Image, ResponsiveContext, Stack } from 'grommet';
import { ReactElement } from 'react';

interface Props {
    src: string;
}

export const SliderImage = ({ src }: Props): ReactElement => (
    <ResponsiveContext.Consumer>
        {(size: string): ReactElement => (
            <Stack anchor="bottom">
                <Box round="xlarge" overflow="hidden" align="center" margin="small" height="large">
                    <Image src={src} />
                </Box>
            </Stack>
        )}
    </ResponsiveContext.Consumer>
);
