const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return theSentence
};

const theSentence = tutorials.map(function(words){
  let message = words.split(" ");
  for(let i = 0; i < message.length; i++){
     message[i] = message[i][0].toUpperCase() + message[i].substring(1);
  }
  return message.join(" ")
});