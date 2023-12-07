import { Icon } from '@chakra-ui/react';

export default function BitbucketIcon({ width = '20px', height = '20px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M0.817939 0.875048C0.652297 0.872842 0.494188 0.946386 0.386025 1.07595C0.277862 1.20552 0.230717 1.37784 0.257235 1.5467L2.63742 16.4678C2.69864 16.8447 3.01308 17.1218 3.38316 17.1249H14.8019C15.0796 17.1286 15.3182 16.9217 15.3626 16.6386L17.7428 1.54959C17.7693 1.38074 17.7221 1.20841 17.614 1.07885C17.5058 0.949281 17.3477 0.875737 17.1821 0.877943L0.817939 0.875048ZM10.8405 11.6591H7.19594L6.2091 6.33511H11.7236L10.8405 11.6591Z" fill="#2684FF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9859 6.33594H11.7237L10.8405 11.6599H7.19598L2.89258 16.9347C3.02898 17.0565 3.20288 17.1242 3.38319 17.1258H14.8047C15.0825 17.1295 15.321 16.9226 15.3654 16.6394L16.9859 6.33594Z" fill="url(#paint0_linear_1414_7515)" />
            <defs>
                <linearGradient id="paint0_linear_1414_7515" x1="18.2026" y1="7.82689" x2="11.86" y2="16.5478" gradientUnits="userSpaceOnUse">
                    <stop offset="0.18" stop-color="#0052CC" />
                    <stop offset="1" stop-color="#2684FF" />
                </linearGradient>
            </defs>
        </Icon>
    );
}
