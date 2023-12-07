import { progressAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);


export default defineMultiStyleConfig({
    baseStyle: {
        size: 'md'
    },
    sizes: {
        md: definePartsStyle({
            track: {
                height: '8px',
                borderRadius: '4px'
            },
            filledTrack: {
                height: '8px',
                borderRadius: '4px'
            }
        })
    }
});
