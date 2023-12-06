import { Icon, useId } from '@chakra-ui/react';

export default function ApplePayIcon({ width = '58px', height = '40px', size, ...props }) {

    const id = useId();

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 58 40" fill="none" {...props}>
            <rect width="58" height="40" rx="6" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0077 13.9053C15.5155 14.4918 14.7279 14.9544 13.9403 14.8883C13.8419 14.0953 14.2275 13.2528 14.6787 12.7324C15.1709 12.1293 16.0323 11.6998 16.7297 11.6667C16.8117 12.4928 16.4918 13.3023 16.0077 13.9053ZM16.7214 15.0453C16.0276 15.0051 15.3945 15.2554 14.8831 15.4576C14.554 15.5877 14.2753 15.6979 14.0633 15.6979C13.8254 15.6979 13.5352 15.5818 13.2094 15.4515C12.7825 15.2807 12.2944 15.0855 11.7826 15.0949C10.6094 15.1114 9.51827 15.7805 8.91938 16.8461C7.68877 18.9773 8.59942 22.1328 9.789 23.8675C10.3715 24.7266 11.0688 25.6683 11.9877 25.6352C12.3919 25.6199 12.6827 25.4956 12.9837 25.3671C13.3301 25.219 13.69 25.0653 14.252 25.0653C14.7945 25.0653 15.1387 25.215 15.4691 25.3588C15.7832 25.4955 16.0849 25.6268 16.5327 25.6187C17.4844 25.6022 18.0833 24.7596 18.6658 23.9005C19.2944 22.9785 19.5706 22.0787 19.6125 21.9421L19.6175 21.9263C19.6164 21.9253 19.6087 21.9217 19.595 21.9154C19.3848 21.8185 17.7787 21.0782 17.7633 19.0929C17.7479 17.4266 19.0373 16.5823 19.2402 16.4494C19.2526 16.4414 19.2609 16.4359 19.2647 16.4331C18.4443 15.2105 17.1644 15.0783 16.7214 15.0453ZM23.3093 25.5279V12.6497H28.1087C30.5863 12.6497 32.3174 14.3679 32.3174 16.8791C32.3174 19.3903 30.5535 21.125 28.0431 21.125H25.2947V25.5279H23.3093ZM25.2946 14.3349H27.5835C29.3063 14.3349 30.2908 15.2601 30.2908 16.8874C30.2908 18.5147 29.3063 19.4481 27.5753 19.4481H25.2946V14.3349ZM38.8725 23.9832C38.3475 24.9909 37.1907 25.627 35.9437 25.627C34.0978 25.627 32.8097 24.5201 32.8097 22.8515C32.8097 21.1994 34.0567 20.2494 36.3621 20.109L38.8397 19.9603V19.2499C38.8397 18.2008 38.1588 17.6308 36.9446 17.6308C35.9437 17.6308 35.2135 18.1512 35.0658 18.9443H33.2773C33.3348 17.2756 34.8935 16.0613 37.002 16.0613C39.2745 16.0613 40.7512 17.2591 40.7512 19.1177V25.5279H38.9135V23.9832H38.8725ZM36.4768 24.0988C35.4185 24.0988 34.7457 23.5866 34.7457 22.8019C34.7457 21.9924 35.3939 21.5215 36.6327 21.4472L38.8396 21.3067V22.0337C38.8396 23.2397 37.8223 24.0988 36.4768 24.0988ZM46.8468 26.0318C46.051 28.2869 45.1403 29.0303 43.2042 29.0303C43.0565 29.0303 42.5643 29.0138 42.4494 28.9808V27.4361C42.5725 27.4526 42.876 27.4691 43.0319 27.4691C43.9097 27.4691 44.402 27.0974 44.7055 26.1309L44.886 25.5609L41.5223 16.1853H43.598L45.9361 23.7932H45.9771L48.3153 16.1853H50.3335L46.8468 26.0318Z" fill="black" />
        </Icon>
    );
}
