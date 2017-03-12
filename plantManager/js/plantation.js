$(document).ready(function(){
  var plant =  [
  '<div class="plant row">',
    '<div class="plantImage col-sm-3"> ',
      '<img src="http://ian.umces.edu/imagelibrary/albums/userpics/12789/normal_ian-symbol-festuca-spp.png" alt="plant" height="100" width="100">',
    '</div>',
    '<div class="indicators col-sm-6"> time to water </br> water state </br> age </div>',
    '<div class="controls col-sm-3">',
      '<a class="button1 water"> Water me! </a>',
      '<a class="button1 remove"> Remove me! </a>',
    '</div>',
  '</div>',
];
      
  $('#addButton').click(function(){
    $('#plantContainer').append(plant.join(''));});
  
  $('#butto').click(function(){
    $('#plantContainer').append(plant.join(''));});
});
