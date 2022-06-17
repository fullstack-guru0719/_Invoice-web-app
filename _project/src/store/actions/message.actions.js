export default {
    HIDE_MESSAGE,
    SHOW_MESSAGE,

    hideMessage,
    showMessage
}

const HIDE_MESSAGE = '[MESSAGE] CLOSE';
const SHOW_MESSAGE = '[MESSAGE] SHOW';

function hideMessage() {
    return {
        type: HIDE_MESSAGE
    }
}

function showMessage(options) {
    return {
        type: SHOW_MESSAGE,
        options
    }
}

