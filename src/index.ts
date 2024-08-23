import { Probot } from "probot";

export default (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  app.on("commit_comment", async (context) => { 
    //I want to grab the commit 
    const commit = context.payload.comment.commit_id;
    //I want to grab the repo
    const repo = context.payload.repository.name;
    //I want to grab the comment
    const comment = context.payload.comment.body;
    console.log(commit, repo, comment);
  })
};
