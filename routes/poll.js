var Chance = require("chance");
var chance = new Chance();

var polls = {};

exports.init = function(app)
{
    // get all polls
    app.get("/getPolls", get_all_polls);

    // creating a new poll
    app.post("/createNewPoll/:poll_name", create_poll);

    // populate an example
    app.get("/populate_example", populate_data);

    // getting poll results
    app.get("/polls/:poll_name", get_poll_results);

    // voting in a poll
    app.get("/polls/:poll_name/vote/:choice", vote_on_poll);
}

list_polls = function()
{
    var list_of_polls = [];
    Object.keys(polls).forEach( function(key)
                                {
                                    list_of_polls.push(key);
                                });

    return list_of_polls;
}

get_all_polls = function(request, response)
{
    response.send(list_polls());
}

create_poll = function(request, response)
{
    response.writeHead(200, {"Content-Type": "text"});

    polls[request.params.poll_name] = {};

    response.end("Created poll " + request.params.poll_name);
}

get_poll_results = function(request, response)
{
    var desired_poll = request.params.poll_name;

    var max_votes = 0;
    var total_votes = 0;

    var poll_data = polls[desired_poll];

    try
    {
        Object.keys(poll_data).forEach(  function(item)
        {
            var votes_for = poll_data[item];
            total_votes += votes_for;

            if(votes_for > max_votes)
            {
                max_votes = votes_for;
            }
        });
    }
    catch(err)
    {
        poll_data = {};
    }

    response.render('poll', {
        poll_data: poll_data,
        poll_name: desired_poll,
        total_votes: total_votes,
        max_votes: max_votes
        });
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
        list_polls(response);
        response.end("");
    }
}

populate_data = function(request, response)
{
    response.writeHead(200, {'Content-Type' : 'text'})
    response.write("Populating election poll... ");

    polls["election"] = {};
    // create candidates and get a random number of votes
    for(var i = 0; i < 10; i ++)
    {
        var candidate = chance.name();
        var votes = chance.integer({min: 0, max: 1000});

        polls["election"][candidate] = votes;
    }

    response.write("done!\n");

    response.write("Populating ideal vacation poll... ");

    polls["ideal vacation"] = {};
    // create candidates and get a random number of votes
    for(var i = 0; i < 10; i ++)
    {
        var candidate = chance.country({ full: true });
        var votes = chance.integer({min: 0, max: 1000});

        polls["ideal vacation"][candidate] = votes;
    }

    response.end("done!")
}
