// recupere direct de node
const {writeFileSync,mkdirSync} = require('fs');

const myArray = [   
                    'concept-es5',
                    'concept-es6',
                    'concept-async',
                    'concept-modules',
                    'concept-ts'
                ];

const createDir = name => {
    mkdirSync(name);
    return name;
}

const createFile = name => {
    writeFileSync( `${name}/index.js`, '');
    return name;
}

// "Equivalent" a 2 boucles consecutive sur le tableau myArray.
myArray.map(createDir).map(createFile);





