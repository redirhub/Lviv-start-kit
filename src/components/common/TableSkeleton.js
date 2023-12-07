import {
    Tr,
    Td,
    Stack,
    Skeleton,
} from '@chakra-ui/react';

export const TableSkeleton = ({ rowCount, cellCount, width }) => {
    return (
        ([...new Array(rowCount ?? 0).keys()]?.map((item, index) =>
            <Tr key={item}>
                {[...new Array(cellCount ?? 0).keys()]?.map((item) => (
                    <Td
                        sx={{ pl: 2,  pr:4,  border: index===rowCount-1 ? 0 : 'auto', width: item ===0 ? width :'auto' }}
                        key={item}>
                        <Stack
                            spacing={1}
                            direction="row"
                            alignItems="center">
                            <Skeleton
                                height='20px'
                                width={'100%'}
                                sx={{ borderRadius:8 }}
                            />
                        </Stack>
                    </Td>
                ))
                }
            </Tr>
        )));
};
