import { Icon, useId } from '@chakra-ui/react';

export default function AliPayIcon({ width = '47px', height = '13px', size, ...props }) {

    const id = useId();

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 47 13" fill="none" {...props}>
            <path d="M9.79932 0.663818H1.86927C0.836542 0.663818 0 1.50808 0 2.54852V10.5458C0 11.5862 0.836542 12.4305 1.86927 12.4305H9.79932C10.8321 12.4305 11.6675 11.5862 11.6675 10.5458V2.54852C11.6686 1.50697 10.8321 0.663818 9.79932 0.663818Z" fill="#1677FF" />
            <path d="M9.60624 8.05273C9.14002 7.89512 8.51289 7.65374 7.81522 7.39914C8.23405 6.664 8.5691 5.82746 8.78953 4.91818H6.48932V4.08274H9.30645V3.61652H6.48932V2.22339H5.33977C5.13807 2.22339 5.13807 2.42398 5.13807 2.42398V3.61542H2.28898V4.08164H5.13807V4.91707H2.78495V5.38329H7.34791C7.18148 5.96303 6.95664 6.5086 6.69102 7.00347C5.21081 6.5108 3.63031 6.11182 2.63837 6.3576C2.00352 6.51521 1.59462 6.79626 1.35435 7.09164C0.252185 8.44399 1.04243 10.4984 3.3702 10.4984C4.7468 10.4984 6.0727 9.72471 7.09992 8.4495C8.63303 9.19236 11.6673 10.4687 11.6673 10.4687V8.65009C11.6684 8.65009 11.287 8.61924 9.60624 8.05273ZM3.15307 9.71258C1.33781 9.71258 0.801061 8.27095 1.69822 7.48181C1.99801 7.21508 2.54468 7.08503 2.83565 7.05637C3.91357 6.94946 4.91213 7.36387 6.09034 7.94361C5.26261 9.03255 4.20784 9.71258 3.15307 9.71258Z" fill="white" />
            <path d="M25.3354 2.38656C25.3354 2.99496 25.7807 3.40496 26.4012 3.40496C27.0218 3.40496 27.467 2.99496 27.467 2.38656C27.467 1.78919 27.0218 1.36816 26.4012 1.36816C25.7807 1.36816 25.3354 1.78919 25.3354 2.38656Z" fill="#1677FF" />
            <path d="M24.2112 1.625H22.3618V10.1712H24.2112V1.625Z" fill="black" />
            <path d="M19.119 1.91797H16.6369L13.8628 10.1721H15.5722L16.0407 8.55629H18.979L19.4243 10.1721H21.6132L19.119 1.91797ZM16.4264 7.20945L17.5264 3.40478H17.5727L18.6142 7.20945H16.4264Z" fill="black" />
            <path d="M27.326 3.89648H25.4766V10.1722H27.326V3.89648Z" fill="black" />
            <path d="M46.6556 3.90861L46.6666 3.89648H44.923L43.8219 7.71327H43.7635L42.4993 3.89648H40.4272L42.9203 10.1953L41.8788 12.1153V12.1616H43.5056L46.6556 3.90861Z" fill="black" />
            <path d="M31.9275 3.76758C31.2485 3.76758 30.7217 4.02548 30.1243 4.51705V3.89653H28.2749V12.1616H30.1243V10.1127C30.4759 10.2064 30.8033 10.2538 31.2011 10.2538C32.8522 10.2538 34.339 9.03591 34.339 6.87016C34.339 4.92705 33.2622 3.76758 31.9275 3.76758ZM30.7559 9.09433C30.5454 9.09433 30.3459 9.07119 30.1232 9.00065V5.60598C30.5101 5.33706 30.8253 5.20811 31.2232 5.20811C31.9142 5.20811 32.4642 5.75808 32.4642 6.92968C32.4653 8.42752 31.6574 9.09433 30.7559 9.09433Z" fill="black" />
            <path d="M40.0635 8.60276V5.98072C40.0635 4.55232 39.2204 3.76758 37.7336 3.76758C36.7846 3.76758 36.1299 3.9318 34.9352 4.29441L35.2625 5.73494C36.3514 5.24337 36.8309 5.03286 37.3346 5.03286C37.943 5.03286 38.213 5.46601 38.213 6.13392V6.18021C36.0935 6.57809 35.4378 6.80073 35.0289 7.21073C34.7247 7.51493 34.5957 7.94808 34.5957 8.45177C34.5957 9.65753 35.5325 10.3012 36.4099 10.3012C37.0657 10.3012 37.5925 10.0554 38.3067 9.51646L38.4356 10.1722H40.2851L40.0635 8.60276ZM38.2141 8.65016C37.7225 8.91908 37.4415 9.02489 37.1141 9.02489C36.6689 9.02489 36.3878 8.73172 36.3878 8.2644C36.3878 8.08916 36.4231 7.91281 36.5631 7.77284C36.7857 7.5502 37.2189 7.38598 38.2141 7.15232V8.65016Z" fill="black" />
        </Icon>
    );
}
