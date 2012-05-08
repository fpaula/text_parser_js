exports.parse = function(text, args) {
  var result = [];
  text = prepare_text(text);
  var splited_text = text.split(' ');
  for (var item in splited_text) {
    if (splited_text[item] == '') continue;
    var item_index = find_in_array(result, splited_text[item]);
    if (item_index == null) {
      result.push({'word': splited_text[item], 'hits': 1});
    }
    else {
      result[item_index]['hits'] += 1;
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