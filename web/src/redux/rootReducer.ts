import { combineReducers } from '@reduxjs/toolkit'

import {
    Reducer as ModalReducer,
    MODAL_PREFIX as ModalPrefix
} from './modals'

const rootReducer = combineReducers({
    [ModalPrefix]: ModalReducer
})

export default rootReducer