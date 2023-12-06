import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
    sizes: {
        lg: defineStyle({
            h: 12,
            fontSize: '1rem',
            px: 5,
            borderRadius: '8px',
        }),
        md: defineStyle({
            h: 10,
            fontSize: '14px',
            px: 4,
            lineHeight: 5,
            borderRadius: '8px',
        }),
        sm: defineStyle({
            h: 9,
            fontSize: '14px',
            px: '14px',
            lineHeight: '36px'
        }),
        sm2: defineStyle({
            h: 8,
            fontWeight: '500',
            fontSize: '14px',
            px: '14px',
            lineHeight: '32px'
        }),
    },
    variants: {
        solid: defineStyle(p => {
            if ( p.colorScheme === 'gray') {
                return {
                    backgroundColor: 'white',
                    borderWidth: '1px',
                    borderColor: 'gray.300',
                    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
                    _hover: {
                        backgroundColor: 'primary.50',
                        borderColor: 'primary.50',
                        color: 'primary.700'
                    }
                };
            }
            
            if ( p.colorScheme === 'error') {
                return {
                    borderWidth: '1px solid',
                    backgroundColor: 'error.50',
                    color: 'error.600',
                    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
                    _hover: {
                        backgroundColor: 'error.100',
                        color: 'error.600',
                    }
                };
            }
            
            return {};
        }),
        outline: defineStyle(p => {
            if ( p.colorScheme === 'primary') {
                return {
                    backgroundColor: 'white',
                    borderWidth: '1px',
                    borderColor: 'gray.300',
                    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
                    _active: {
                        backgroundColor: 'gray.100',
                    },
                    _hover: {
                        backgroundColor: 'primary.50',
                        borderColor: 'primary.50'
                    }
                };
            }
            return {};
        }),
    }
});
