var vimeo_controller = function () {
    var PLAY_IMAGE = document.getElementById("vim_play_btn");
    var SOUND_IMAGE = document.getElementById("vim_sound_on");
    PLAY_IMAGE.addEventListener("click", function () {
        vimeoLogic();
    });
    SOUND_IMAGE.addEventListener("click", function () {
        vimeoLogic();
    });
    function vimeoLogic() {
        var video = document.getElementById("vim_main_video");
        var player = new Vimeo.Player(video);
        player.ready().then(function () {
            player.setVolume(1);
            player.setCurrentTime(0);
            PLAY_IMAGE.remove();
            SOUND_IMAGE.remove();
        });
    }
};
//Main functions
function main() {
    window.onload = function () {
        vimeo_controller();
    };
}
main();
//# sourceMappingURL=app.js.map