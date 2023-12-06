import AlertTriangleIcon from '@/icons/alert-triangle';
import CheckCircleIcon from '@/icons/check-circle';
import DeleteIcon from '@/icons/delete';
import ProvisioningIcon from '@/icons/provisioning';
import ShuffleIcon from '@/icons/shuffle';
import ToolIcon from '@/icons/tool';
import UrlIcon from '@/icons/url';

export const ACTIONS_MENU = {
    DELETE: 'delete',
    REDIRECTS: 'redirects',
    SETTINGS: 'settings',
    SHORT_URL: 'links',
};

export const ACTIONS_LABELS = {
    [ACTIONS_MENU.DELETE]: 'Delete',
    [ACTIONS_MENU.REDIRECTS]: 'View redirects',
    [ACTIONS_MENU.SETTINGS]: 'DNS settings',
    [ACTIONS_MENU.SHORT_URL]: 'View short links',
};

export const ACTIONS_ICONS = {
    [ACTIONS_MENU.DELETE]: <DeleteIcon size="16px" strokeWidth="1" />,
    [ACTIONS_MENU.REDIRECTS]: <ShuffleIcon size="16px" strokeWidth="1" />,
    [ACTIONS_MENU.SETTINGS]: <ToolIcon size="16px" strokeWidth="1" />,
    [ACTIONS_MENU.SHORT_URL]: <UrlIcon size="16px" strokeWidth="1" />,
};

export const STATUSES = {
    ERROR: 'error',
    PROVISIONING: 'provisioning',
    SUCCESS: 'success',
};

export const SSLStatuses = {
    [STATUSES.ERROR]: {
        key: STATUSES.ERROR,
        icon: <AlertTriangleIcon color="error.500" />,
        tooltip: 'SSL is not requested. Please configure the SSL for the hostname',
        text: 'Error Occurred',
        colorScheme: 'Danger',
    },
    [STATUSES.PROVISIONING]: {
        key: STATUSES.PROVISIONING,
        icon: <ProvisioningIcon color="warning.500" />,
        tooltip: 'SSL is provisioning',
        text: 'Provisioning',
        colorScheme: 'Warning',
    },
    [STATUSES.SUCCESS]: {
        key: STATUSES.SUCCESS,
        icon: <CheckCircleIcon color="success.500" />,
        tooltip: 'Host is secured',
        text: 'Secured',
        colorScheme: 'Success',
    },
};

export const DNSStatuses = {
    [STATUSES.ERROR]: {
        key: STATUSES.ERROR,
        icon: <AlertTriangleIcon color="warning.500" />,
        tooltip: 'DNS is not configured. Please configure the DNS for this hostname',
        text: 'DNS unverified',
        colorScheme: 'Warning',
    },
    [STATUSES.SUCCESS]: {
        key: STATUSES.SUCCESS,
        icon: <CheckCircleIcon color="success.500" />,
        tooltip: 'DNS is correct. Hostname is set up correctly',
        text: 'DNS verified',
        colorScheme: 'Success',
    },
};

export const FILTERS_OPTIONS = {
    ACTIVE: 'active',
    DNS_ERROR: 'dns_error',
    SHORT_URL: 'link',
    // SSL_ERROR: 'ssl_error',
};

export const INITIALIZE_FILTERS = {
    [FILTERS_OPTIONS.ACTIVE]: false,
    [FILTERS_OPTIONS.DNS_ERROR]: false,
    [FILTERS_OPTIONS.SHORT_URL]: false,
    [FILTERS_OPTIONS.SSL_ERROR]: false,
};

export const FILTERS_BADGES = {
    [FILTERS_OPTIONS.ACTIVE]: 'Active',
    [FILTERS_OPTIONS.DNS_ERROR]: 'DNS error',
    [FILTERS_OPTIONS.SHORT_URL]: 'Short links',
    [FILTERS_OPTIONS.SSL_ERROR]: 'SSL error',
};

export const FILTERS_LABELS = {
    [FILTERS_OPTIONS.ACTIVE]: 'Active only',
    [FILTERS_OPTIONS.DNS_ERROR]: 'Show with DNS error',
    [FILTERS_OPTIONS.SHORT_URL]: 'Short links domain only',
    [FILTERS_OPTIONS.SSL_ERROR]: 'Show with SSL error',
};

export const DNS_TYPES = {
    CNAME: 'cname',
    IP: 'ip',
};

export const DNS_TYPES_OPTIONS = [
    { value: DNS_TYPES.CNAME, label: 'CNAME' },
    { value: DNS_TYPES.IP, label: 'A(IP)' }
];
