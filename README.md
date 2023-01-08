# simon-login

This deliverable demonstrates authenticating users and storing credentials and authentication tokens in MongoDB.

- Implemented server functions
- Removed navs on home page
- added bootstrap dialog for login

## Study this code

Get familiar with what this code teaches.

- Clone the repository to your development environment.
  ```sh
  git clone https://github.com/webprogramming260/simon-db.git
  ```
- Set up your environment variables with your Atlas credentials.
- Review the code and get comfortable with everything it represents.
- View the code in your browser by hosting it from a VS Code debug session.
- See how data is populated in the database by viewing the contents of the database using the MongoDB Atlas console.
- Make modifications to the code as desired. Experiment and see what happens.

## Make your own version

- Using VS Code, open the `simon` directory for the repository you used for the last Simon assignment.
- Modify the project and add authentication support. Refer to the example class application repository for guidance. Remember that you do not need to create an original work. Just focus on learning the concepts that the example project provides. However, you will learn more if you type everything out, and not just copy and paste the code.
- Set the footer link to point to your code repository. (e.g. https://github.com/yourname/simon)
- Periodically commit and push your code to your repository as you hit different milestones. (4 commits are required for full credit.)
- Periodically deploy to your production environment using a copy of the `deployService.sh` script found in the [example class application](https://github.com/webprogramming260/simon-db/blob/main/deployService.sh). Take some time to understand how it works.

  ```sh
  ./deployService.sh -k <yourpemkey> -h <yourdomain> -s simon
  ```

  For example,

  ```sh
  ./deployService.sh -k ~/keys/production.pem -h yourdomain.click -s simon
  ```

- Update your `start up` repository README.md to record and reflect on what you learned.
- When you have completed your version. Do a final push of your code and deploy to your production environment using the `deployService.sh` script.
- Make sure your project is visible from your production environment (e.g. https://simon.yourdomain.click).
- Submit the URL to your production environment for grading using the Canvas assignment page.

## Grading Rubric

- 20% - Project hosted from your production environment
- 30% - Interface for creating accounts and authenticating users
- 30% - Successfully store users and credentials in your MongoDB Atlas cluster
- 10% - At least four Git commits for the project (Initial, milestone, ..., milestone, final)
- 10% - Notes in your start up repository README.md about what you have learned
