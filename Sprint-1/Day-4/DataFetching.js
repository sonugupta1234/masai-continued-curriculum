
function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    const userData = "User data received";
    console.log(userData);
    callback(); 
  }, 1000); 
}


function fetchUserPosts(callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    const postsData = "User posts received";
    console.log(postsData);
    callback(); 
  }, 1500); 
}


fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
