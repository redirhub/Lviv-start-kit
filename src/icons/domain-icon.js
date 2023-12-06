import { Icon } from '@chakra-ui/react';

export default function HTTPDomainIcon({ width = '24px', height = '24px', size, ...props }) {
    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_568_437)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.28983 2.1081C3.96091 2.70556 3.70594 3.34094 3.53061 4H5.09492C5.30594 3.35959 5.61037 2.7515 6 2.1962C6.38963 2.7515 6.69405 3.35959 6.90508 4H8.46939C8.29406 3.34094 8.03909 2.70556 7.71017 2.1081C8.58385 2.49256 9.30352 3.1626 9.75095 4H11.3926C10.5802 1.81035 8.47233 0.25 6 0.25C3.52767 0.25 1.41977 1.81035 0.60737 4H2.24905C2.69649 3.1626 3.41615 2.49256 4.28983 2.1081ZM11.75 6C11.75 6.5853 11.6625 7.15018 11.5 7.68227V4.31773C11.6625 4.84982 11.75 5.4147 11.75 6ZM9.75095 8H11.3926C10.5802 10.1896 8.47233 11.75 6 11.75C3.52767 11.75 1.41977 10.1896 0.60737 8H2.24905C2.69649 8.8374 3.41615 9.50744 4.28983 9.8919C3.96091 9.29444 3.70594 8.65906 3.53061 8H5.09492C5.30594 8.64041 5.61037 9.2485 6 9.8038C6.38963 9.2485 6.69405 8.64041 6.90508 8H8.46939C8.29406 8.65906 8.03909 9.29444 7.71017 9.8919C8.58385 9.50744 9.30352 8.8374 9.75095 8ZM0.5 4.31773V7.68227C0.337451 7.15018 0.25 6.5853 0.25 6C0.25 5.4147 0.337451 4.84982 0.5 4.31773ZM3.06796 6.77576C3.06796 6.99646 2.95664 7.11951 2.75546 7.11951C2.55234 7.11951 2.44101 6.99646 2.44101 6.77576V5.88708C2.44101 5.64294 2.31992 5.50232 2.11093 5.50232C1.89023 5.50232 1.74375 5.67615 1.74375 5.94568V6.77576C1.74375 6.99646 1.63046 7.11951 1.43125 7.11951C1.22812 7.11951 1.11679 6.99646 1.11679 6.77576V4.62146C1.11679 4.3988 1.23007 4.27576 1.43125 4.27576C1.63242 4.27576 1.74375 4.3988 1.74375 4.62146V5.37537H1.775C1.84531 5.14294 2.09335 4.98279 2.38046 4.98279C2.81406 4.98279 3.06796 5.25623 3.06796 5.72302V6.77576ZM3.65976 6.53943V5.51599H3.58359C3.41757 5.51599 3.32382 5.4281 3.32382 5.27771C3.32382 5.12732 3.41757 5.03943 3.58359 5.03943H3.67539V4.81287C3.67539 4.59802 3.78476 4.47888 3.97812 4.47888C4.17343 4.47888 4.28085 4.59802 4.28085 4.81287V5.03943H4.44492C4.61093 5.03943 4.70468 5.12732 4.70468 5.27771C4.70468 5.4281 4.61093 5.51599 4.44492 5.51599H4.28867V6.44373C4.28867 6.61169 4.33554 6.67419 4.46835 6.67419C4.4957 6.67419 4.51767 6.67175 4.53964 6.66931C4.56162 6.66687 4.58359 6.66443 4.61093 6.66443C4.70859 6.66443 4.77695 6.73279 4.77695 6.84216C4.77695 6.93201 4.73593 7.00623 4.65781 7.05896C4.57382 7.11755 4.45078 7.1488 4.29257 7.1488C3.85898 7.1488 3.65976 6.9613 3.65976 6.53943ZM5.25351 5.51599V6.53943C5.25351 6.9613 5.45273 7.1488 5.88632 7.1488C6.04453 7.1488 6.16757 7.11755 6.25156 7.05896C6.32968 7.00623 6.3707 6.93201 6.3707 6.84216C6.3707 6.73279 6.30234 6.66443 6.20468 6.66443C6.17734 6.66443 6.15537 6.66687 6.13339 6.66931C6.11142 6.67175 6.08945 6.67419 6.0621 6.67419C5.92929 6.67419 5.88242 6.61169 5.88242 6.44373V5.51599H6.03867C6.20468 5.51599 6.29843 5.4281 6.29843 5.27771C6.29843 5.12732 6.20468 5.03943 6.03867 5.03943H5.8746V4.81287C5.8746 4.59802 5.76718 4.47888 5.57187 4.47888C5.37851 4.47888 5.26914 4.59802 5.26914 4.81287V5.03943H5.17734C5.01132 5.03943 4.91757 5.12732 4.91757 5.27771C4.91757 5.4281 5.01132 5.51599 5.17734 5.51599H5.25351ZM7.30039 7.48474C7.30039 7.7074 7.18906 7.82849 6.98789 7.82849C6.78476 7.82849 6.67539 7.7074 6.67539 7.48474V5.34021C6.67539 5.11951 6.78476 4.99646 6.98398 4.99646C7.16953 4.99646 7.28085 5.09802 7.29648 5.28552V5.34412H7.32773C7.41171 5.12341 7.63437 4.98279 7.92343 4.98279C8.4039 4.98279 8.6871 5.3324 8.6871 5.93005V6.17029C8.6871 6.7699 8.40195 7.12341 7.91953 7.12341C7.63632 7.12341 7.42148 6.99646 7.33164 6.7738H7.30039V7.48474ZM7.30039 6.16833C7.30039 6.45544 7.44882 6.63708 7.67539 6.63708C7.90585 6.63708 8.04062 6.45154 8.04062 6.13513V5.97107C8.04062 5.65076 7.90585 5.46912 7.67148 5.46912C7.44101 5.46912 7.30039 5.64685 7.30039 5.95154V6.16833ZM9.20859 6.46912C9.07187 6.46912 8.98007 6.55701 8.98007 6.68591C8.98007 6.82263 9.06992 6.94177 9.23398 7.02576C9.39023 7.10583 9.60117 7.15076 9.83749 7.15076C10.4176 7.15076 10.7613 6.88708 10.7613 6.45935C10.7613 6.13904 10.5836 5.94568 10.2066 5.86755L9.83945 5.79333C9.67734 5.75818 9.60703 5.70154 9.60703 5.60193C9.60703 5.48669 9.70468 5.40466 9.86874 5.40466C9.97617 5.40466 10.0738 5.43396 10.2301 5.52576C10.3355 5.58435 10.4019 5.60388 10.4644 5.60388C10.5992 5.60388 10.693 5.52576 10.693 5.39685C10.693 5.26599 10.5992 5.15076 10.4312 5.07263C10.2828 5.00037 10.0973 4.96326 9.90195 4.96326C9.35898 4.96326 9.00742 5.23279 9.00742 5.63904C9.00742 5.9574 9.19101 6.15076 9.59335 6.23474L9.88437 6.29724C10.0758 6.34021 10.1617 6.41248 10.1617 6.51599C10.1617 6.63318 10.0523 6.70349 9.87265 6.70349C9.72812 6.70349 9.60703 6.66052 9.44101 6.55701C9.33749 6.49451 9.28085 6.46912 9.20859 6.46912Z"
                        fill="#B54708"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_568_437">
                        <rect width="12" height="12" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </Icon>
    );
}
