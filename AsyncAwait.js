console.log("Before");

//Async calls in sync way, by decorating the function with async modifier
//and decorating each calls  with await that waits for the promise result
async function getAndDisplayCommits() {
    try {
        console.log("After start of async function");
        const user = await getUser(1);   
        console.log("After geting user func");
        const repos = await getRepos(user.username);
        console.log("After geting repos func");
        const commits = await getCommits(repos[0]);
        console.log("After geting commits func");
        displayCommits(commits);
    } catch (e) {
        //We need to wrap these await calls in try catch block for getting the errors, unlike promise there is now .catch() function
        console.log("error occured:", e.message);
    }
}
console.log("After");


getAndDisplayCommits();


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