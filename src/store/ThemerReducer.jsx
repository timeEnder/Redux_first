const defaultState = {
    light : true
}

export const reducer = (state = defaultState, action)=>{
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state,light: state.light = action.payload}
        default:return state
    }
}