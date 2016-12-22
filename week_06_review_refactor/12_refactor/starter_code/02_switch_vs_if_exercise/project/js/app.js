// we can simplify here with an array
$(document).ready(function() {
  // $('#city-type').append('<option value="NYC">' + "NYC" + '</option>');
  // $('#city-type').append('<option value="SF">' + "SF" + '</option>');
  // $('#city-type').append('<option value="LA">' + "LA" + '</option>');
  // $('#city-type').append('<option value="ATX">' + "ATX" + '</option>');
  // $('#city-type').append('<option value="SYD">' + "SYD" + '</option>');
  



var cityName = ["NYC", "SF", "LA", "ATX", "SYD"];

cityName.forEach(function(item, index){
  $('#city-type').append('<option value="' + item + '">' + item +'</option>');
  console.log(item);

});


  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();


      switch(city){
        case 'NYC':
        $('body').attr('class', 'nyc');
        break;

        case 'SF':
        $('body').attr('class', 'sf');
        break; 

        case 'LA':
        $('body').attr('class', 'la');
        break;
        
        case 'ATX':
        $('body').attr('class', 'austin');
        break;

        case 'SYD':
        $('body').attr('class', 'sydney');
        break;

      }
    }
  );

});