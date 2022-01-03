import { createAction } from '@reduxjs/toolkit'
import { MODAL_PREFIX } from './config'

const action = <T>(actionName: string) => {
    return createAction<T>(`${MODAL_PREFIX}/${actionName}`)
}

export const ACTION_MODAL_OPEN = action<void>('OPEN')
export const ACTION_MODAL_CLOSE = action<void>('CLOSE')