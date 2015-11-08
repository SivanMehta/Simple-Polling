window.onload = function()
{
    $.ajax(
    {
        url: 'getPolls',
        type: 'GET',
        success: function(result)
        {
            for(var i = 0; i < result.length; i ++)
            {
                $("#responseArea").append('<a class="waves-effect waves-light btn">'+ result[i] + '</a><br />')
            }
        }
    });
};