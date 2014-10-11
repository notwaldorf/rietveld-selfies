(function() {
  var config = {
      insertBefore : ['#id_message'],
      bodySelector : '#id_message',
      buttonHTML   : (
        '<div class="selfieButtonContainer">' +
          '<button id="totallyAwesomeSelfieButton" type="button" class="button">' +
            '<span id="totallyAwesomeSelfieIcon" class="camera-icon"></span>' +
            'Take Selfie!' +
          '</button>' +
          '<p>P.S: Hover over the Take Selfie! button to start the video feed. <br>' +
          'After you take your selfie, wait for a bit and ...boom! An imgur link.</p>' +
        '</div>'
      ),
      toggleHTML   : (
        '<button id="selfieToggle" type="button" class="button">GIF?</button>'
      )
    }
    , client = new GitHubSelfies(config);
  client.setupSelfieStream();
})();
