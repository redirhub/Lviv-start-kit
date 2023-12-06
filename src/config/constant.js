export const SIDEBAR_SIZE = '260px';
export const SMALL_SIDEBAR_SIZE = '88px';

export const UI_STYLE_LIST = 'UI_STYLE_LIST';
export const UI_STYLE_LIST_SM = 'UI_STYLE_LIST_SM';

export const LAYOUT_STD_WIDTH = '1024px';

export const REDIRECT_FORM_DATA_KEY = '__tmp_redirect_import_form_data';

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Lviv';
export const APP_LOGO = process.env.NEXT_PUBLIC_APP_LOGO || '/logo.svg';
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.urllize.com/v0.1.3';
export const OPENAPI_BASE = process.env.NEXT_PUBLIC_OPENAPI_BASE;
export const OAUTH_GOOGLE = process.env.NEXT_PUBLIC_OAUTH_GOOGLE;
export const OAUTH_GITHUB = process.env.NEXT_PUBLIC_OAUTH_GITHUB;
export const ACCOUNT_PHONE = process.env.NEXT_PUBLIC_ACCOUNT_PHONE;
export const WORKSPACE_SUMMARY = process.env.NEXT_PUBLIC_WORKSPACE_SUMMARY;
export const API_WORKSPACE = 'current';

export const IMPORT_TEMPLATE = process.env.NEXT_PUBLIC_IMPORT_TEMPLATE || true;
export const IMPORT_READ = process.env.NEXT_PUBLIC_IMPORT_READ;
export const WEBSITE = process.env.NEXT_PUBLIC_WEBSITE || '/';

export const REDIRECT_CHECK_URL = 'https://www.redirhub.com/tool/redirect-checker?url=';
export const LINK_CHECK_URL = 'https://www.redirhub.com/tool/url-expander?url=';

export const URL_VALIDITY_OPTIONS = [
    {
        value: '7',
        name: '7 days'
    },
    {
        value: '30',
        name: '1 month'
    },
    {
        value: '90',
        name: '3 months'
    },
    {
        value: '180',
        name: '6 months'
    },
    {
        value: '365',
        name: '1 year'
    },
    {
        value: '',
        name: 'Permanent'
    }
];
