/** extract the times from a timetable in the PMV's website
  * to be used in the console
  * @var $0 = selected <tbody> element to be searched
  */
jQuery($0).find('.txtC').map(function() { return $(this).text(); }).get();
