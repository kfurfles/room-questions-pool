import {} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ACTION_MODAL_CLOSE, ACTION_MODAL_OPEN } from '@redux/modals'

export function useModal(): [boolean, (s: boolean) => void] {
    const dispatch = useDispatch()
    const state = useSelector(rootState => rootState.MODALS.open)

    function setModal(status: boolean) {
        status ? dispatch(ACTION_MODAL_OPEN) : dispatch(ACTION_MODAL_CLOSE)
    }
    
    return [state, setModal]
}