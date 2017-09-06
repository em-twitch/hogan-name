<script> //
var $ = jQuery, color2 = $("#colorPicker2").val();
-$('button').click(function() {
  $('h2').text(randomEl(adjectives) + ' ' + randomEl(nouns));
  selectElementContents($('h2')[0]);
});

function randomEl(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

var adjectives = ["brown", "boisterous", "sweet", "mellow", "long", "sleepy", "spicy", "fruity", "fruitsome", "tubsome", "musty", "proud", "grump", "powerful", "professor", "gay", "friendly", "baggy", "tall", "drippy", "meaty", "wise", "lovely", "luxurious", "strong", "old", "large", "sweet brown", "musty brown", "orange", "golden", "troubled", "my sweet", "gayest", "sir"];
var nouns = ["plums", "boooy", "fellow", "boy", "horse", "prince", "wizard", "grumpus", "tippy", "hoop", "hams", "professor", "tip", " lovely son", "brown angel", "gums", "lips", "lip", "face", "hound", "gay", "spicy boy", "meaty hams", "friend", "gay horse"];

$('button').click();
</script>
