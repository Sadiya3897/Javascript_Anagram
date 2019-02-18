function isAnagram(Firstword, Secondword) {
    if (typeof Firstword !== 'string' || typeof Secondword !== 'string') {
      throw new Error('Strings are not equal')
    }
  
    var String1 = Firstword.replace(/[^A-Za-z]+/g, '').toLowerCase();
    var String2 = Secondword.replace(/[^A-Za-z]+/g, '').toLowerCase();
  
    var counts = [];
    var FirstwordLength = String1.length;
    var SecondwordLength = String2.length;
  
    if (FirstwordLength !== SecondwordLength) { return false; }
  
    for (var i = 0; i < FirstwordLength; i++) {
      var index = String1.charCodeAt(i)-97;
      counts[index] = (counts[index] || 0) + 1;
    }
  
    for (var j = 0; j < SecondwordLength; j++) {
      var index1 = String2.charCodeAt(i)-97;
      if (!counts[index]) { return false; }
      else { counts[index1]--; }
    }
  
    return true;
  }
   isAnagram('Sadiya', 'adisay');