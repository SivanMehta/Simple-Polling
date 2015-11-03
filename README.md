# Simple Polling

This is a simple Node.js app used to easily make polls. Right now it works purely through an URL API and text responses. Hopefully I can make it work like a proper app should.

## Usage

#### Landing Page
```URL
/
```
The landing page for the app. Just displays the current polls running

#### Creating a Poll
```
/createNewPoll/movies
```
Creates a new poll named `movies`, it is initialized with no data, or simply `{}`.

#### Voting
```
/movies/vote/superbad
```
This inputs 1 vote for the movie `superbad`, you will then see something like this upon loading the page.

```
{"superbad":1}
```
**Note:** everytime you visit the URL, you cast an additional vote


#### Viewing Results

```
/movies
```
If `movies` has been created, you can see the votes made, otherwise you get a list of actual polls running

#### Example Polls
```
/populate_example
```
You can create two example polls, `election` and `ideal vacation` by visiting this URL.

## Future Tasks

*Provided I ever get here*

1. Move URL interface to buttons
2. Use some CSS framework to make polling more easy on the eyes
3. Prevent duplicate poll usage
4. Ability to delete polls
5. Authentication/Authorization (stretch until end of semester when I know how to do this)
