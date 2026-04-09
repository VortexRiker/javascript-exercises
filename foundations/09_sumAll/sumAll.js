const sumAll = function(lhs, rhs)
{
    if ( !Number.isInteger(lhs) || !Number.isInteger(rhs))
    {
        return "ERROR";
    }

    if ( lhs < 0 || rhs < 0)
    {
        return "ERROR";
    }

    const min = lhs < rhs ? lhs : rhs;
    const max = min === lhs ? rhs : lhs;

    let numbers = [];
    for (let i = min; i <= max; ++i)
    {
        numbers.push(i);
    }
    let result = numbers.reduce((sum, number) => sum + number, 0);
    return result;
};

// Do not edit below this line
module.exports = sumAll;
