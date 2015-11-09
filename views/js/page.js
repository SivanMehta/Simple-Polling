$(function()
{
    $("#create_new_entry").click
    (
        function()
        {
            var poll_name = $("h1").text();

            var choice = window.prompt("What is your choice?");

            $.ajax({
                url: '/polls/' + poll_name + "/vote/" + choice,
                type: "POST",
                success: function(result)
                {
                    location.reload();
                }
            });
        }
    )
});
