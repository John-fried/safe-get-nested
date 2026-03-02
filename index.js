function safeGet(obj, path) {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length; i++) {
        if (current === null || typeof(current) !== 'object')
            return undefined;
        current = current[keys[i]];
    }

    return current;
}

module.exports = safeGet;
