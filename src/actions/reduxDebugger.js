import * as actionTypes from './actionsTypes';

export const disableReduxDebuggerAction = () => ({
    type: actionTypes.DISABLE_REDUX_DEBUGGER,
})

export const enableReduxDebuggerAction = () => ({
    type: actionTypes.ENABLE_REDUX_DEBUGGER,
})