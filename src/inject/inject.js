function giveOneHeart(heart, targetId) {
  var content = heart.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
  var userId = content.getElementsByClassName('username')[0].innerText;
  if (userId == targetId) {
    var favorited = content.parentElement.classList.contains('favorited');
    if (!favorited) {
      heart.click();
      console.log(`gave heart to ${targetId}`);
    }
  }
}
 
function giveEveryHeart(targetId) {
  var hearts = document.getElementsByClassName('Icon--heart');
  for (var i = 0; i < hearts.length; i++) {
    giveOneHeart(hearts[i], targetId);
  }
}

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      /* Main */
      var target = '@mrsteinkim';
      giveEveryHeart(target);
    }
  }, 10);
});
