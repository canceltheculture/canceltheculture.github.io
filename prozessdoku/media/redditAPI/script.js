// Get the elements
const postContainer = document.getElementById('post-container');
const latestPost = document.getElementById('latest-post');
const mediaContainer = document.getElementById('media-container');

// Array to store fetched posts
let fetchedPosts = [];

// Function to create a new row with post details
function createPostRow(post) {
  const row = document.createElement('div');
  row.classList.add('row');

  const usernameColumn = document.createElement('div');
  usernameColumn.classList.add('column', 'username');
  usernameColumn.textContent = `u/${post.author}`;

  const subredditColumn = document.createElement('div');
  subredditColumn.classList.add('column', 'subreddit');
  subredditColumn.textContent = `${post.subreddit_name_prefixed}`;

  const postColumn = document.createElement('div');
  postColumn.classList.add('column', 'post');
  postColumn.textContent = post.title;

  const scoreColumn = document.createElement('div');
  scoreColumn.classList.add('column', 'score');
  scoreColumn.textContent = `Score: ${post.score}`;

  const commentCountColumn = document.createElement('div');
  commentCountColumn.classList.add('column', 'comment-count');
  commentCountColumn.textContent = `Comments: ${post.num_comments}`;

  const urlColumn = document.createElement('div');
  urlColumn.classList.add('column', 'post-url');
  urlColumn.innerHTML = `<a href="${post.url}" target="_blank" rel="noopener noreferrer">${post.url}</a>`;

  const goldCountColumn = document.createElement('div');
  goldCountColumn.classList.add('column', 'gold-count');
  goldCountColumn.textContent = `Gold Count: ${post.author_gold_count}`;

  const karmaScoreColumn = document.createElement('div');
  karmaScoreColumn.classList.add('column', 'karma-score');
  karmaScoreColumn.textContent = `Karma Score: ${post.author_karma}`;

  const upvoteRatioColumn = document.createElement('div');
  upvoteRatioColumn.classList.add('column', 'upvote-ratio');
  upvoteRatioColumn.textContent = `Upvote Ratio: ${post.upvote_ratio}`;

  const createdTimeColumn = document.createElement('div');
  createdTimeColumn.classList.add('column', 'created-time');
  const createdDate = new Date(post.created_utc * 1000);
  createdTimeColumn.textContent = `Created: ${createdDate.toLocaleString()}`;

  const awardsColumn = document.createElement('div');
  awardsColumn.classList.add('column', 'awards');
  const awards = post.all_awardings.map(award => award.name).join(', ');
  awardsColumn.textContent = `Awards: ${awards}`;

  const flairColumn = document.createElement('div');
  flairColumn.classList.add('column', 'flair');
  flairColumn.textContent = `Flair: ${post.link_flair_text}`;

  row.appendChild(usernameColumn);
  row.appendChild(subredditColumn);
  row.appendChild(postColumn);
  row.appendChild(scoreColumn);
  row.appendChild(commentCountColumn);
  row.appendChild(urlColumn);
  row.appendChild(goldCountColumn);
  row.appendChild(karmaScoreColumn);
  row.appendChild(upvoteRatioColumn);
  row.appendChild(createdTimeColumn);
  row.appendChild(awardsColumn);
  row.appendChild(flairColumn);

  return row;
}


// Function to fetch multiple posts based on the entered hashtag
async function fetchPosts(hashtag) {
  const response = await fetch(`https://www.reddit.com/search.json?q=${hashtag}&sort=new&limit=10`);
  const data = await response.json();

  if (data.data && data.data.children.length > 0) {
    const newPosts = data.data.children.map(post => post.data);
    const uniquePosts = newPosts.filter(post => !fetchedPosts.find(p => p.id === post.id && p.title === post.title));
    fetchedPosts.push(...uniquePosts);
  }
}

// Function to display a single new post
function displayPost(post) {
  // Clear previous post content, media, and comments
  latestPost.textContent = '';
  mediaContainer.textContent = '';
  document.getElementById('most-upvoted-comment').textContent = '';
  document.getElementById('most-downvoted-comment').textContent = '';

  const newRow = createPostRow(post);
  newRow.setAttribute('data-post-id', post.id);
  postContainer.prepend(newRow); // Add the new post at the top of the container

  // Display the post content
  latestPost.textContent = post.selftext;

  // Display the media
  if (post.url.endsWith('.jpg') || post.url.endsWith('.png') || post.url.endsWith('.gif')) {
    const linkElement = document.createElement('a');
    linkElement.href = post.url;
    linkElement.textContent = post.url;
    mediaContainer.appendChild(linkElement);
  } else if (post.url.includes('youtube.com/watch?v=')) {
    const linkElement = document.createElement('a');
    linkElement.href = post.url;
    linkElement.textContent = post.url;
    mediaContainer.appendChild(linkElement);
  } else if (post.url.includes('reddit.com/gallery/')) {
    const linkElement = document.createElement('a');
    linkElement.href = post.url;
    linkElement.textContent = post.url;
    mediaContainer.appendChild(linkElement);
  } else if (post.url.includes('reddit.com/r/CancelCulture/comments/') && post.is_video) {
    const linkElement = document.createElement('a');
    linkElement.href = post.url;
    linkElement.textContent = post.url;
    mediaContainer.appendChild(linkElement);
  } else if (post.url.endsWith('.mp4') || post.url.endsWith('.webm') || post.url.endsWith('.ogg')) {
    const linkElement = document.createElement('a');
    linkElement.href = post.url;
    linkElement.textContent = post.url;
    mediaContainer.appendChild(linkElement);
  } else {
    const linkElement = document.createElement('a');
    linkElement.href = post.url;
    linkElement.textContent = post.url;
    mediaContainer.appendChild(linkElement);
  }

  // Display comments
  displayComments(post.id);

  // Display additional information in right column
  document.getElementById('score').textContent = `Score: ${post.score}`;
  document.getElementById('comments').textContent = `Comments: ${post.num_comments}`;
  document.getElementById('post-url').innerHTML = `Post URL: <a href="${post.url}" target="_blank" rel="noopener noreferrer">${post.url}</a>`;
  document.getElementById('gold-count').textContent = `Gold Count: ${post.author_gold_count}`;
  document.getElementById('karma-score').textContent = `Karma Score: ${post.author_karma}`;
  document.getElementById('upvote-ratio').textContent = `Upvote Ratio: ${post.upvote_ratio}`;
  const createdDate = new Date(post.created_utc * 1000);
  document.getElementById('created-time').textContent = `Created Time: ${createdDate.toLocaleString()}`;
  document.getElementById('awards').textContent = `Awards: ${post.all_awardings.map(award => award.name).join(', ')}`;
  document.getElementById('flair').textContent = `Flair: ${post.link_flair_text}`;
}



// Function to fetch and display the most upvoted and downvoted comments of a post
async function displayComments(postId) {
  const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
  const data = await response.json();

  if (data[1].data.children.length > 0) {
    const comments = data[1].data.children;

    const sortedComments = comments.sort((a, b) => b.data.score - a.data.score);

    const mostUpvotedComment = sortedComments[0].data.body;
    const mostDownvotedComment = sortedComments[sortedComments.length - 1].data.body;

    document.getElementById('most-upvoted-comment').textContent = mostUpvotedComment;
    document.getElementById('most-downvoted-comment').textContent = mostDownvotedComment;
  }
}

// Function to continuously fetch and display new posts based on the entered hashtag
async function startPostRefresh() {
  while (true) {
    const hashtag = hashtagInput.value.trim();
    if (hashtag.length > 0) {
      await fetchPosts(hashtag);
      if (fetchedPosts.length > 0) {
        const randomPost = fetchedPosts.shift();
        displayPost(randomPost);
      }
    }
    if (fetchedPosts.length === 0) {
      await fetchPosts(hashtagInput.value.trim());
    }
    await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
  }
}

// Event listener for the input field
const hashtagInput = document.getElementById('hashtag-input');
hashtagInput.addEventListener('input', function () {
  const hashtag = this.value.trim();
  postContainer.innerHTML = ''; // Clear previous posts
  if (hashtag.length > 0) {
    fetchedPosts = []; // Clear the fetched posts array
    fetchPosts(hashtag);
  }
});

// Call the startPostRefresh function to begin fetching and displaying posts
startPostRefresh();

// Automatically search for the hashtag "cancelculture" when the page is opened
window.addEventListener('DOMContentLoaded', () => {
  const initialHashtag = 'cancelculture';
  hashtagInput.value = initialHashtag;
  fetchedPosts = []; // Clear the fetched posts array
  fetchPosts(initialHashtag)
    .then(() => {
      if (fetchedPosts.length > 0) {
        const randomPost = fetchedPosts.shift();
        displayPost(randomPost);
      }
    });
});
