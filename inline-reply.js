(function() {
  var config = {
      insertBefore : ['input[value="Send Message"]'],
      bodySelector : '.message-actions textarea[name="message"]',
      buttonHTML   : (
        '<div class="selfieButtonContainer">' +
          '<button id="totallyAwesomeSelfieButton" type="button" class="button">' +
            '<span id="totallyAwesomeSelfieIcon" class="camera-icon"></span>' +
            'Take Selfie!' +
          '</button>' +
          '<p>P.S: Hover over the Take Selfie! button to start the video feed. <br>' +
          'Take a selfie, wait for a (long-ish) bit and ...boom! You win an imgur link.</p>' +
        '</div>'
      ),
      toggleHTML   : (
        '<button id="selfieToggle" type="button" class="button">GIF?</button>'
      )
    }
    , client = new GitHubSelfies(config);
  client.setupSelfieStream();
})();
