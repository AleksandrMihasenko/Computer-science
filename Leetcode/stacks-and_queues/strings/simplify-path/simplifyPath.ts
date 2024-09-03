function simplifyPath(path: string): string {
    const stack = [];

    for (const part of path.split('/')) {
        if (part === '..') {
            if (stack.length) stack.pop();
        } else if (part === '.' || !part) {
            continue;
        } else {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
}

// Time: O(n);
// Space: O(n);

const result = simplifyPath('/home/user/Documents/../Pictures');
console.log(result);
