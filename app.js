fetch('data.json')
  .then(response => response.json())
  .then(data => {
    var [work,play,study,exercise,social,selfcare] = data;                  //destructuring the data array
    var containers = [work,play,study,exercise,social,selfcare]             //creating an array of arrays

    $('.daily,.weekly,.monthly').click(function(){
      var clickedState = this.getAttribute('class')                 //for eg daily
      var clickedclass = '.'+clickedState                           //for eg .daily

      var prevName = ""                                             //yesterday, last week thing
      var notStates = ""                                            //classes not clicked

      if(clickedState==='daily') {
        prevName='Yesterday - '
        notStates = '.weekly,.monthly'
      }
      else if(clickedState==='weekly') {
        prevName='Last week - '
        notStates = '.daily,.monthly'
      }
      else if(clickedState==='monthly') {
        prevName='Last month - '
        notStates = '.daily,.weekly'
      }

      $(clickedclass).addClass("active_state")                      //adding css class on clicking the tab
      $(notStates).removeClass("active_state")                      //removing same css class from other two tabs if they were already clicked

      containers.forEach(function(container){
        var containerClass = '.'+container.title
        $(containerClass+" .content_value").html(container['timeframes'][clickedState]['current']+" hrs")
        $(containerClass+" .content_prev").html(prevName + container['timeframes'][clickedState]['previous']+" hrs")
      })

    })
  });
