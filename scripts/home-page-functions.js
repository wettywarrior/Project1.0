const followingAccountsContainer = document.querySelector(".following-accounts");
followingAccountsContainerDisplay = true
const sidebarFollowingDownArrow = document.querySelector(".sidebar-following-down-arrow");
const sidebarFollowingUpArrow = document.querySelector(".sidebar-following-up-arrow");


document.querySelector(".sidebar-following-button").addEventListener("click", function () {

    if(followingAccountsContainerDisplay === true){
      followingAccountsContainer.style.display = "none"
      followingAccountsContainerDisplay = false
      sidebarFollowingDownArrow.style.display = "none";
      sidebarFollowingUpArrow.style.display = "block";
    } else {
      followingAccountsContainer.style.display = "block";
      followingAccountsContainerDisplay = true
      sidebarFollowingDownArrow.style.display = "block";
      sidebarFollowingUpArrow.style.display = "none";
    }

});



const SuggestedAccountsContainer = document.querySelector('.suggested-feed');

document.querySelector(".suggested-feed-close-button").addEventListener("click", function () {
    SuggestedAccountsContainer.style.display = "none";
});


