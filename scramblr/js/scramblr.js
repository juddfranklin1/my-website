//Mini Framework - Scramblr
//takes text to do stuff to
//Offers some methods for doing stuff to text
//Reusable library/framework
//Easy to type 'S$()' structure
//Support jQuery

(function(global, $){

  'use strict';
  var Scramblr = function(text, stringType){
    return new Scramblr.init(text, stringType);
  }

  var stringTypes = ['singleWord','multi-word','alphaNumerical'];

  var jqueryFallback = function(selector,output){// jQuery fallback helper.
    if(typeof selector === 'string'){
      if(!$){
        throw "jQuery is not defined, sorry dudes!";
      }
      $(selector).html(output);
    } else if(console){
      console.log(output);
    } else {
      alert(output);
    }
  }

  var scramble = function(text){// Basic Scramble helper
    var lettersNum = text.length, newString = '', randomChars = [];

    for (lettersNum; lettersNum > 0; lettersNum--) {

      var random = Math.floor(Math.random() * lettersNum);

      randomChars.push({character: text[random],unicode: text.charCodeAt(random)});

      newString += text[random];//add selected character to a new string

      text = text.slice(0,random) + text.slice(random+1);//remove selected char from original string
    }

    return newString;
  }

  Scramblr.prototype = {

    basicScramble: function(selector){

      this.randomChars = scramble(this.text);

      jqueryFallback(selector,this.randomChars);
      //Returning _this_ allows the method to be chainable,
      //since the calling object will be returned
      return this;
    },
    inlineScramble: function(selector){//scramble individual words
      //Splitting a string into substrings based upon the nbsp character.
       var scrambledString, words = this.text.split(' ');
       for (var i = 0; i < words.length; i++){
         words[i] = scramble(words[i]);
       }
       scrambledString = words.join(' ');
       jqueryFallback(selector, scrambledString);
       return this;
    },
    unscramble: function(selector,alg){//function for unscrambling words, try doing algorithms here.
      //Quick Sort
      //Bubble Sort
      //Heap Sort
      //Merge Sort

      return this;
    },
    hashMaker: function(technique){
      // Taking a Technique argument
      // Create a character hash that scrambles main characters
      // this.hash = set of characters hashed;
      // this.hash;
      return this;
    },
    hashApplier: function(selector, technique){
      // Use the hash generated in the hashMaker to obfuscate this.text
      // if hashMaker hasn't been run, then run it with the default technique
      // or the technique argument if provided.
      // this.hashedText = whatever this function outputs
      return this;
    }
  };

  Scramblr.init = function(text, stringType) {
    var that = this;
    that.text = text || '';
  };

  Scramblr.init.prototype = Scramblr.prototype;

  global.Scramblr = global.S$ = Scramblr;

})(this,jQuery);
