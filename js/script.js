/* 
Author: Kristijan Popchev
Theme: Info & Help about the Virus
Type: Script
Copyright © All rights reserved.
*/

// APIs
// https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=MK
// https://covid-ca.azurewebsites.net/api/covid/countries
// https://corona.lmao.ninja/countries/mk
$(function(){
  var $cases = $("#api-cases");
  var $active = $("#api-active");
  var $recovered = $("#api-recovered");
  var $daily = $("#api-daily");
  var $critical = $("#api-critical");
  var $deaths = $("#api-deaths");
  var $tests = $("#api-tests");
  $.get('https://corona.lmao.ninja/countries/mk', function(res,status){
      $cases.empty().append(res.cases);
      $active.empty().append(res.active);
      $recovered.empty().append(res.recovered);
      if(res.todayCases === 0) {
        $daily.empty().append('/');
      } else {
        $daily.empty().append(res.todayCases);
      }
      $critical.empty().append(res.critical);
      $deaths.empty().append(res.deaths);
      $tests.empty().append(res.tests);
    // let data = JSON.parse(res);
    // for(i in data) {
    //   if(data[i].countryInfo._id == '807') {
    //     console.log(data[i]);
    //     $cases.empty().append(data[i].cases);
    //     $active.empty().append(data[i].active);
    //     $recovered.empty().append(data[i].recovered);
    //     $daily.empty().append(data[i].todayCases);
    //     $critical.empty().append(data[i].critical);
    //     $deaths.empty().append(data[i].deaths);
    //   }
    // }
  }).fail(function(err){
      console.log('Failed fetching data..');
      alert('Моментално не е можен приказ на податоци.');
  });
});



// Date
Date.prototype.toShortFormat = function() {

  var month_names =["01","02","03",
                    "04","05","06",
                    "07","08","09",
                    "10","11","12"];
  
  var day = this.getDate();
  var month_index = this.getMonth();
  var year = this.getFullYear();
  
  return "" + day + "." + month_names[month_index] + "." + year;
}

// Now any Date object can be declared 
var today = new Date();


// and it can represent itself in the custom format defined above.
$('span#date').empty().append(today.toShortFormat());

// Preloader
$(function(){
  setTimeout(function(){
      $('#preloader').fadeOut(1000);
  }, 1500);
});

// Animations
$(function(){
  $('.navbar').hide();
  $('div.date').hide()
  $('#content').hide();
  $('#shape1').hide();
  $('#shape2').hide();
  $('#hero-img').hide();
  $('#api-stats').hide();
  $('#project-partners').hide();
  setTimeout(function(){
      $('.navbar').fadeIn();
      $('#content').fadeIn();
      $('div.date').fadeIn();
  }, 2700);
  setTimeout(function(){
      $('#shape1').fadeIn();
      $('#shape2').fadeIn();
      $('#hero-img').fadeIn();
  }, 3100);
  setTimeout(function(){
      $('#api-stats').fadeIn();
      $('#project-partners').fadeIn();
  }, 3500);
});

// Tooltip
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
});

// Calc Width
$(function(){
  setTimeout(function(){
    var $img_width = $('#hero-img').width();
    console.log($img_width);
    console.log();

    calc = $img_width - 260;

    $('div#project-partners').css({
        'max-width' : calc,
        'min-width' : calc
    });
  }, 500);

  setTimeout(function(){
      $('div#project-partners').mouseover(function(){
          var scroll = function(width) {
              $('#project-partners').find('div.flex-row').animate({
                scrollLeft: width + 50,
              }, 10000);
            };
            
            var loopForever = function(delay, callback) {
              var loop = function() {
                callback();
                setTimeout(loop, delay);
              };
              loop();
            };
            
            loopForever(1000, function() {
              scroll($('.flex-row').width());
              scroll(0);
            });
      });
  }, 4000);


  // setTimeout(function(){
  //     $("div#project-partners").find('div.flex-row').animate({scrollLeft: 1100}, 5000).end();
  // }, 100);

  $(window).ready(function(){
    if($(this).width() > 800) {
      $(window).resize(function(){location.reload();});
    }
  });
  
});

// Ham Menu
$(function(){
let $ham_menu = $('#ham-menu');
$ham_menu.click(function(){
  $('.navbar-items').fadeToggle();
});
});