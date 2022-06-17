import { messageActions } from '../actions';

const initialState = {
    state: null,
    options: {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        autoHideDuration: 6000,
        message: "Hi",
        variant: null
    }
};

const message = function (state = initialState, action) {
    switch (action.type) {
        case messageActions.SHOW_MESSAGE:
            {
                return {
                    state: true,
                    options: {
                        ...initialState.options,
                        ...action.options
                    }
                };
            }
        case messageActions.HIDE_MESSAGE:
            {
                return {
                    ...state,
                    state: null
                };
            }
        default:
            {
                return state;
            }
    }
};

export default message;
