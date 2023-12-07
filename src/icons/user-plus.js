import { Icon } from '@chakra-ui/react';
export default function UserPlusIcon({ width = '46px', height = '46px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 46 46" fill="none" {...props}>
            <rect x="3" y="3" width="40" height="40" rx="20" fill="#BBD3E9"/>
            <path d="M26.3335 30.5V28.8333C26.3335 27.9493 25.9823 27.1014 25.3572 26.4763C24.7321 25.8512 23.8842 25.5 23.0002 25.5H17.1668C16.2828 25.5 15.4349 25.8512 14.8098 26.4763C14.1847 27.1014 13.8335 27.9493 13.8335 28.8333V30.5M29.6668 19.6667V24.6667M32.1668 22.1667H27.1668M23.4168 18.8333C23.4168 20.6743 21.9244 22.1667 20.0835 22.1667C18.2425 22.1667 16.7502 20.6743 16.7502 18.8333C16.7502 16.9924 18.2425 15.5 20.0835 15.5C21.9244 15.5 23.4168 16.9924 23.4168 18.8333Z" stroke="#337CBD" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#D2E2F0" strokeWidth="6"/>
        </Icon>
    );
}
