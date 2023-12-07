import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
    baseStyle: {
        color: 'gray.700',
        fontWeight: 600,
        size: 'xl'
    },
    sizes: {
        xl: {
            fontSize: '30px',
            lineHeight: '38px'
        }
    }
});
