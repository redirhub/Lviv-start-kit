import { Icon } from '@chakra-ui/react';

export default function LockIcon({ width = '20px', height = '20px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M5.83333 9.16602V5.83268C5.83333 4.72761 6.27232 3.66781 7.05372 2.8864C7.83512 2.105 8.89493 1.66602 10 1.66602C11.1051 1.66602 12.1649 2.105 12.9463 2.8864C13.7277 3.66781 14.1667 4.72761 14.1667 5.83268V9.16602M4.16667 9.16602H15.8333C16.7538 9.16602 17.5 9.91221 17.5 10.8327V16.666C17.5 17.5865 16.7538 18.3327 15.8333 18.3327H4.16667C3.24619 18.3327 2.5 17.5865 2.5 16.666V10.8327C2.5 9.91221 3.24619 9.16602 4.16667 9.16602Z" stroke="#026AA2" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}
