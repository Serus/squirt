javascript:(function(){
  if(window.squirting){
    var test;
    window.squirted && document.dispatchEvent(new Event('squirt.again'));
  } else {
    window.squirting = true;
    var s = document.createElement('script');
    s.src = window.location.search.indexOf('sq-dev') != -1 ? '/squirt.js'
    : '//www.squirt.io/squirt.js';
    document.body.appendChild(s);
  }
})();
