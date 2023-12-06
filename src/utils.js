import { API_WORKSPACE } from './config/constant';
import { isArray, isObject } from 'lodash';
import { toUnicode } from 'punycode';

export function ensureHttp(url, https = true) {
    const _https = https ? 'https://' : 'http://';
    return (url.indexOf('://') === -1) ? _https + (url || 'ex') : (url || 'ex');
}

export function noop() {
    return {};
}


export function counter(seconds = 2, subscribe = noop, done = noop) {
    let counter = 0;
    const maxCounter = 100;
    const interval = (seconds * 1000) / maxCounter;

    const loop = setInterval(
        () => {
            subscribe(counter);
            if (counter === maxCounter) stopLoop();
            counter++;
        },
        interval
    );

    function stopLoop() {
        clearInterval(loop);
        done();
    }
}

export function fileToFormData(key, file) {
    const body = new FormData();
    body.append(key, file);
    return body;
}

export function setWorkspaceId(key) {
    window.sessionStorage.removeItem('workspace');
    if (key)
        window.sessionStorage.setItem('workspace', key);
}

export function getWorkspaceId() {
    return window.sessionStorage.getItem('workspace') || API_WORKSPACE;
}

export function getAuthToken() {
    let token = window.sessionStorage.getItem('auth') || process.env.NEXT_PUBLIC_API_AUTH;
    if (token) {
        return 'Bearer ' + token;
    }
    return '';
}

export function setLang(language) {
    window.sessionStorage.removeItem('lang') || 'en';
    window.localStorage.setItem('lang', language);
}
export function getLang() {
    return window.localStorage.getItem('lang') || process.env.NEXT_PUBLIC_LANG;
}

export function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
}

export function extractQueryString(url, key) {
    try {
        const _url = new URL(url);
        return _url.searchParams.get(key);
    } catch (e) {
        return '';
    }
}

export function isValidUrls(urls) {
    return urls?.filter?.(u => isValidHttpUrl(u));
}

export function DNSUrl(host) {
    return `/hostnames/${host}`;
}

export function handleGoBack(e, fallback = '/') {
    if (e)
        e.preventDefault();
    if (window.history.length > 2) {
        window.history.back();
    } else {
        // go to fallback
        window.history.pushState({}, '', fallback);
    }
}

export function prepareRedirectsData(item) {
    return {
        ...item,
        id: item.id,
        title: item.title || toUnicode(item.url),
        dns_correct: item.status === 'dns_incorrect',
        type: item.type,
        date: item.created_at || item.updated_at,
        url: toUnicode(item.url),
        destination: item.destination || item.destinations?.[0],
        host: item.host,
        tags: item.tags,
        count: item.count_links || 0,
        https: item.https,
        actions: {
            edit: 'redirects?edit=' + item.id,
        }
    };
}

export function prepareHostsData(item, isList = false) {
    const SSL = item?.status?.find((statusObject) => statusObject.scope === 'ssl');
    const Verification = item?.status?.find((statusObject) => statusObject.scope === 'verfication');

    const normalizedData = {
        host: item?.host,
        date: item?.updated_at || item?.created_at,
        provider: item?.provider?.label,
        guideLink: item?.provider?.guide_url,
        guideTitle: item?.provider?.guide_title,
        providerLogin: 'Open ' + item?.provider?.label,
        providerLoginUrl: item?.provider?.login_url,
        DNSStatus: item?.correct ? 'success' : 'error',
        defaultRequire: item?.default_require,
        SSLStatus: SSL?.provisioning ? 'provisioning' : SSL?.correct ? 'success' : 'error',
        VerificationStatus: Verification?.correct ? 'success' : 'error',
        domain: item?.domain,
        httpsRequested: item?.https_requested,
        detectedDNS: item?.current,
        require: item?.require,
        actions: {
            redirects: `/redirects?host=${item?.domain}`,
            links: `/short-url?host=${item?.domain}`,
            delete: 'delete',
        },
    };

    if (isList) {
        normalizedData.actions = { settings: `hostnames/${item.host}`, ...normalizedData.actions };
        normalizedData.redirects = item.counts?.find(countObject => countObject?.product === 'redirect')?.count || 0;
        normalizedData.shortLinks = item.counts?.find(countObject => countObject?.product === 'short-url')?.count || 0;
    }

    if (!isList) {
        normalizedData.SSL = item?.require?.find((dns) => dns.scope === 'ssl');
        normalizedData.SSLError = item?.errors?.find((statusObject) => statusObject.scope === 'ssl')?.message;
        normalizedData.domainVerification = item?.require?.find((dns) => dns.scope === 'verfication');
    }

    return normalizedData || {};
}

export function findNextCluster(clustersList = [], currentClusterName = '') {
    const currentIndex = clustersList.findIndex(cluster => cluster.name === currentClusterName);
    const currentCluster = clustersList[currentIndex];
    const nextCluster = clustersList[(currentIndex + 1) % clustersList.length];

    return { currentCluster, nextCluster };
}

export function getActiveFilters(filters) {
    return Object.entries(filters).filter(([, value]) => value).reduce((acc, [filter, value]) => {
        acc[filter] = value && 1;
        return acc;
    }, {});
}

export function convertParamsToFilters(queryParams) {
    return Object.entries(queryParams).reduce((acc, [key, value]) => {
        acc[key] = value === '1';
        return acc;
    }, {});
}

export function convertIntoDropdownOptions(data) {
    if (!data) return [];
    if (isArray(data)) {
        return data.map((item) => ({ value: item, label: item }));
    } else if(isObject(data)) {
        return Object.keys(data).map((key) => ({ value: key, label: data[key] }));
    }
}

export function memberRolesOptions(data) {
    if (!data) return [];
    return data?.map((item) => ({ value: item.id, label: item.name }));
}
