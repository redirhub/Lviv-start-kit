import { Box } from '@chakra-ui/react';

export default function ItemTag({ title, icon, bg, color }) {
    return (
        <Box display='flex' alignItems='center' py='2' px='3' borderRadius='999' bg={bg} color={color} fontWeight='500' gap='2' >
            {icon}
            {title}
        </Box>
    );
}

