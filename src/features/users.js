import produce from 'immer'

// initial state : 
// - is the request done (void, pending, resoleved, rejected, updating)
// - is there data (null, data)
// - is there an error (null, error)

const initialState = {
    status: 'void',
    data: null,
    error: null
}

// action creators : functions with a type and an optional payload

const FETCHING = 'users/fetching'
const RESOLVED = 'users/resolved'
const REJECTED = 'users/rejected'
 
const usersFetching = () => ({ type: FETCHING });
const usersResolved = (data) => ({ type: RESOLVED, payload: data });
const usersRejected = (error) => ({ type: REJECTED, payload: error });

// reducer : an initialState is given so to avoid 'undefined' state while using combineReducer

export default function usersReducer(state = initialState, action) {
    // directly returning the reducer's logic into produce from immer. Logic is made according to the action's type.
    return (
        produce(
            state, 
            draft => {
                switch (action.type) {

                    case FETCHING: {
                        if (draft.status === 'void') {
                            draft.status = 'pending'
                            return
                        }
                        if (draft.status === 'rejected') {
                            draft.error = null
                            draft.status = 'pending'
                            return
                        }
                        if (draft.status === 'resolved') {
                            draft.status = 'updating'
                            return
                        }
                        return
                    }

                    case RESOLVED: {
                        if (draft.status === 'pending' || draft.status === 'updating') {
                            draft.data = action.payload
                            draft.status = 'resolved'
                            return
                        }
                        return
                    }

                    case REJECTED: {
                        if (draft.status === 'pending' || draft.status === 'updating') {
                            draft.error = action.payload
                            draft.data = null
                            draft.status = 'rejected'
                            return
                        }
                        return
                    }

                    default: 
                        return
                }
            }
        )
    )
}

export {usersFetching, usersResolved, usersRejected}