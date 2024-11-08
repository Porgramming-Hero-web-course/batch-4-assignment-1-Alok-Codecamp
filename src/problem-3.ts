//created function countWordOccurrences

function countWordOccurrences (inputSentence:string,inputWord:string):number | undefined{
    const splitedSentence = inputSentence.split(' ');
    const totalAppears = splitedSentence.filter(element=>element.toLocaleLowerCase()===inputWord.toLocaleLowerCase());
return totalAppears.length
}

// calling function countWordOccurrences

const numberOfTimesTheWordAppears= countWordOccurrences("I love typescript typescript love love", "love");

console.log(numberOfTimesTheWordAppears);

