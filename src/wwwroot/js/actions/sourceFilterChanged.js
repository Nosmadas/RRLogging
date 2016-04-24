const filterChanged = (filter) => {
    return {
        type: 'SOURCE_FILTER_CHANGED',
        filter
    };
}

export default filterChanged;