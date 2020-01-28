console.log("Before");

getUser(1111, getReposFn);

console.log("After");

function getReposFn(user) {
    getRepos(user.username, getCommitsFn)
}

function getCommitsFn(repos) {
    getCommits(repos[0], displayCommits);
}
function displayCommits(commits) {
    console.log("Commits:" + commits[0].title);
}


function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading from API...");
        callback({id: 1, username: "sufyanshoaib"});
    }, 2000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log("getting repos of :" + username);
        callback([{id:1, title:"abc"}, {id:2, title:"xyz"}]);
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log("getting commits of repo:" + repo.title);
        callback([{id:1, title:"abc"}, {id:2, title:"xyz"}]);
    }, 2000);
}