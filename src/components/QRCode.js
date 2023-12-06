import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
//import { ensureHttp } from '@/utils';
import qrcode from 'qrcode';

export function QRCode({ host }) {
    // const _host = ensureHttp( host );
    return <Image src="/demo/qr-code.png" boxSize="120px" />;
}

export const QRCodeToImage = ({ qrCodeUrl }) => {
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState(null);

    useEffect(() => {
        const generateQrCode = async () => {
            try {
                const dataUrl = await qrcode.toDataURL(qrCodeUrl);
                if (dataUrl) {
                    setQrCodeDataUrl(dataUrl);
                }
            } catch (error) {
                console.error('Error generating QR code:', error);
            }
        };

        generateQrCode();
    }, [qrCodeUrl]);

    return <Image src={qrCodeDataUrl || '/demo/qr-code.png'} boxSize="120px" />;
};
