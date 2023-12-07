import { createMultiStyleConfigHelpers, defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';
import Heading from '@/config/theme/heading';
import Button from '@/config/theme/button';
import Checkbox from '@/config/theme/checkbox';
import Progress from '@/config/theme/progress';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const colors = {
    primary: {
        25: '#E8F0F8',
        50: '#D2E2F0',
        100: '#BBD3E9',
        200: '#8EB6DB',
        300: '#6099CC',
        500: '#337CBD',
        600: '#1C6DB6', // primary
        700: '#1962A4', // primary text
        800: '#165792',
        900: '#135280',
    },
    blue_gray: {
        50: '#F8F9FC',
        700: '#363F72',
    },
    gray: {
        50: '#F9FAFB',
        100: '#F2F4F7',
        200: '#EAECF0',
        300: '#D0D5DD',
        400: '#98A2B3',
        500: '#667085', // text
        600: '#475467', // icon
        700: '#344054', // heading
        800: '#1D2939', // heading
        900: '#101828', // heading
    },
    warning: {
        25: '#FFFCF5',
        50: '#FFFAEB',
        500: '#F79009',
        600: '#DC7808',
        700: '#C86407',
    },
    success: {
        25: '#F6FEF9',
        50: '#ECFDF3',
        100: '#D1FADF',
        300: '#6CE9A6',
        500: '#12B76A',
        600: '#039855',
        700: '#027A48',
    },
    orange: {
        50: '#FFF6ED',
        500: '#FB6514',
        700: '#C4320A',
    },
    error: {
        50: '#FEF3F2',
        100: '#ffcdd2',
        500: '#F04438',
        600: '#D92D20',
        700: '#B42318',
        800: '#8C160E',
    },
    info: {
        600: '#06AED4',
        700: '#0E7090',
        800: '#164C63',
    },
    indigo: {
        600: '#6366F1',
        700: '#4338CA',
        800: '#312E81',
    },
    blue: {
        600: '#2970FF',
        700: '#004EEB',
        800: '#00359E',
    },
    purple: {
        600: '#9E77ED',
        700: '#6941C6',
        800: '#42307D',
    },
};

const fonts = {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
};

const fontSizes = {};

const borderRadius = {
    radii: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
    },
};

export default extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: 'gray.100',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
            },
        }),
    },
    colors,
    fonts,
    fontSizes,
    components: {
        Heading,
        Button,
        Checkbox,
        Progress,
        FormLabel: defineStyleConfig({
            baseStyle: {
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '500',
                color: 'gray.700',
                mb: '6px'
            }
        }),
        Select: defineMultiStyleConfig({
            baseStyle: definePartsStyle({
                field: defineStyle({
                    height: '44px',
                    fontSize: '16px',
                    borderWidth: '1px',
                    borderColor: 'gray.300',
                    px: '14px',
                    borderRadius: 8
                })
            }),
            variants: definePartsStyle({
                outline: {}
            })
        }),
        Input: defineMultiStyleConfig({
            baseStyle: definePartsStyle({
                field: defineStyle({
                    height: '44px',
                    fontSize: '16px',
                    borderWidth: '1px',
                    borderColor: 'gray.300',
                    px: '14px',
                    borderRadius: 8
                })
            }),
        }),
        Tooltip: defineStyleConfig({
            baseStyle: {
                fontSize: '12px',
                lineHeight: '18px',
                py: 2,
                px: 3,
                borderRadius: 8,
                bg: 'gray.900',
                color: 'white'
            }
        }),
        Menu: defineStyleConfig({
            baseStyle: definePartsStyle({
                list: {
                    boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                    borderRadius: 8
                }
            })
        })
    },
});
