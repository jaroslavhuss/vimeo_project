const vimeo_controller = () => {

    const PLAY_IMAGE:HTMLElement = document.getElementById("vim_play_btn");
    const SOUND_IMAGE:HTMLElement = document.getElementById("vim_sound_on");

  PLAY_IMAGE.addEventListener("click", () => {  
    vimeoLogic();
  })
  SOUND_IMAGE.addEventListener("click", () => {  
    vimeoLogic()
  })
  
  function vimeoLogic(){
    var video = document.getElementById("vim_main_video");
    var player = new Vimeo.Player(video);
    player.ready().then(function () {
      player.setVolume(1);
      player.setCurrentTime(0);
      PLAY_IMAGE.remove();
      SOUND_IMAGE.remove();
    })
  }
  
}
//Main functions
function main() {
    window.onload = ():void => {
        vimeo_controller()
    }
}
main();