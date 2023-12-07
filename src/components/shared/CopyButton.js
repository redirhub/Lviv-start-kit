import { IconButton } from '@chakra-ui/react';
import { useState, useRef, useCallback } from 'react';
import ClipboardIcon from '@/icons/clipboard';
import CheckIcon from '@/icons/check';

export function CopyButton({ text, size = '20px', ...props }) {

    const [icon, setIcon] = useState(<ClipboardIcon size={size} />);
    const iconRef = useRef(null);

    const handleClick = useCallback(() => {
        navigator.clipboard.writeText(text);
        setIcon(<CheckIcon size="16px" />);
        iconRef.current.style.cursor = 'auto';

        setTimeout(() => {
            if (!iconRef.current) return;
            setIcon(<ClipboardIcon size={size} />);
            iconRef.current.style.cursor = 'pointer';
        }, 2000);
    }, [text]);

    return <IconButton onClick={handleClick} icon={icon} aria-label="Copy" ref={iconRef} {...props} />;
}
