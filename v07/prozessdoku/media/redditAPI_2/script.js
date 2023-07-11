const postContainer = document.getElementById('post-container');
const latestPost = document.getElementById('latest-post');
const mediaContainer = document.getElementById('media-container');

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

  row.appendChild(usernameColumn);
  row.appendChild(subredditColumn);
  row.appendChild(postColumn);

  return row;
}

async function fetchAndDisplayPost(hashtag) {
  const response = await fetch(`https://www.reddit.com/r/all/search.json?q=${hashtag}&sort=new`);
  const data = await response.json();

  if (data.data && data.data.children.length > 0) {
    const posts = data.data.children;

    const existingPosts = Array.from(postContainer.children).map(row => row.getAttribute('data-post-id'));

    const uniquePosts = posts.filter(post => !existingPosts.includes(post.data.id));

    if (uniquePosts.length > 0) {
      latestPost.textContent = '';
      mediaContainer.textContent = '';
      document.getElementById('most-upvoted-comment').textContent = '';
      document.getElementById('most-downvoted-comment').textContent = '';

      const randomPost = uniquePosts[Math.floor(Math.random() * uniquePosts.length)].data;
      const newRow = createPostRow(randomPost);
      newRow.setAttribute('data-post-id', randomPost.id);
      postContainer.prepend(newRow); // Add the new post at the top of the container

      latestPost.textContent = randomPost.selftext;

if (randomPost.url.endsWith('.jpg') || randomPost.url.endsWith('.png') || randomPost.url.endsWith('.gif')) {
  const imgElement = document.createElement('img');
  imgElement.src = randomPost.url;
  imgElement.className = 'image'; // Apply the 'image' class to the image
  mediaContainer.appendChild(imgElement);
} else if (randomPost.url.includes('youtube.com/watch?v=')) {
  const videoId = randomPost.url.split('v=')[1];
  const iframeElement = document.createElement('iframe');
  iframeElement.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  mediaContainer.appendChild(iframeElement);
} else if (randomPost.url.includes('reddit.com/gallery/')) {
  const iframeElement = document.createElement('iframe');
  iframeElement.src = randomPost.url;
  iframeElement.className = 'reddit-gallery'; // Apply a specific class for Reddit gallery
  mediaContainer.appendChild(iframeElement);
} else if (randomPost.url.includes('reddit.com/r/CancelCulture/comments/') && randomPost.is_video) {
  const videoElement = document.createElement('video');
  videoElement.src = randomPost.media.reddit_video.fallback_url;
  videoElement.autoplay = true;
  videoElement.controls = true;
  videoElement.className = 'video'; // Apply the 'video' class to the video
  mediaContainer.appendChild(videoElement);
} else if (randomPost.url.endsWith('.mp4') || randomPost.url.endsWith('.webm') || randomPost.url.endsWith('.ogg')) {
  const videoElement = document.createElement('video');
  videoElement.src = randomPost.url;
  videoElement.autoplay = true;
  videoElement.controls = true;
  videoElement.className = 'video'; // Apply the 'video' class to the video
  mediaContainer.appendChild(videoElement);
} else {
  const linkElement = document.createElement('a');
  linkElement.href = randomPost.url;
  linkElement.textContent = randomPost.url;
  mediaContainer.appendChild(linkElement);
}




      displayComments(randomPost.id);
    }
  }
}

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

const hashtagInput = document.getElementById('hashtag-input');
hashtagInput.addEventListener('input', function () {
  const hashtag = this.value.trim();
  postContainer.innerHTML = ''; // Clear previous posts
  if (hashtag.length > 0) {
    fetchAndDisplayPost(hashtag);
  }
});

async function startPostRefresh() {
  while (true) {
    const hashtag = hashtagInput.value.trim();
    if (hashtag.length > 0) {
      fetchAndDisplayPost(hashtag);
    }
    await new Promise(resolve => setTimeout(resolve, 4000)); // Wait for 10 seconds
  }
}

startPostRefresh();

window.addEventListener('DOMContentLoaded', () => {
  const initialHashtag = 'cancelculture';
  hashtagInput.value = initialHashtag;
  fetchAndDisplayPost(initialHashtag);
});
