import { Flex, Stack, Text } from '@chakra-ui/react';
import TagIcon from '@/icons/tag';
import useAppResponsive from '@/hooks/useAppResponsive';

export function SharedListTags({ data }) {
    
    const { isMobile } = useAppResponsive();
    
    function processTag( tag ) {
        
        const isStr = typeof tag === 'string';
        
        return {
            key: isStr ? tag : tag?.id || '',
            text: isStr ? tag : tag?.name || ''
        };
    }
    
    return (
        <>
            {
                !! data?.tags?.length && (
                    <Stack flexWrap="wrap" mt={4} direction="row" spacing={2}>
                        <Flex height="24px" alignItems="center" color="gray.700">
                            <TagIcon size="20px" />
                        </Flex>
                        
                        {
                            data.tags.map( tag => (
                                <Text
                                    fontSize={ isMobile ? '12px' : '14px' }
                                    key={ processTag(tag).key }
                                    fontWeight="500"
                                    borderRadius="16px"
                                    lineHeight="24px"
                                    px="10px"
                                    background="orange.50"
                                    color="orange.700"
                                >
                                    { processTag(tag).text }
                                </Text>
                            ))
                        }
                    </Stack>
                )
            }
        </>
    );
}
