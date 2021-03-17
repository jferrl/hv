// tslint:disable: no-magic-numbers

import { Box } from 'grommet';
import { ReactElement } from 'react';

import { data } from './data';
import { Tile } from './Tile';

export const Features = (): ReactElement => (
    <Box direction="row-responsive" justify="center" align="center">
        <Tile direction="row" summary={data[0]} />
        <Tile direction="row" summary={data[1]} />
        <Tile direction="row" summary={data[2]} />
    </Box>
);
