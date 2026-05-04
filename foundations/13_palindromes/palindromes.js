const palindromes = function (phrase) 
{
    phrase = phrase.toLowerCase();
    let formated = "";
    const punctuation = ['.',',','!','?','"',"'",'`',';',':'," "];
    for (let i = 0; i < phrase.length; ++i)
    {
        if (punctuation.includes(phrase[i]))
        {
            continue;
        }
        formated += phrase[i];
    }
    const inverseFormated = formated.split("").reverse().join("");
    return formated === inverseFormated;
};

// Do not edit below this line
module.exports = palindromes;
