(function() {
  var config = {
      insertBefore : ['table .formtable'],
      bodySelector : '[name="[body]"]',
      buttonHTML   : (
        '<div class="selfieButtonContainer">' +
          '<button id="totallyAwesomeSelfieButton" type="button" class="button">' +
            '<span id="totallyAwesomeSelfieIcon" class="octicon octicon-device-camera"></span>' +
            'Selfie!' +
          '</button>' +
        '</div>'
      )
    }
    , client = new GitHubSelfies(config);
  client.setupSelfieStream();
})();
