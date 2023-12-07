import { defineStyle, createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);

export default defineMultiStyleConfig({
    baseStyle: {
        size: 'md',
        colorScheme: 'primary',
        control: {
            borderColor: 'gray.400',
            _hover: {
                borderColor: 'primary.600',
            },
            _checked: {
                borderColor: 'primary.600',
                bg: 'primary.50',
                color: 'primary.600',
                _hover: {
                    bg: 'primary.50',
                    color: 'primary.600',
                }
            }
        },
        label: {
            fontWeight: '500',
            color: 'gray.700'
        }
    },
    sizes: {
        md: definePartsStyle({
            control: defineStyle({
                w: '20px',
                h: '20px',
                borderRadius: '6px',
                borderWidth: '1px'
            }),
            label: defineStyle({
                ml: '12px'
            })
        }),
    }
});
