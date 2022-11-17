let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:    0  1  2   3  4  5  6  7  8  9
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'project', 'stuck', 'traffic', 'swimming', 'friend', 'eating'];
// indeksai:    0       1         2        3       4        5       6       7          8        9           10          11
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];
// indeksai:    0       1     2      3     4    5     6     7  

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
// 1. my sister is in the lake
let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
console.log(sentence1);
// 2. hammer is on the table
let sentance2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];
console.log(sentance2);  
// 3. sun is in the sky
let sentance3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5];
console.log(sentance3);
// 4. apple is with my sister
let sentance4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + helpers[7] + nouns[1];
console.log(sentance4);
// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.
// 5.1. my sister is swimming in the lake
let sentance5 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + nouns[10] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
console.log(sentance5);
// 5.2 my sister is stuck in traffic
let sentance6 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + nouns[8] + helpers[7] + helpers[0] + helpers[7] + nouns[9];
console.log(sentance6);
// 5.3 friend is eating my apple
let sentance7 = nouns[11] + helpers[7] + helpers[4] + helpers[7] + nouns[12] + helpers[7] +  helpers[3] + helpers[7] + nouns[0];
console.log(sentance7);
