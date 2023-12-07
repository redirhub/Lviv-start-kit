import AlertTriangleIcon from '@/icons/alert-triangle';
import CheckCircleIcon from '@/icons/check-circle';
import GoogleIcon from '@/icons/google';
import GithubIcon from '@/icons/github';
import GithubAvatarIcon from '@/icons/github-avatar';
import BitbucketIcon from '@/icons/bitbucket';


export const verificationIcons = {
    true: <CheckCircleIcon color="success.500" />,
    false: <AlertTriangleIcon color="warning.500" />,
};

export const MAX_FILE_SIZE = 2;

export const connectionIcons = {
    google: <GoogleIcon />,
    github: <GithubAvatarIcon />,
    gitlab: <GithubIcon />,
    bitbucket: <BitbucketIcon />,
};

export const getConnectionIcon = (icon, width = '32px', height = '32px') => {
    const Icon = connectionIcons[icon]?.type;
    return <Icon width={width} height={height} />;
};

export const tokenExpiration = [
    { label: 'Permanent', value: 0 },
    { label: '1 day', value: 1 },
    { label: '3 days', value: 3 },
    { label: '7 days', value: 7 },
    { label: '1 Month', value: 30 },
    { label: '3 Months', value: 90 },
    { label: '6 Months', value: 180 },
    { label: '1 Year', value: 365 },
];
