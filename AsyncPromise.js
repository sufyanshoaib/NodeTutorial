console.log("Before");

getUser(1)
    .then((user) => getRepos(user.username))
    .then( (repos) => getCommits(repos[0]))
    .then( commits => displayCommits(commits))
    .catch(err => console.log('error', err.message));
    

console.log("After");


function displayCommits(commits) {
    console.log("Commits:" + commits[0].title);
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading from API...");
            resolve({id: 1, username: "sufyanshoaib"});
        }, 2000);
    });
}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting repos of :" + username);
            //resolve([{id:1, title:"abc"}, {id:2, title:"xyz"}]);
            reject(new Error("unknown error while getting repos"));
        }, 2000);
    });
    
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting commits of repo:" + repo.title);
            resolve([{id:1, title:"abc"}, {id:2, title:"xyz"}]);
        }, 2000);
    });
    
}