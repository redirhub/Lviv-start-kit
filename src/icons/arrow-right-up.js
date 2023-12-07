import { Icon } from '@chakra-ui/react';

export default function ArrowRightUpIcon({ width = '10px', height = '10px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 10 10" fill="none" {...props}>
            <path d="M9.00195 7.06055C9.00195 7.5 8.66211 7.8457 8.25195 7.8457C7.8418 7.8457 7.52539 7.5 7.52539 7.07227V4.96875L7.60742 3.08203L6.73438 4.06055L1.74219 9.04688C1.57812 9.21094 1.38477 9.29883 1.18555 9.29883C0.78125 9.29883 0.412109 8.92383 0.412109 8.53125C0.412109 8.33203 0.505859 8.13281 0.664062 7.96875L5.65039 2.98242L6.62891 2.11523L4.67773 2.18555H2.63867C2.21094 2.18555 1.87109 1.86328 1.87109 1.45898C1.87109 1.05469 2.19922 0.714844 2.65039 0.714844H8.19922C8.68555 0.714844 9.00195 1.03711 9.00195 1.51172V7.06055Z" fill="#667085" />
        </Icon>
    );
}
