type FilterObj = {
    obj: any;
    allowedFields: string[];
}

const filterObj = (obj: any, allowedFields: any) => {
    const newObj: Record<string, any> = {};
    Object.keys(obj).map((el) => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
};

export default filterObj