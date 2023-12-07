import { SkeletonText, Box, Stack, SkeletonCircle } from '@chakra-ui/react';
import { whiteBoxShadow } from '@/common-styles';

const PreviewSkeleton = (
    {
        ...rootProps
    }
) => {
    return (
        <Stack flexDirection='column' gap='32px' {...rootProps}>
            <Box
                p={10}
                minH={'30vh'}
                {...whiteBoxShadow}>
                <SkeletonCircle size='16' />
                <SkeletonText mt='5' noOfLines={1} spacing='4' skeletonHeight='8' maxW={300} />
                <SkeletonText mt='10' noOfLines={3} spacing='4' skeletonHeight='6' maxW={520} />
            </Box>
        </Stack >
    );
};

export default PreviewSkeleton;
