$(document).ready(function() {
  
  var nameInputs = $('input');
  
  function reset() {
    for(var i = 0; i < nameInputs.length; i++) {
      if(nameInputs[i].value === ''){
        $(nameInputs[i]).removeClass('test');
        $(nameInputs[i]).prev().children().removeClass('test2');
      }
    }
  }
  
  function slider() {
    reset();
    $(this).css('padding-left','0').addClass('test');
    $(this).prev().children().addClass('test2');
  }
  
  $('input[type="text"').on('focus', slider);
  
  $('input').keyup(function(){
    if($(this).val() !== '') {
      $(this).prev().children().css('color','#66cc66');
    }
    else {
      $(this).prev().children().css('color','#ff6666');
    }
  });
  
  $('button').click(function() {
    for(var i = 0; i < nameInputs.length; i++) {
      if(nameInputs[i].value === ''){
        $(nameInputs[i]).css('padding-left','0').addClass('test');
        $(nameInputs[i]).prev().children().addClass('test2')
      }
    }
  });
  
});
