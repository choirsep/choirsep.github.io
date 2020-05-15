$(function() {
    $('.button').click(function () {
        var clicked = $(this);
        var container = clicked.closest('table');
        var audio = container.find('audio')[0];
        $('audio').not(audio).each(function () {
            if (!this.paused) {
                this.pause();
            }
        });
        if (clicked.hasClass('active')) {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
            return;
        }
        var target = clicked.data('target');
        var time = audio.currentTime;
        container.find('.button').removeClass('active');
        clicked.addClass('active');
        
        // Play the audio -- tricky because we want to start playback at certain position.
        // Chrome allows the `play` call inside the `canplay` handler.
        // Safari blocks it (NotAllowedError), but adding this `pause` call here somehow
        // causes Safari to unblock it.
        audio.pause();
        // Set `currentTime` only after media is loaded. Required only for Safari -- in
        // Chrome `currentTime` can be set before `play`.
        audio.addEventListener(
            'canplay',
            function () {
                audio.currentTime = time;
                audio.play();
            },
            {once: true}
        );
        audio.src = target;
    });
});