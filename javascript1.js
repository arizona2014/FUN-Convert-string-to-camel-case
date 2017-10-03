function toCamelCase(str){
  var words = str.split('_');
  if(words.length<=1){
    words = str.split('-');
  }
  var camel = "";
  if(words.length > 1){
    for(let i = 0; i<words.length; i++) {
  	  word = words[i];
  	  firstLetter = word[0].toUpperCase();
      wordUpper = firstLetter + word.substr(1,word.length);
      if( i === 0 ){
        camel += word;
      } else {
        if( word !== wordUpper ){        
          camel += wordUpper;
        } else {
          camel += word;
        }
      }
    }
  }
  return camel;
}

TESTS:

Time: 332ms Passed: 8 Failed: 0
Test Results:
 toCamelCase