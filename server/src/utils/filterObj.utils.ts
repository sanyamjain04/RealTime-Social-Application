type FilterObj = {
    [key: string]: any
}

const filterObj = ({ obj, ...allowedFields }: FilterObj) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
        // @ts-ignore
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
};
export default filterObj;  