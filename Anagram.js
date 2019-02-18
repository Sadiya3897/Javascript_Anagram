function isAnagram(word1, word2) {
    if (typeof word1 !== 'string' || typeof word2 !== 'string') {
      throw new Error('isAnagram requires two strings to be passed.')
    }
  
    var normalizedWord1 = word1.replace(/[^A-Za-z]+/g, '').toLowerCase();
    var normalizedWord2 = word2.replace(/[^A-Za-z]+/g, '').toLowerCase();
  
    var counts = [];
    var word1Length = normalizedWord1.length;
    var word2Length = normalizedWord2.length
  
    if (word1Length !== word2Length) { return false; }
  
    for (var i = 0; i < word1Length; i++) {
      var index = normalizedWord1.charCodeAt(i)-97;
      counts[index] = (counts[index] || 0) + 1;
    }
  
    for (var j = 0; j < word2Length; j++) {
      var index1 = normalizedWord2.charCodeAt(i)-97;
      if (!counts[index1]) { return false; }
      else { counts[index1]--; }
    }
  
    return true;
  }
   isAnagram('Sadiya', 'aSadiy');
  