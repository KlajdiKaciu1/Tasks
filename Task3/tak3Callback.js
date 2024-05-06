const userData1= {
    UserId: 456,
    name: 'ABC',
    surname: 'ABC'
};
const userData2={
    UserId:123,
    name:'DEF',
    surname:'DEF'
};
const userData3={
    UserId:789,
    name:'GHI',
    surname:'GHI'
};
const userPosts = [
    {  userId: 123, subject: 'Math', grade: 7 },
    {  userId: 123, subject: 'English', grade: 8 },
    {  userId: 123, subject: 'Physics', grade: 9 },
    {  userId: 456, subject: 'English', grade: 8 },
    {  userId: 456, subject: 'Physics', grade: 9 },
    {  userId: 456, subject: 'Math', grade: 9 },
    {  userId: 789, subject: 'English', grade: 10 },
    {  userId: 789, subject: 'Math', grade: 7 },
    {  userId: 789, subject: 'Physics', grade: 9 },
];
function fetchUserData(callback) {
    setTimeout(() => {
        callback(userData3);
    }, 3000); 
    return userData3.UserId;
}
function fetchUserPosts(userId, callback) {
    setTimeout(() => {
        const posts = userPosts.filter(post => post.userId == userId);
        callback(posts);
    }, 4000); 
}
function printUserData(userData) {
    console.log('Print user data:', userData);
}
function printUserPosts(posts) {
    console.log('Print user posts:', posts);
  
}
let id=fetchUserData(printUserData);
fetchUserPosts(id, printUserPosts);