/**
 * redmine_zxcvbn Plugin
 *
 * Adds password quality meter to Redmine's password fields
 */
(function ($) {
  "use strict";

  var init, change, handleSize, loadZxcvbn;

  init = function () {
    var input = $("#new_password, #user_password"),
        span, resize;

    if (!input.length) {
      return;
    }

    span = $("<span>").addClass("zxcvbn");
    input.addClass("has_zxcvbn").
          after(span).
          off(".zxcvbn").
          on("blur.zxcvbn",   change).
          on("change.zxcvbn", change).
          on("focus.zxcvbn",  change).
          on("keyup.zxcvbn",  change);

    loadZxcvbn();
    handleSize(span, input);
  };

  loadZxcvbn = function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "/plugin_assets/redmine_zxcvbn/vendor/zxcvbn.js";

    document.body.appendChild(script);

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.media = "screen";
    link.href = "/plugin_assets/redmine_zxcvbn/stylesheets/redmine_zxcvbn.css";

    document.head.appendChild(link);
  };

  handleSize = function (span, input) {
    var resize = function () {
      span.css("margin-left", "0");
      span.width(0);

      span.offset();

      span.width(input.outerWidth());
      span.css("margin-left", input.css("margin-left"));
    };

    $(window).on("resize.zxcvbn", resize);
    resize();
  };


  change = function (e) {
    if (typeof zxcvbn === "undefined") {
      return;
    }

    var input = $(this),
        span  = input.next(".zxcvbn"),
        value = input.val();

    span.removeClass("zxcvbn-0 zxcvbn-1 zxcvbn-2 zxcvbn-3 zxcvbn-4");

    if (value !== "") {
      span.addClass("zxcvbn-" + zxcvbn(value).score);
    }
  };

  $(init);
})(jQuery);
