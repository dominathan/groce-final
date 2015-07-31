(function() {
  'use strict';

  angular
    .module('bowieApp', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'SongController'
        })
        .when('/404', {
          template: '<h2>Bowie Is Not Pleased</h2>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    })

}());
// $(document).ready(function() {
//   $('.lyric-container').on('click', '#play', function(event) {
//     event.preventDefault();
//     console.log('grabbing');
//     $('bowieList1[songsArr[randomBowie]].lyric').fadeIn(300);
//   });
// });
// bowieList1[songsArr[randomBowie]].lyric
