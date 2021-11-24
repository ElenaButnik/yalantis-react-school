const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

const getAlphabetMap = data => {
    const map = new Map();
    data.forEach(element => {
        const firstLetter = element.firstName.charAt(0);
        if (!map.get(firstLetter)) {
            map.set(firstLetter, [element]);
        } else {
            let arr = map.get(firstLetter);
            arr.push(element);
            arr.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
            map.set(firstLetter, arr);
        }
    });
    return map;
};

export { alphabet, getAlphabetMap };
