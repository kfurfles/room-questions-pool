import storage from 'redux-persist/lib/storage'

export const MODAL_PREFIX = 'MODALS'

export const MODAL_PERSIST_CONFIG = {
    key: MODAL_PREFIX,
    storage: storage,
};