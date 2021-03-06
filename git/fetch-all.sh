#!/bin/bash

# Default git directory
git_dir=~/git
# Default remote
git_remote="origin"

function helpmenu {
    echo "USAGE EXAMPLE:"
    echo "    fetch-all.sh ~/directory_of_git_repos origin"
}

function setDir {
    if [[ $checkDir != "" ]]; then
        # Path is passed as first argument
        ls $checkDir 1>&2
        if [[ $? != 0 ]]; then
            # Path isn't valid
            echo "Cannot access $1: No such directory"
            exit
        fi
        git_dir=$checkDir
    fi
}

function setRemote {
    if [[ $checkRemote != "" ]]; then
        # Second argument is not empty
        # (Should contain a branch)
        git_remote=$checkRemote
    fi
}

while getopts "hd:r:" OPTION
do
    case $OPTION in
        h)
            helpmenu
            exit
            ;;
        d)
            checkDir=$OPTARG
            setDir
            # break
            ;;
        r)
            checkRemote=$OPTARG
            setRemote
            # break
            ;;
        \?)
            helpmenu
            exit
            ;;
    esac
done

echo "Changing directory to $git_dir"
cd $git_dir

for dir in */; do
    echo "=========================================="
    echo $dir
    cd $dir
    echo "---"
    echo "git fetch"
    git fetch
    if [[ $? != 0]]; then
        echo "Not a git repo -> $dir"
        continue;
    fi
    echo "---"
    echo "git rev-parse --abbrev-ref HEAD"
    current_branch=`git rev-parse --abbrev-ref HEAD`
    echo "current_branch = $current_branch"
    echo "---"
    echo "git rebase $git_remote/$current_branch"
    git rebase $git_remote/$current_branch
    if [[ $? != 0 ]]; then
        echo "---"
        echo "git stash"
        git stash
        echo "---"
        echo "git rebase $git_remote/$current_branch"
        git rebase $git_remote/$current_branch
        second_attempt=$?
        echo "---"
        echo "git stash pop"
        git stash pop
    fi
    if [[ second_attempt == 1 ]]; then
        echo "Yo dawg, your repo ($dir.git) has problems.."
    fi
    echo "---"
    echo "cd .."
    cd ..
done;
