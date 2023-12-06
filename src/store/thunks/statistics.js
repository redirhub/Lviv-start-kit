import { statisticsApi } from '@/store/service/statistics';

export function clearStatisticsApiCache() {
    return async (dispatch) => {
        try {
            dispatch(statisticsApi.util.resetApiState());
        } catch (error) {
            console.error('Statistics API cache clear Error', error);
        }
    };
}
