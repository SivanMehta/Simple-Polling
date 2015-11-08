var current_polls = [];

window.onload = function()
{
    $.ajax(
    {
        url: 'getPolls',
        type: 'GET',
        success: function(result)
        {
            result.forEach(function(poll){ current_polls.push(poll)});
            list_polls();
        }
    });
};

list_polls = function()
{
    // don't have any buttons if there are no polls
    if(current_polls.length == 0){ return }

    // for every poll, create a button and a function to get their results
    for(var i = 0; i < current_polls.length; i ++)
    {
        $("#responseArea").append('<p><a class="btn" id = "poll' + i + '">'+ current_polls[i] + '</a></p>');

        poll_name = $("#poll" + i).text();
        $("#poll" + i).click
        (
            function()
            {
                $.ajax(
                {
                    url: 'polls/' + poll_name,
                    type: 'GET',
                    success: function(result)
                    {
                        console.log(result);
                    }
                });
            }
        );
    }
}