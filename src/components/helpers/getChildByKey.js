const getChildByKey = (children, key) => {
    if(children) {
        if(children.filter) {
            console.log(children);
            const child = children.filter( (comp) => {
                return comp && comp.key === key;
            });
            return child[0];
        }
        if(children.key === key) {
            return children;
        }
    }
    return null;
};

export default getChildByKey;
