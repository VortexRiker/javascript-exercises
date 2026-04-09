const removeFromArray = function(array, ...valuesToRemove) 
{
    // if (valuesToRemove.length === 0)
    // {
    //     return array;
    // }
    // for (value of valuesToRemove)
    // {
    //     let valueIndex = array.indexOf(value);
    //     while (valueIndex != -1)
    //     {
    //         array.splice(valueIndex, 1);
    //         valueIndex = array.indexOf(value);
    //     }
    // }
    // return array;
    return array.filter((item)=>!valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
