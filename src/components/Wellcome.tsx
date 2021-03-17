import { Box, Heading, Paragraph } from 'grommet';
import { Fragment, ReactElement } from 'react';

interface Props {
    size: string;
    rest?: any;
}

export const Wellcome = ({ size, ...rest }: Props): ReactElement => (
    <Fragment>
        <Box direction="row" {...rest}>
            <Heading size={size}>Bienvenido</Heading>
        </Box>
        <Paragraph margin={{ top: 'none' }} textAlign="center" size="xxlarge">
            En el centro histórico de <b>Valencia de Don Juan</b> se erige uno de los edificios más emblemáticos de la ciudad coyantina, un centenario
            chalet magníficamente recuperado y ampliado para su uso hotelero <b>“El hotel Villegas”</b>.
        </Paragraph>
    </Fragment>
);
