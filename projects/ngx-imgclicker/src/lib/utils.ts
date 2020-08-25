export function mergeJson(source: any, dest: any): void {
    for (const key of Object.keys(dest)) {
        if (source[key] === undefined) {
            source[key] = dest[key];
            continue;
        }

        if (isJson(dest[key])) {
            mergeJson(source[key], dest[key]);
        }
    }
}

export function isJson(target: any): boolean {
    return typeof target === 'object' && target.constructor === Object;
}
