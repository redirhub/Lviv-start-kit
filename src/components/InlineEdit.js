import { Box, Button, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import Edit2Icon from '@/icons/edit2';
import { whiteBoxShadow } from '@/common-styles';

export function InlineEdit({ boxProps = {}, children, title: Title }) {
    
    const { isOpen, onToggle, onClose } = useDisclosure();
    
    
    return (
        <Box position="relative" flexGrow="1" {...boxProps}>
            <Popover
                isOpen={ isOpen }
                onClose={ onClose }
                placement="bottom-start"
            >
                <PopoverTrigger>
                    <Box
                        top="-8px"
                        position="absolute"
                        left="0"
                    />
                </PopoverTrigger>
                
                <Box>
                    <Title>
                        <Button onClick={ onToggle } minWidth="0" width="auto" padding="0" variant="link">
                            <Edit2Icon color="gray.500" size="16px" />
                        </Button>
                    </Title>
                    <PopoverContent width="450px" maxWidth="calc(100vw - 40px)">
                        <Box {...whiteBoxShadow} width="100%">
                            { children( onClose ) }
                        </Box>
                    </PopoverContent>
                </Box>
            </Popover>
        </Box>
    );
}
