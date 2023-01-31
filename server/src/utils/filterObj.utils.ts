type FilterObj = {
    obj: any;
    allowedFields: string[];
}

const filterObj = ({ obj, allowedFields }: FilterObj) => {
    const newObj: Record<string, any> = {};
    Object.keys(obj).forEach((el) => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
};

export default filterObj