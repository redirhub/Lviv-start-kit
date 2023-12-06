import { addError } from '../slices/error';
import { isRejectedWithValue } from '@reduxjs/toolkit';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (api) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
        if (action.payload.status === 401) {
            return next(action);
        }
        // console.warn('We got a rejected action!', action);
        const message = parseMessage(action.payload?.data);
        console.log('message', message);
        if (message)
            api.dispatch(addError(message));
    }

    return next(action);
};

export function parseMessage(data) {
    if (!data) {
        return null;
    }
    // console.log('parseMessage', data);
    if (data.hasOwnProperty('message')) {
        return data.message;
    } else if (data.hasOwnProperty('messages')) {
        return data.messages[0];
    } else {
        for (let key in data) {
            if (Array.isArray(data[key])) {
                return data[key][0];
            } else {
                return data[key];
            }
        }
    }
}
