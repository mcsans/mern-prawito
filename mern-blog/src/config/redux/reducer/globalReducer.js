const initialState = {
    name: 'ihsan'
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state, // state lama
            name: 'Hello World'
        }
    }
    return state;
}

export default globalReducer;