exports.parse = function(text, args) {
  var result = [];
  text = prepare_text(text);
  var dictionary = process_dictionary(text, args);
  for (var item in dictionary) {
    if (dictionary[item] == '') continue;
    var matches = match_text(text, dictionary[item]);
    if (matches != null) {
      var item_index = find_in_array(result, dictionary[item]);
      if (item_index == null) {
        result.push({'word': dictionary[item], 'hits': matches.length});
      }
    }
  }
  return result;
}

function find_in_array(array, term){
  for (var item in array) {
    if (array[item]['word'] == term) return item;
  }
  return null
}

function prepare_text(text) {
  text = text.replace(/[^\w\s]/gi,' ')
  text = text.replace(/^\s+|\s+$/g,"");
  return text.toLowerCase();
}

function process_dictionary(text, args) {
  if (args['dictionary'] == undefined) return text.split(' ');
  return args['dictionary'];
}

function match_text(text, word) {
  var r = new RegExp('\\b' + word + '\\b', 'g');
  return text.match(r);
}