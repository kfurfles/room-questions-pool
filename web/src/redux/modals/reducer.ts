import {persistReducer} from 'redux-persist'
import { createReducer } from '@reduxjs/toolkit'
import { MODAL_PERSIST_CONFIG } from './config'
import * as actions from './actions'

const initialState = {
    open: false,
}

const modalReducer = createReducer(initialState, builder => {
    builder.addCase(actions.ACTION_MODAL_OPEN, (state) => {
        return {
            ...state,
            open: true
        }
    })

    builder.addCase(actions.ACTION_MODAL_CLOSE, (state) => {
        return {
            ...state,
            open: false
        }
    })
})

export const Reducer = persistReducer(MODAL_PERSIST_CONFIG, modalReducer) 