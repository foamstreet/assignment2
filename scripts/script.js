$(document).ready(function() {
  
  // Returns an array of text inputs that are empty.
  function emptyInputs() {
    var nameInputs = $('input[type="text"');
    var empty = [];
    for(var i = 0; i < nameInputs.length; i++) {
      if(nameInputs[i].value === ''){
        empty.push(nameInputs[i]);
      }
    }
    return empty;
  }

  /**
   * Highlights an empty text input. Adds slide-placeholder-out class to  slide out 
   * placeholder text. Adds slide-in-labels class to slide in hidden labels.
   */
  function highlightEmptyInputs(selector) {
    $(selector).css('padding-left','0').addClass('slide-placeholder-out')
    .prev().children().addClass('slide-in-labels');
  }
  
  /**
   * Checks text inputs on focus. If there are other empty inputs, it slides out 
   * their label and slides in the placeholder text. 
   */
  $('input[type="text"').on('focus', function() {
    var empty = emptyInputs();
    if(empty.length > 0) {
      for(var i = 0; i < empty.length; i++) {
        $(empty[i]).removeClass('slide-placeholder-out');
        $(empty[i]).prev().children().removeClass('slide-in-labels');
      }
      highlightEmptyInputs($(this));
    }
  })

  /**
   * Checks to see if input has a value. If there is no value it changes the label 
   * color to red. If there is a value in the input it changes to label color to green.
   */
  .keyup(function() {
    var $this = $(this);
    if($this.val() !== '') {
      $this.prev().children().css('color','#66cc66');
    }
    else {
      $this.prev().children().css('color','#ff6666');
    }
  });

  /** 
   * On button click checks for empty text inputs. Appends name of empty inputs to form.
   * Sends empty input elements to highLightEmptyInputs function. If there are no empty inputs,
   * contents of body fade out and success message with 
   * selected character image is displayed.
   */
  $('button').on('click', function() {
    var empty = emptyInputs();
    if(empty.length > 0) {
      if($('.errors').length > 0){
        $('.errors').remove();
      }
      $('form').append('<p class="errors">Please fill in your:</p>');
      for(var i = 0; i < empty.length; i++) {
        highlightEmptyInputs(empty[i]);

        // Appends empty input names to errors element. Capitolizes name attribute.
        $('.errors').append('<br>' + empty[i].name.charAt(0).toUpperCase() 
        + empty[i].name.substring(1,empty[i].name.length) + ' Name' );
      }
    }
    else {
      var selectedCharacter = $('input[type="radio"]');
      for(var i = 0; i < selectedCharacter.length; i++) {
        if(selectedCharacter[i].checked === true) {
          selectedCharacter = selectedCharacter[i].value;
          break;
        }
      }

      // Fades out body contents and fades in success message with selected character image.
      $('body').children().fadeOut();
      $('body').html('<div><img src="imgs/' + selectedCharacter + 
      '.svg" id="successImg"></div><h1 style="color:#66cc66">Success</h1><h1>Thanks '
      + $('input[type="text"]')[0].value + '</h1>').hide().fadeIn();
    }
  });
  
});
