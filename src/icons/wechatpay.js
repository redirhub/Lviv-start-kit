import { Icon, useId } from '@chakra-ui/react';

export default function WeChatPayIcon({ width = '58px', height = '40px', size, ...props }) {

    const id = useId();

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 58 40" fill="none" {...props}>
            <rect width="58" height="40" rx="6" fill="white" />
            <path d="M25.317 23.093C25.2037 23.1533 25.0762 23.1882 24.9406 23.1882C24.6269 23.1882 24.3542 23.0063 24.211 22.737L24.1561 22.6106L21.8718 17.3279C21.8471 17.2705 21.8319 17.2055 21.8319 17.1422C21.8319 16.8988 22.0192 16.7016 22.2502 16.7016C22.3439 16.7016 22.4307 16.7343 22.5005 16.7889L25.1961 18.8116C25.393 18.9473 25.6284 19.0269 25.8813 19.0269C26.0323 19.0269 26.1762 18.9973 26.3105 18.9458L38.9873 12.9999C36.7149 10.1778 32.9727 8.33325 28.7378 8.33325C21.8078 8.33325 16.1904 13.2667 16.1904 19.3528C16.1904 22.6729 17.8805 25.6618 20.5259 27.682C20.7381 27.8417 20.8771 28.104 20.8771 28.4001C20.8771 28.498 20.8571 28.5874 20.8328 28.6808C20.6216 29.5113 20.2834 30.8414 20.2677 30.9037C20.2413 31.0079 20.2001 31.1169 20.2001 31.2259C20.2001 31.4694 20.3873 31.6666 20.6187 31.6666C20.7093 31.6666 20.7835 31.631 20.8601 31.5846L23.6071 29.9131C23.8137 29.7877 24.0324 29.7096 24.2735 29.7096C24.4017 29.7096 24.5256 29.7306 24.6421 29.7682C25.9236 30.1566 27.3062 30.3724 28.7379 30.3724C35.6675 30.3724 41.2857 25.4387 41.2857 19.3528C41.2857 17.5094 40.7673 15.7734 39.8563 14.2462L25.4089 23.0372L25.317 23.093Z" fill="#1AAD19" />
        </Icon>
    );
}
