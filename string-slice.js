const sentence = 'This is a random sentence to check the string slice';
const words = sentence.split(' ');
const withoutA = sentence.split('a');

const smallSlice = sentence.slice(5,13);


console.log(smallSlice);