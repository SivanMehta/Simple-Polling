var polls = {};

exports.init = function(app)
{
    // creating a new poll
    app.get("/createNewPoll/:poll_name", create_poll);

    // getting poll results
    app.get("/:poll_name", get_poll_results);

    // voting in a poll
    app.get("/:poll_name/vote/:choice", vote_on_poll);
}

showName = function(request, response)
{
    response.writeHead(200, {"Content-Type": "text"})

    response.end(request.params.name + " is your name");
}

create_poll = function(request, response)
{
    response.writeHead(200, {"Content-Type": "text"})

    polls[request.params.poll_name] = {};

    response.end("Created poll " + request.params.poll_name);
}

get_poll_results = function(request, response)
{
    if(request.params.poll_name in polls)
    {
        response.writeHead(200, {"Content-Type": "application/json"})
        var json = JSON.stringify(polls[request.params.poll_name]);
        response.end(json);
    }
    else
    {

        response.writeHead(200, {"Content-Type": "text"})

        response.write("There is no poll named " + request.params.poll_name + "\nHere are the current polls\n");
        Object.keys(polls).forEach( function(key)
                                    {
                                        response.write(key + "\n");
                                    });
        response.end("");
    }
}

vote_on_poll = function(request, response)
{
    if(request.params.poll_name in polls)
    {
        var relevant_poll = polls[request.params.poll_name];

        if (request.params.choice in relevant_poll)
        {
            relevant_poll[request.params.choice] += 1;
        }
        else
        {
            relevant_poll[request.params.choice] = 1;
        }

        response.writeHead(200, {"Content-Type": "application/json"})
        var json = JSON.stringify(polls[request.params.poll_name]);
        response.end(json);
    }
    else
    {
        response.writeHead(200, {"Content-Type": "text"})

        response.write("There is no poll named " + request.params.poll_name + "\nHere are the current polls\n");
        Object.keys(polls).forEach( function(key)
                                    {
                                        response.write(key + "\n");
                                    });
        response.end("");
    }
}
