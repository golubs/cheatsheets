Add  
Commit  
Update

Basic Workflow until now

Donts:
Don’t version exe files and (large) binary files
Don’t make „local“ copies of any versioned files. Trust the VCS

THE GOLDEN RULES OF VERSION CONTROL  
No. 5: Never Amend Published Commits
Using the "amend" option is a great little helper that you'll come to appreciate yourself very quickly. However, you'll need to keep the following things in mind when using it:

(a) It can only be used to fix the **very last** commit. Older commits can't be modified with "amend".

(b) You should never "amend" a commit that has already been published / pushed to a remote repository! This is because "amend" effectively produces a completely new commit object in the background that replaces the old one. If you're the only person who had this commit, doing this is safe. However, after publishing the original commit on a remote, other people might already have based new work on this commit. Replacing it with an amended version will cause problems.

**Keine Leerzeichen in Branch-Namen (dann braucht man keine Anführungszeichen)**

Wenn man einen Branch macht, guckt man, was man vorher alles gemacht hat (git status) und man kann auch in die Pending Changes in Source Control schauen.

### On deleting commits

Just like "revert", the "reset" command also doesn't delete any commits. It just makes it look as if they hadn't existed and removes them from the history. However, they are still stored in Git's database for at least 30 days. So if you should ever notice you **accidentally** removed commits you still need, one of your Git expert colleagues will still be able to restore them for you.

### Git Workflow

A commonly used branching workflow in Git is to create a new code branch for each new **feature, bug fix**, or **enhancement**. These are called Feature Branches. Each branch compartmentalizes the commits related to a particular feature. Once the new feature is complete – i.e. a set of changes has been committed on the feature branch – it is ready to be merged back into the master branch (or other main code line branch depending on the workflow in use).

### Behind the scenes of branches

As a brief aside, keep in mind that behind the scenes Git does not actually create a new set of commits to represent the new branch. In Git, a branch is really just a tag. It is a label that we can use to reference a particular string of commits. It would be inefficient to duplicate a set of commits behind the scenes, so Git allows us to create multiple diverging sets of commits from a single base.

### Some commits are on multiple branches at the same time

The commit to which some branch-name points is called the tip commit of that branch. Note that one commit can be the tip of several branches at the same time. This is part of a larger thing about Git: some commits are on many branches, all at the same time. For instance, commit A—the root commit—is on every branch. (It's possible to have more than one root commit in a repository, although it's a bit tricky, and we don't need to worry about that now. You can't do it with the commands shown this far.)
