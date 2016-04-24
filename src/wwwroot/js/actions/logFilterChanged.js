const logFilterChanged = (filter) => {
    return {
        type: 'LOG_FILTER_CHANGED',
        filter
    };
}

export default logFilterChanged;