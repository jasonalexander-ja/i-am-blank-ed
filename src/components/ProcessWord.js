
const endingMappings = [
    { ending: 'y', append: 'ied', truncateLetters: 1 },
    { ending: 't', append: 'ted', truncateLetters: 0 },
    { ending: 'e', append: 'd', truncateLetters: 0 },
    { ending: 'g', append: 'ged', truncateLetters: 0 },
    { ending: 'ss', append: 'ed', truncateLetters: 0 },
    { ending: 's', append: 'sed', truncateLetters: 0 },
    { ending: 'l', append: 'led', truncateLetters: 0 },
    { ending: 'r', append: 'red', truncateLetters: 0 },
    { ending: 'n', append: 'ned', truncateLetters: 0 },

    { ending: 'ed', append: '', truncateLetters: 0 },
    { ending: '', append: 'ed', truncateLetters: 0 }
]

const ProcessWord = word => {
    if(!word || typeof word !== "string") return '';
    for(var index = 0; index <= endingMappings.length -1; index++) {
        const mapping = endingMappings[index];
        if(!word.endsWith(mapping.ending)) continue;
        const newWord = word.slice(0, word.length - mapping.truncateLetters);
        return `${newWord}${mapping.append}`;
    }
    return '';
}

export default ProcessWord;
