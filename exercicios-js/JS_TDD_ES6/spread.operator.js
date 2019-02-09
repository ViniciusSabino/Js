const front = ["React", "Angular", "Vue"];
const back = ["Node.js", "Ruby", "Python"];

console.log([..."Vinicius"]); // [ 'V', 'i', 'n', 'i', 'c', 'i', 'u', 's' ]

console.log(...front); // React Angular Vue

console.log([...front, "Marko JS", "Ember"]); // [ 'React', 'Angular', 'Vue', 'Marko JS', 'Ember' ]

console.log([...front, ...back]); // [ 'React', 'Angular', 'Vue', 'Node.js', 'Ruby', 'Python' ]

console.log([...back, ...front, "Marko JS", "Ember"]);
// [ 'Node.js',
// 'Ruby',
// 'Python',
// 'React',
// 'Angular',
// 'Vue',
// 'Marko JS',
// 'Ember' ]
