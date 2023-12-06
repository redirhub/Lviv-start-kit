import { Icon } from '@chakra-ui/react';

export default function AlertCircleIcon({ width = '56px', height = '56px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 56 56" fill="none" {...props}>
            <rect x="4" y="4" width="48" height="48" rx="24" fill="#FEE4E2" />
            <path d="M28 24V28M28 32H28.01M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z" stroke="#D92D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="4" y="4" width="48" height="48" rx="24" stroke="#FEF3F2" strokeWidth="8" />
        </Icon>
    );
}
