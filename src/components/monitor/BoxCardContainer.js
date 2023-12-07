import BoxItem from './BoxItem';
import { Grid } from '@chakra-ui/react';
import EyeIcon from '@/icons/eye';
import CheckCircleIcon from '@/icons/check-circle';
import WarningRoundIcon from '@/icons/warning-round';
import AlertTriangleIcon from '@/icons/alert-triangle';

const listBox = [
    {
        title: 'Monitoring Projects',
        icon: <EyeIcon size='24px' color='#337CBD' />,
        count_number: 5,
        color: '#337CBD',
    },
    {
        title: 'Alarms',
        icon: <AlertTriangleIcon size='24px' color='#DC6803' />,
        count_number: 1,
        color: '#DC6803',
    },
    {
        title: 'Errors',
        icon: <WarningRoundIcon size='24px' color='#D92D20' />,
        count_number: 2,
        color: '#D92D20',
    },
    {
        title: 'Good',
        icon: <CheckCircleIcon size='24px' color='#12B76A' />,
        count_number: 13,
        color: '#12B76A',
    },
];

export default function BoxCardContainer() {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={5} >
            {
                listBox.map((item, index) => <BoxItem key={index} item={item} />)
            }
        </Grid>
    );
}

