var find_in_array,
    prepare_text,
    process_dictionary,
    match_text;

exports.parse = function(text, args) {
  var result,
      dictionary,
      item,
      word,
      matches,
      item_index;

  result = [];
  text = prepare_text(text);
  dictionary = process_dictionary(text, args);
  for (item in dictionary) {
    word = prepare_text(dictionary[item]);
    if (word === '') continue;
    matches = match_text(text, word);
    if (matches != null) {
      item_index = find_in_array(result, word);
      if (item_index === null) {
        result.push({'word': word, 'hits': matches.length});
      }
    }
  }
  return result;
}

find_in_array = function(array, word){
  for (var item in array) {
    if (array[item]['word'] === word) return item;
  }
  return null
}

prepare_text = function(text) {
  text = text.replace(/[^\w\s]/gi,' ')
  text = text.replace(/^\s+|\s+$/g,"");
  return text.toLowerCase();
}

process_dictionary = function(text, args) {
  if (typeof args['dictionary'] === 'undefined') return text.split(' ');
  return args['dictionary'];
}

match_text = function(text, word) {
  var r = new RegExp('\\b' + word + '\\b', 'gi');
  return text.match(r);
}