## M3-MOVIE-APP – Instructions


## Step 1 - Clone Repo & Install node_modules Locally

    a. Do NOT create a feature branch yet.
    b. Open the movie-app folder in Terminal
    c. Run npm install

## Step 2 - Create a Feature Branch
(Please NEVER code directly on the Main or Staging branches.)

**How to Create a Feature Branch:**

Ensure staging is up to date then create the feature off of that.

    a. Switch to Staging Branch:         git checkout staging
    b. Fetch Changes:                    git fetch --prune
    c. Merge Updates:                    git merge origin/staging
    d. Feature Branch Name Example:      mike/feature/add-api-logic
    e. Create Feature Branch:            git checkout -b yourFirstName/feature/name-of-feature

Pushing Your Branch with Upstream:

    a. Add your files:                   git add .                               (all files)
                                         git add index.html css/style.css        (individual files) 

    b. Descriptive Commit Message:       git commit -m "a brief explanation of the changes/updates."
    Note: 
        - When making a PR on GitHub, please add a more in depth description of what was changed/updated

    c. Set Upstream / First Push:        git push -u origin yourFirstName/feature/name-of-feature.
    Note:                           
        - Required ONCE on the FIRST Push of each NEW branch. 
        - It Links your local branch with a new branch on Github           
                                  
    d. Future Pushes:                    git push                                                   
    Note: 
        - After setting the upstream, you can just type the 'git push' command since it's already linked to GitHub

## Step 3 - PULL REQUESTS (PR) on Github

Once you push your feature to GitHub you need to make a PR.

    a. Open GitHub Repo:                 https://github.com/mtq01/m3-movie-app/tree/main
    
    b. Select the Base:                  Change 'main' to 'staging'
    
    c. Assign Reviewer:                  On the right side, click the Gear Icon & Select a Team Member
    
    d. Honor System:                     - No one is allowed to merge their own PR! (A rule was set on GitHub requiring a reviewer)
                                         - Mention your Pull Request in the Discord Group Chat
                                         - Wait for another member of M3 to review & hit 'Approve & Merge'
    
    e. Post Merge:                       - Whoever approves/denies the merge needs to let everyone know ASAP.
                                         - Send a msg using @name on Discord
                                         - Everyone needs to pull the latest changes to ASAP.
                                         - All members need to confirm they pulled the lastest changes.

## Pulling Changes Locally
[IMPORTANT]: When a PR is merged on GitHub, our local feature branches become "out of date." To avoid headaches later, update your active branches immediately. If you are working on multiple features, repeat the Merge and Stash Pop steps for each one.

**STASH**: Moves your uncommitted changes into a temporary storage box so they don't get tangled up or deleted during a merge. It's essentially a local "save" option that's used when you arent ready to commit, but need to save.

**f. Pulling Latest Changes (The Workflow)**

*there are faster ways, but we are doing everything manually step by step to practice Git commands*

- `git stash push -m "Saving work before update"`     (from your feature branch, protects your work before pulling changes!)

- `git checkout staging`                              (switch to your local copy of staging)

- `git fetch --prune`                           (view changes to staging before merging & prune any deleted branches)

- `git merge origin/staging`

- `git checkout your/feature/branch`                  (go back to the feature you are actually building.)

- `git fetch`                                         (view changes, `--prune` is not needed here bcuz we did that previously)

- `git merge origin/staging`                          (pour the fresh server code into your feature branch.)

- `git stash pop`                                     (brings your work back onto the new code from the stash.)

_Scroll Down to see an alternative method (its optional, but shorter and safer and replaces `pop` with `apply`)_




**Key Details**

**fetch:** Reaches out to GitHub and makes a "photocopy" of all team updates. It does not touch your actual code files, making it 100% safe to run anytime.

**--all:** Tells Git to map every single branch on the server, ensuring you don't miss new work from teammates. (technically not needed since we aren't using forks in our repo, but it's still valid)

**--prune:** Cleans up "ghost" branches. If a teammate deleted a branch on GitHub after a merge, this removes it from your local list so it stays clean.

**merge:** Actually combines the "photocopy" (the server code) into your current file.

**origin/staging:** origin is the server (GitHub). By merging origin/staging instead of just staging, you are guaranteed to get the official, clean version of the code.

### Merge Conflicts

1. If you get a merge conflict, dont panic.

2. **Follow these steps (or ask me):**
Pick a winner: VSCode will give you buttons at the top of the conflict:
    - **Accept Current Change:** Keeps your version.
    - **Accept Incoming Change:** Keeps the staging version. 
    - **Accept Both:** Keeps both (you'll have to clean up the order).
    - **Save and Commit:** Once the scary "red" is gone, save the file, stage it (git add .), and commit the fix.


**Extras (Optional):**        

- Peek a specific file in terminal. Handy if you know which file you want to look at. It will print the content of the file directly in terminal withour changing your current workspace:
                                    
`git show origin/name/feature/name-of-feature:path/to/file.css`

- Peek what changed. See what was added/removed compared to what you have right now. 'head' is the shortcut for 'where you are right now', '..' means compare against, and 'origin/staging' is the photocopy of the server you downloaded:

`git diff HEAD..origin/name/feature/name-of-feature`      (shows all code changes)

- Alternative ways to "peek" and the differences.

`git diff HEAD..origin/staging --name-only`               (shows the file name changes)
`git log HEAD..origin/staging`                            (shows the list of commits)

- If the changes are too complex to read in terminal, you can open the files in your editor to see how they work (You can view/edity our collaboraters features, but please dont make changes to your team members code without permission):

`git checkout origin/name/feature/name-of-feature`

## Alternative Method for Pulling Changes (optional / safer) 
_(Merge conflicts can happen regardless of which pull method you use)_

`git stash`                             save current progress (of your feature)
`git fetch origin staging:staging`      updates local `staging` branch without switching branches
`git merge staging`                     brings staging changes into your feature
`git stash apply`                       applies your stashed changes. (if conflict, review instructions below)
`git stash drop`                        if no conflict, run the drop command to delete your stashed photocopy of your feature

_dont run the `drop` command until you confirmed that your changes were applied._

**Details**
(`apply` is safer than `pop` bcuz it acts as a copy & paste rather than cut & paste) 

- `pop` takes your changes out of the _stash_ and tries to merge. if the merge fails and you mess up the solution, your save point is gone!
- `apply` is safer bcuz it applies a copy of your changes to your branch but keeps the original safely in your stash list.

_if you run into a big conflict after using `apply` and realize you deleted the wrong code, you can run `git reset --hard` to undue the mess and `apply` it again bcuz a photocopy of your changes is still stored in the **stash**_

### !!!!!! Merge Conflict - How To Fix:
- VSCode will alert you of the issues, open the conflicted files.
- [manual fix] delete the markers `<<<<`, `====` `>>>>` and fix the code
- [tool fix] use the _conflict_ view and either `Accept Incoming Change`, `Accept Current Change`, or `Accept Both`
- once the code is fixed run `git add <filename>` and `git commit -m "resolved merge conflict..."

**Stash List Details:**

- View whats inside your **stash list**:         `git stash list`
- Multiple stashes will look like:               `stash@{0}`, `stash@{1}` etc.
- Inspect a stash:                               `git stash show -p stash@{0}` (-p means patch & will show you which lines of code changed)

_if you make a mistake and delete the wrong lines during a **merge conflict**, do this:_
- wipe the conflicted files:                     `git reset --hard`
- start over with a using your stashed files:    `git stash apply`

**Naming Your Stashes (Optional, good practice):**
_makes your stash list easier to read later_

- `git stash save "name-of-stash"`
   
   



**g. Delete Merged Branches              (OPTIONAL)**
            Locally                      - `git branch -d yourName/feature/feature-name`       
            Delete on GitHub             - `https://github.com/mtq01/m3-movie-app/branches (click trashcan bside branch)`
            Prune 'Ghost' References     - `git fetch --prune`

_Note: IF we did delete the Branches on GitHub and Locally, we would also need to run the'--prune' command to clean up any 'ghost' references. Our computer still thinks the branch exists until we prune it._
                                         
                                         
**Tips on Deleting a Local Branch:**

a. What if you need to make changes to that feature later on?
    
    If the Pull Request has NOT been merged:
        - You wouldn't delete the branch in the first place because it has not been saved to GitHub.
        - Stay on your branch, make changes as needed, push the new changes are complete and make a new PR.

    If the Pull Request HAS been merged:
        - Don't try to revive the old branch.
        - Switch to the 'staging' branch locally and pull the latest updates.
        - Create a NEW feature branch for the changes:
                git checkout -b yourName/feature/name-of-feature-v2
        - Make your changes, push to GitHub, and open a new pull request to staging.

    The 'Golden Rule' of Branches:
        - You write your idea on a 'sticky-note'.
        - Stick the note on the board (GitHub PR)
        - Once its merged to 'staging' or 'main', you throw the sticky-note away.

## Step 4 - Merging STAGING to MAIN

We only merge from 'staging' to 'main' when we reach a stable milestone. Don't do this without confirming with the team.

    Stable Milestones: (Examples)
        
        1. Minimum Viable Product:
            - Main Page
            - Search Bar Logic          (user can type a movie and see a result)
            - Nav Component             (no routing)
            - Movie Card Components     (favorites/links do not need to work)
            - Carousel Component
            - Footer Component
            - Social Links              (outbound linking does not need to work)
            - Layout is responsive      (mobile/desktop)
            - Trailer                   (clicking watch now opens the trailer)
            - API Key securely handled via .env
        
        2. Milestone 2:
            - Clicking a movie card passes the ID to the details page.
            - Details Page              (shows details)
            - Back Button               (works without crashing the app)

        3. Milestone 3:
            - Favorites Page            
            - Favorites Logic           (clicking the fav button adds/removes the movie from the favorites page)
            - Memory                    (movies stay on fav page after the page is resfreshed)
            - Navigation                (add routing between all pages & ensure no errors)



