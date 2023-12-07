import RedirectsIcon from './redirects';
import UrlIcon from './url';
import MonitorIcon from './monitor';
import { PRODUCTS } from '@/config/subscriptions';

export default function ProductIcon({ product, ...props }) {

    const PRODUCT_ICONS = {
        [PRODUCTS.REDIRECT]: <RedirectsIcon {...props} />,
        [PRODUCTS.REDIRECTS]: <RedirectsIcon {...props} />,
        [PRODUCTS.LINK]: <UrlIcon {...props} />,
        [PRODUCTS.MONITOR]: <MonitorIcon {...props} />,
    };
    return PRODUCT_ICONS[product] || null;
}
