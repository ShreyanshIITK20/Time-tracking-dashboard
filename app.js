fetch('data.json')
  .then(response => response.json())
  .then(data => {
    var [work,play,study,exercise,social,selfcare] = data;
    console.log(work)
    $('.daily').click(function(){
        $('.daily').addClass("active_state")
        $('.weekly,.monthly').removeClass("active_state")
        
        $('.work .content_value').html(work.timeframes.daily.current+" hrs")
        $('.work .content_prev').html("Yesterday - "+work.timeframes.daily.previous+" hrs")

        $('.play .content_value').html(play.timeframes.daily.current+" hrs")
        $('.play .content_prev').html("Yesterday - "+play.timeframes.daily.previous+" hrs")

        $('.study .content_value').html(study.timeframes.daily.current+" hrs")
        $('.study .content_prev').html("Yesterday - "+study.timeframes.daily.previous+" hrs")

        $('.exercise .content_value').html(exercise.timeframes.daily.current+" hrs")
        $('.exercise .content_prev').html("Yesterday - "+exercise.timeframes.daily.previous+" hrs")

        $('.social .content_value').html(social.timeframes.daily.current+" hrs")
        $('.social .content_prev').html("Yesterday - "+social.timeframes.daily.previous+" hrs")

        $('.selfcare .content_value').html(selfcare.timeframes.daily.current+" hrs")
        $('.selfcare .content_prev').html("Yesterday - "+selfcare.timeframes.daily.previous+" hrs")
    })

    $('.weekly').click(function(){ 
        $('.weekly').addClass("active_state")
        $('.daily,.monthly').removeClass("active_state")

        $('.work .content_value').html(work.timeframes.weekly.current+" hrs")
        $('.work .content_prev').html("Last week - "+work.timeframes.weekly.previous+" hrs")

        $('.play .content_value').html(play.timeframes.weekly.current+" hrs")
        $('.play .content_prev').html("Last week - "+play.timeframes.weekly.previous+" hrs")

        $('.study .content_value').html(study.timeframes.weekly.current+" hrs")
        $('.study .content_prev').html("Last week - "+study.timeframes.weekly.previous+" hrs")

        $('.exercise .content_value').html(exercise.timeframes.weekly.current+" hrs")
        $('.exercise .content_prev').html("Last week - "+exercise.timeframes.weekly.previous+" hrs")

        $('.social .content_value').html(social.timeframes.weekly.current+" hrs")
        $('.social .content_prev').html("Last week - "+social.timeframes.weekly.previous+" hrs")

        $('.selfcare .content_value').html(selfcare.timeframes.weekly.current+" hrs")
        $('.selfcare .content_prev').html("Last week - "+selfcare.timeframes.weekly.previous+" hrs")
    })

    $('.monthly').click(function(){
        $('.monthly').addClass("active_state")
        $('.weekly,.daily').removeClass("active_state")
        
        $('.work .content_value').html(work.timeframes.monthly.current+" hrs")
        $('.work .content_prev').html("Last month - "+work.timeframes.monthly.previous+" hrs")

        $('.play .content_value').html(play.timeframes.monthly.current+" hrs")
        $('.play .content_prev').html("Last month - "+play.timeframes.monthly.previous+" hrs")

        $('.study .content_value').html(study.timeframes.monthly.current+" hrs")
        $('.study .content_prev').html("Last month - "+study.timeframes.monthly.previous+" hrs")

        $('.exercise .content_value').html(exercise.timeframes.monthly.current+" hrs")
        $('.exercise .content_prev').html("Last month - "+exercise.timeframes.monthly.previous+" hrs")

        $('.social .content_value').html(social.timeframes.monthly.current+" hrs")
        $('.social .content_prev').html("Last month - "+social.timeframes.monthly.previous+" hrs")

        $('.selfcare .content_value').html(selfcare.timeframes.monthly.current+" hrs")
        $('.selfcare .content_prev').html("Last month - "+selfcare.timeframes.monthly.previous+" hrs")
    })
  });
