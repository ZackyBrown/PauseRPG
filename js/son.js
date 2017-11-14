function mute(vol) {

  var player = document.querySelector('#music');
  player.volume = vol;
  $("#mute").attr("hidden", "true");
  $("#unmute").removeAttr("hidden");
}

function unmute(vol) {

  var player = document.querySelector('#music');
  player.volume = vol;
  $("#unmute").attr("hidden", "true");
  $("#mute").removeAttr("hidden");

}
