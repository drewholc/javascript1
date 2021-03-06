function getUsername() {
  var user = prompt('What is your username?');
  user = checkUsername(user);
}

function checkUsername(user) {
  var preparsed = user;
  user = parseInt(user);
  // console.log( isNaN(user) );
  if ( !isNaN(user) || preparsed === '' || preparsed === null || preparsed.trim() === '') {
    alert('thats not a proper username');
    return;
  }
  preparsed = preparsed.trim();

  craftMsg(preparsed);
}

function craftMsg(u) {
  var msg = 'Welcome ';
  msg += formatUsername(u);
  msg += ' to my site';
  alertUser(msg);
}

function formatUsername(first) {
  return first.replace(/\b\w*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function alertUser(m) {
  alert(m);
}

getUsername();
