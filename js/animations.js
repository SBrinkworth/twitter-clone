$('document').ready(function () {

  $('#tweet-controls').hide();
  $('#copy-me').hide();
  $('.tweet-actions').hide();
  $('.stats').hide();

  $('.tweet-compose').on('click', function () {
    $(this).css('height', '5em');
    $('#tweet-controls').show();
  });

  var count = 140;
  $('.tweet-compose').on('keyup', function () {
    var length = $(this).val().length;
    var total = count - length;
    $('#char-count').text(total);

    if (total < 0) {
      console.log();
      $('#tweet-submit').attr('disabled', true);
    } else if (total <= 10) {
      $('#char-count').css('color', 'red');
      $('#tweet-submit').attr('disabled', false);
    } else {
      $('#char-count').css('color', 'gray');
    }
  });

  $('#tweet-submit').on('click', function() {
    var newTweet = $('#copy-me').clone();
    newTweet.show();

    newTweet.find('.fullname').text('Stephen Brinkworth');
    newTweet.find('.username').text('@SBrinkworth');
    newTweet.find('.tweet-text').text($('.tweet-compose').val());
    $('.tweet-compose').val('');
    $('#char-count').text(140);
    newTweet.find('.time').text(new Date());
    $('#stream').prepend(newTweet);
    console.log('hello there');
  });

  $(document).on('mouseover', '.tweet', function () {
    $(this).find('.tweet-actions').show();
  });

  $(document).on('mouseleave', '.tweet', function () {
    $(this).find('.tweet-actions').hide();
    $(this).find('.stats').hide();
  });

  $(document).on('click', '.tweet', function() {
    $(this).find('.stats').toggle();
  });

});
