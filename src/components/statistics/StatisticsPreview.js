import { Box, Stack, Grid, GridItem } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { isEqual } from 'lodash';
import { useTranslation } from 'react-i18next';
import PreviewStatistics from '@/components/statistics/StatisticPanel';
import Breakdown from '@/components/statistics/Breakdown';
import { LAYOUT_STD_WIDTH } from '@/config/constant';

export function _StatisticsPreview({ rootProps = {}, files, product }) {
    const { t } = useTranslation();
    const fileList = files?.split(',');
    const [isVisible, setIsVisible] = useState(false);
    const hasStatistics = () => setIsVisible(true);

    return (
        <Stack flexDirection="column" gap="32px" {...rootProps}>
            <PreviewStatistics
                files={fileList}
                product={product}
                hasStatistics={hasStatistics}
            />
            {isVisible && (
                <>
                    <Box maxWidth={LAYOUT_STD_WIDTH} width="100%" mx="auto">
                        <Grid
                            templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
                            gap={6}
                        >
                            <GridItem>
                                <Breakdown
                                    title={t('statistics.location', 'Location')}
                                    dount
                                    files={fileList}
                                    product={product}
                                    tabs={[
                                        { label: t('statistics.country', 'Country'), value: 'country' },
                                        { label: t('statistics.city', 'City'), value: 'region' },
                                    ]}
                                />
                            </GridItem>
                            <GridItem>
                                <Breakdown
                                    title={t('statistics.technology', 'Technology')}
                                    dount
                                    files={fileList}
                                    tabs={[
                                        { label: t('statistics.browser', 'Browser'), value: 'browser' },
                                        { label: t('statistics.device', 'Device'), value: 'device' },
                                    ]}
                                />
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box maxWidth={LAYOUT_STD_WIDTH} width="100%" mx="auto">
                        <Grid
                            templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
                            gap={6}
                        >
                            <GridItem>
                                <Breakdown
                                    title={t('statistics.domain', 'Domain')}
                                    table
                                    files={fileList}
                                    product={product}
                                    tabs={[
                                        { label: t('statistics.domain', 'Domain'), value: 'domain' },
                                        { label: t('statistics.url', 'URL'), value: 'url' },
                                        { label: t('statistics.rule', 'Rule'), value: 'rule' },
                                    ]}
                                />
                            </GridItem>
                            <GridItem>
                                <Breakdown
                                    title={t('statistics.referrer', 'Referrer')}
                                    table
                                    files={fileList}
                                    product={product}
                                    field="referrer"
                                />
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box maxWidth={LAYOUT_STD_WIDTH} width="100%" mx="auto">
                        <Grid
                            templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
                            gap={6}
                        >
                            <GridItem>
                                <Breakdown
                                    dount
                                    title={t('statistics.proto', 'Protocol')}
                                    files={fileList}
                                    product={product}
                                    field="proto"
                                />
                            </GridItem>
                        </Grid>
                    </Box>
                </>
            )}
        </Stack>
    );
}

export const StatisticsPreview = memo(_StatisticsPreview, isEqual);
