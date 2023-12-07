import { useTranslation } from 'react-i18next';
import { Box, Grid, GridItem, Flex } from '@chakra-ui/react';
import { Text16W500 } from '@/components/elements/Text16';
import { Text36W600 } from '@/components/elements/Text36';
import WarningIcon from '@/icons/warning';
import EyeIcon from '@/icons/eye';
import WarningRoundIcon from '@/icons/warning-round';
import CheckCircleIcon from '@/icons/check-circle';

// TODO: receive Stats data from the store/parent component
export default function MonitorStats() {
    const { t } = useTranslation();

    return (
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(4, 1fr)',
            }}
            gap={8}
        >
            <GridItem>
                <Box
                    display='flex'
                    flexDirection='column'
                    gap={2}
                    bg='white'
                    p={4}
                    borderRadius={8}
                >
                    <Flex gap={2}>
                        <EyeIcon size='24px' color='primary.500' />
                        <Text16W500 color='gray.500'>
                                    Monitoring projects
                        </Text16W500>
                    </Flex>
                    <Text36W600 align='center'>5</Text36W600>
                </Box>
            </GridItem>
            <GridItem>
                <Box
                    display='flex'
                    flexDirection='column'
                    gap={2}
                    bg='white'
                    p={4}
                    borderRadius={8}
                >
                    <Flex gap={2}>
                        <WarningIcon />
                        <Text16W500 color='warning.500'>
                                    Alarms
                        </Text16W500>
                    </Flex>
                    <Text36W600 align='center'>1</Text36W600>
                </Box>
            </GridItem>
            <GridItem>
                <Box
                    display='flex'
                    flexDirection='column'
                    gap={2}
                    bg='white'
                    p={4}
                    borderRadius={8}
                >
                    <Flex gap={2}>
                        <WarningRoundIcon color='error.600' />
                        <Text16W500 color='red.500'>
                                    Errors
                        </Text16W500>
                    </Flex>
                    <Text36W600 align='center'>2</Text36W600>
                </Box>
            </GridItem>
            <GridItem>
                <Box
                    display='flex'
                    flexDirection='column'
                    gap={2}
                    bg='white'
                    p={4}
                    borderRadius={8}
                >
                    <Flex gap={2}>
                        <CheckCircleIcon color='success.500' />
                        <Text16W500 color='success.500'>
                                    Good
                        </Text16W500>
                    </Flex>
                    <Text36W600 align='center'>13</Text36W600>
                </Box>
            </GridItem>
        </Grid>
    );
}
