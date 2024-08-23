import { Probot } from "probot";

export default (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  app.on("commit_comment.created", async (context) => { 
    const commit = context.payload.comment.commit_id;
    const repo = context.payload.repository.name;
    const comment = context.payload.comment.body;
    const link = context.payload.comment.html_url;
    app.log.info(`Commit: ${commit} Repo: ${repo} Comment: ${comment} Link: ${link}`);
  })
};
