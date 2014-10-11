(function() {
  var config = {
      insertBefore : ['#id_message'],
      bodySelector : '#id_message',
      buttonHTML   : (
        '<div class="selfieButtonContainer">' +
          '<button id="totallyAwesomeSelfieButton" type="button" class="button">' +
            '<span id="totallyAwesomeSelfieIcon" class="camera-icon"></span>' +
            'Selfie!' +
          '</button>' +
        '</div>'
      ),
      toggleHTML   : (
        '<button id="selfieToggle" type="button" class="button">GIF?</button>'
      )
    }
    , client = new GitHubSelfies(config);
  client.setupSelfieStream();
})();
