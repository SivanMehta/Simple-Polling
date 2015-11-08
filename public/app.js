var current_polls = [];

window.onload = function()
{
    $.ajax(
    {
        url: 'getPolls',
        type: 'GET',
        success: function(result)
        {
            current_polls = result;

            list_polls();
        }
    });
};

list_polls = function()
{
    for(var i = 0; i < current_polls.length; i ++)
    {
        $("#responseArea").append('<p><a class="btn" id = "poll' + i + '">'+ current_polls[i] + '</a></p>');

        $("#poll" + i).click
        (
            function()
            {
                alert("clicked " + current_polls[i]);
            }
        );
    }
}