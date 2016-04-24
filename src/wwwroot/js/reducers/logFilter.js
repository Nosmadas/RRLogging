const logFilter = (state = '', action) => {

    if (action.type == 'SOURCE_FILTER_CHANGED') {
        return action.filter;
    }
    
    return state;
}

export default logFilter;