

/**
 * 1. Créer un tableau de string contenants
 * concept-es5
 * concept-es6
 * concept-async
 * concept-modules
 * concept-ts
 */

 /**
  * 2. Créer un fonction nommée 
  * "createDir" recebant un paramétre "name"
  * et faisant un console.log de ce paramétre
  * puis return de "name"
  */

/**
  * 3. Créer un fonction nommée 
  * "createFile" recebant un paramétre "name"
  * et faisant un console.log de ce paramétre
  * puis return de "name"
  */

  /**
   * Appliquer ces deux fonction par itération 
   * successives sur les éléméents du tableau
   */

const {writeFileSync, mkdirSync} = require('fs');

const names = [
  'concept-es5',
  'concept-es6',
  'concept-async',
  'concept-modules',
  'concept-ts'
];

const createDir = name => { 
  mkdirSync(name);
  return name;
};

const createFile = name => {
  writeFileSync( `${name}/index.js`,'');
  return name;
};

names.map(createDir).map(createFile);