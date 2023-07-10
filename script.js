window.addEventListener('DOMContentLoaded', () => {
  const overlayLoading = document.getElementById('overlay-loading');
  const loadingAnimation = document.getElementById('loading-animation');

  const text = '.. LOADING ..';
  let index = 0;

  function typeText() {
    loadingAnimation.textContent = text.substring(0, index);
    loadingAnimation.classList.add('typing-animation'); 

    if (index < text.length) {
      index++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(fadeOut, 1000);
    }
  }

  function fadeOut() {
    overlayLoading.classList.add('fade-out');
    setTimeout(() => {
      overlayLoading.style.display = 'none';
    }, 1000);
  }

  typeText();
});



 const pausePlayToggle = document.getElementById('pause-play');
    pausePlayToggle.addEventListener('change', handlePausePlay);

    let isPaused = false;
    let requestInterval;

   function handlePausePlay() {
  isPaused = !isPaused; 


  if (isPaused) {
    postsArray = [];
    clearInterval(requestInterval); 
    
  } else {
    postsArray = [];
    fetchAndStorePosts(); 
    requestInterval = setInterval(fetchAndStorePosts, fetchInterval); 
  }
}

async function fetchTrendingPosts() {
  const searchQuery = 'cancel culture';
  const limit = 100;
  const timeRange = '1w'; 

  const response = await fetch(`https://www.reddit.com/search.json?q=${searchQuery}&sort=top&t=${timeRange}&limit=${limit}`);
  const data = await response.json();

 
  const titles = data.data.children.map(post => post.data.title);
  const combinedText = titles.join(' '); 

  const doc = nlp(combinedText); 
  let names = doc.people().out('array'); 


  names = names.map(name => {
    if (!name.startsWith('Dr.')) {
      return name.replace(/[^a-zA-Z\s].*$/, '');
    }
    return name;
  });

  const uniqueNames = [...new Set(names)]; 
  const randomNames = getRandomElements(uniqueNames, 4);

  console.log('Random Names:', randomNames);
  console.log('Modified Names:');
  console.log(`Name 1: ${randomNames[0]} (Modified: ${modifyName(randomNames[0])})`);
  console.log(`Name 2: ${randomNames[1]} (Modified: ${modifyName(randomNames[1])})`);
  console.log(`Name 3: ${randomNames[2]} (Modified: ${modifyName(randomNames[2])})`);
  console.log(`Name 4: ${randomNames[3]} (Modified: ${modifyName(randomNames[3])})`);


  const modifiedName1Element = document.getElementById('modified-name1');
  modifiedName1Element.textContent = `#${modifyName(randomNames[0])}`;

  const modifiedName2Element = document.getElementById('modified-name2');
  modifiedName2Element.textContent = `#${modifyName(randomNames[1])}`;

  const modifiedName3Element = document.getElementById('modified-name3');
  modifiedName3Element.textContent = `#${modifyName(randomNames[2])}`;

  const modifiedName4Element = document.getElementById('modified-name4');
  modifiedName4Element.textContent = `#${modifyName(randomNames[3])}`;

    const modifiedName5Element = document.getElementById('modified-name5');
  modifiedName5Element.textContent = '#Rammstein';

      const modifiedName6Element = document.getElementById('modified-name6');
  modifiedName6Element.textContent = '#Budlight';

  const modifiedName7Element = document.getElementById('modified-name7');
modifiedName7Element.textContent = `#${modifyName('kills freedom')}`;

const modifiedName8Element = document.getElementById('modified-name8');
modifiedName8Element.textContent = `#${modifyName('justice')}`;

const modifiedName9Element = document.getElementById('modified-name9');
modifiedName9Element.textContent = `#${modifyName('Joe Rogan')}`;

const modifiedName10Element = document.getElementById('modified-name10');
modifiedName10Element.textContent = `#${modifyName('Ellen DeGeneres')}`;

const modifiedName11Element = document.getElementById('modified-name11');
modifiedName11Element.textContent = `#${modifyName('BDS Movement')}`;

const modifiedName12Element = document.getElementById('modified-name12');
modifiedName12Element.textContent = `#${modifyName('Kanye West')}`;



modifiedName1Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = `cancel ${modifyName(randomNames[0])}`;
  handleHashtagChange(); 
});

modifiedName2Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = `cancel ${modifyName(randomNames[1])}`;
  handleHashtagChange(); 
});

modifiedName3Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = `cancel ${modifyName(randomNames[2])}`;
  handleHashtagChange(); 
});

modifiedName4Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = `cancel ${modifyName(randomNames[3])}`;
  handleHashtagChange(); 
});

modifiedName5Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = `cancel Rammstein`;
  handleHashtagChange(); 
});

modifiedName6Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = `cancel Budlight`;
  handleHashtagChange(); 
});

modifiedName7Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = 'cancel kills freedom';
  handleHashtagChange();
});

modifiedName8Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = 'cancel justice';
  handleHashtagChange();
});

modifiedName9Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = 'cancel Joe Rogan';
  handleHashtagChange();
});

modifiedName10Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = 'cancel Ellen DeGeneres';
  handleHashtagChange();
});

modifiedName11Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = 'cancel BDS Movement';
  handleHashtagChange();
});

modifiedName12Element.addEventListener('click', () => {
  const hashtagInput = document.getElementById('hashtag-input');
  hashtagInput.value = 'cancel Kanye West';
  handleHashtagChange();
});

}



function modifyName(name) {
  const splitName = name.split(' ');
  const modifiedName = splitName.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
  return modifiedName;
}


function getRandomElements(array, numElements) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numElements);
}

fetchTrendingPosts();






let includeNSFW = true;
let includeUpvoteFilter = false;

let previousIncludeNSFW = false;
let previousIncludeUpvoteFilter = false;

let fetchedPostIds = []; 

async function fetchPostsBySearchQuery(searchQuery, count) {
  try {
    let url = `https://www.reddit.com/search.json?q=${encodeURIComponent(searchQuery)}&limit=${count}&new`;

 
    if (includeNSFW) {
      url += '&include_over_18=on';
    }

  
    if (includeUpvoteFilter) {
      url += '&ups=500';
    }

    console.log('Sending request to URL:', url); 

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts for search query: ${searchQuery}`);
    }

    const data = await response.json();
    console.log(`Fetched posts for search query ${searchQuery}:`, data);

    const posts = data.data.children ? data.data.children.map(child => child.data) : [];


    const filteredPosts = posts.filter(post => {
      if (includeNSFW) {
        return true;
      }
      return !post.over_18; 
    }).filter(post => {
      if (includeUpvoteFilter) {
        return post.ups > 500; 
      }
      return true; 
    });

    return filteredPosts;
  } catch (error) {
    console.log(`Error fetching posts for search query ${searchQuery}:`, error);
    return [];
  }
}


const nsfwToggle = document.getElementById('nsfw-toggle');
nsfwToggle.addEventListener('change', () => {
  includeNSFW = nsfwToggle.checked;
});


const upvoteToggle = document.getElementById('high-upvotes-toggle');
upvoteToggle.addEventListener('change', () => {
  includeUpvoteFilter = upvoteToggle.checked;
});





let postsArray = [];
let alreadyShownPosts = [];
let currentSearchQuery = 'cancel&culture';
let previousSearchQuery = '';

function createPostElement(post) {

  const postElement = document.createElement('div');
  postElement.classList.add('post');


  const rawPostDataElement = document.createElement('pre');
  rawPostDataElement.classList.add('typewriter');
  rawPostDataElement.textContent = JSON.stringify(post, null, 2);

  postElement.appendChild(rawPostDataElement);

  postElement.addEventListener('click', () => {
    rawPostDataDiv.innerHTML = `<pre>${JSON.stringify(post, null, 2)}</pre>`;
  });

  return postElement;
}

function createContentDisplay(post) {
  const contentDisplay = document.getElementById('content-display');

  const existingPostElement = contentDisplay.querySelector('.post');
  if (existingPostElement) {
    existingPostElement.remove();
  }

  const postElement = createPostElement(post);

  contentDisplay.appendChild(postElement);
}

function updatePostInfo(post) {
  const postInfoContainer = document.getElementById('post-info');

  const postInfoElement = document.createElement('div');
  postInfoElement.classList.add('post-info');

  const timeElement = document.createElement('div');
  timeElement.classList.add('post-info-cell');
  timeElement.classList.add('time');
  timeElement.textContent = `${new Date().toLocaleTimeString()}`;

  const authorElement = document.createElement('div');
  authorElement.classList.add('post-info-cell');
  authorElement.classList.add('author');
  authorElement.textContent = `u/${post.author}`;

  const titleElement = document.createElement('div');
titleElement.classList.add('post-info-cell');
titleElement.classList.add('title');

const originalTitle = post.title;

const tempElement = document.createElement('div');
tempElement.innerHTML = originalTitle;

const parsedTitle = tempElement.textContent || tempElement.innerText;

if (parsedTitle.length > 100) {
  const trimmedTitle = parsedTitle.substring(0, 100).trim() + '..';

  titleElement.textContent = trimmedTitle;
} else {
  titleElement.textContent = parsedTitle;
}


const postLink = document.createElement('a');
postLink.classList.add('post-info-cell');
postLink.classList.add('link');
postLink.href = `https://www.reddit.com${post.permalink}`;
postLink.textContent = 'View Post'; // Set the link text
postLink.target = '_blank'; // Open link in a new tab

  if (post === postsArray[postsArray.length - 1]) {
    postInfoElement.classList.add('most-bottom-post');
  }

  postInfoElement.appendChild(timeElement);
  postInfoElement.appendChild(authorElement);
  postInfoElement.appendChild(titleElement);
  postInfoElement.appendChild(postLink); // Append the post link

  postInfoContainer.insertBefore(postInfoElement, postInfoContainer.firstChild);
}

async function fetchAuthorInformation(username) {
  try {
    const response = await fetch(`https://www.reddit.com/user/${username}/overview.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch author information');
    }
    const data = await response.json();

    const authorInfo = {
      username: data.data.children[0]?.data.author,
      karma: data.data.children[0]?.data.score,
      accountAge: calculateAccountAge(data.data.children[0]?.data.created_utc),
      postCount: data.data.dist,
      commentCount: data.data.children.length - 1,
    };

    return authorInfo;
  } catch (error) {
    console.log('Error fetching author information:', error);
    return null; 
  }
}



function calculateAccountAge(createdUtc) {
  const currentTime = Math.floor(Date.now() / 1000);
  const accountAgeSeconds = currentTime - createdUtc;
  const accountAgeYears = Math.floor(accountAgeSeconds / 60 / 60 / 24 / 365);
  return `${accountAgeYears} years`;
}


async function displayPostInformation(post) {
  const displayedInfoElement = document.getElementById('displayed_information');
  displayedInfoElement.innerHTML = ''; // Clear previous content

  const authorInfo = await fetchAuthorInformation(post.author);
  if (authorInfo) {
    const authorInfoElement = document.createElement('div');
    authorInfoElement.classList.add('author-info');

    const karmaDiv = document.createElement('div');
    karmaDiv.textContent = `karma: ${authorInfo.karma}`;
    karmaDiv.style.width = '12.5%';

    const accountAgeDiv = document.createElement('div');
    accountAgeDiv.textContent = `u/since: ${authorInfo.accountAge}`;
    accountAgeDiv.style.width = '12.5%';

    const postCountDiv = document.createElement('div');
    postCountDiv.textContent = `posts: ${authorInfo.postCount}`;
    postCountDiv.style.width = '12.5%';

    const commentCountDiv = document.createElement('div');
    commentCountDiv.textContent = `comments: ${authorInfo.commentCount}`;
    commentCountDiv.style.width = '12.5%';

    const usernameDiv = document.createElement('div');
    usernameDiv.textContent = `u/${authorInfo.username}`;
    usernameDiv.style.fontWeight = '600'; // Set the font-weight to 600 for the username
    usernameDiv.style.width = '50%';

    authorInfoElement.appendChild(accountAgeDiv);
    authorInfoElement.appendChild(karmaDiv);
    authorInfoElement.appendChild(postCountDiv);
    authorInfoElement.appendChild(commentCountDiv);
    authorInfoElement.appendChild(usernameDiv);

    displayedInfoElement.appendChild(authorInfoElement);
  } else {
    const authorInfoErrorElement = document.createElement('p');
    authorInfoErrorElement.classList.add('author-info-error');
    authorInfoErrorElement.textContent = 'Failed to fetch author information.';
    displayedInfoElement.appendChild(authorInfoErrorElement);
  }

 

const postCommentContainer = document.createElement('div');
postCommentContainer.classList.add('post-comment-container');

const scoreDiv = document.createElement('div');
scoreDiv.textContent = `Score: ${post.score}`;
scoreDiv.classList.add('comment-info');
postCommentContainer.appendChild(scoreDiv);

const commentCountDiv = document.createElement('div');
commentCountDiv.textContent = `Number of Comments: ${post.num_comments}`;
commentCountDiv.classList.add('comment-info');
postCommentContainer.appendChild(commentCountDiv);

const deletedCommentsDiv = document.createElement('div');
deletedCommentsDiv.textContent = `Deleted Comments: ${post.num_deleted_comments || 0}`;
deletedCommentsDiv.classList.add('comment-info');
postCommentContainer.appendChild(deletedCommentsDiv);

const bannedCommentsDiv = document.createElement('div');
bannedCommentsDiv.textContent = `Banned Comments: ${post.num_banned_comments || 0}`;
bannedCommentsDiv.classList.add('comment-info');
postCommentContainer.appendChild(bannedCommentsDiv);

displayedInfoElement.appendChild(postCommentContainer);

const mediaContainer = document.createElement('div');
mediaContainer.classList.add('media-container');

const postContentElement = document.createElement('div');
postContentElement.classList.add('post-content');
postContentElement.innerHTML = post.selftext_html || '';

const postedContent = document.createElement('div');
postedContent.classList.add('posted-content');
postedContent.appendChild(mediaContainer);
postedContent.appendChild(postContentElement);

displayedInfoElement.appendChild(postedContent);

  const upvoteDownvoteRatioElement = document.createElement('div');
  upvoteDownvoteRatioElement.classList.add('upvote-downvote-ratio');

  const ratioBarElement = document.createElement('div');
  ratioBarElement.classList.add('ratio-bar');
  ratioBarElement.style.setProperty('--ratio', post.upvote_ratio);

  const ratioBarOverlayElement = document.createElement('div');
  ratioBarOverlayElement.classList.add('ratio-bar-overlay');

  const ratioBarTextOverlayElement = document.createElement('div'); 
  ratioBarTextOverlayElement.classList.add('ratio-bar-text-overlay');
  ratioBarTextOverlayElement.textContent = 'UPVOTE/DOWNVOTE RATIO: '; 

  const ratioNumberElement = document.createElement('span'); 
  ratioNumberElement.classList.add('ratio-number');
  ratioNumberElement.textContent = post.upvote_ratio; 

  ratioBarTextOverlayElement.appendChild(ratioNumberElement); 
  ratioBarOverlayElement.appendChild(ratioBarTextOverlayElement); 
  ratioBarElement.appendChild(ratioBarOverlayElement);
  upvoteDownvoteRatioElement.appendChild(ratioBarElement);
  displayedInfoElement.appendChild(upvoteDownvoteRatioElement);

  displayedInfoElement.appendChild(upvoteDownvoteRatioElement);


  const comments = await fetchPostComments(post.id);
  if (comments.length > 0) {
    const sortedComments = comments.sort((a, b) => a.score - b.score);
    const highestRatedComment = sortedComments[sortedComments.length - 1];
    const lowestRatedComment = sortedComments[0];
    const medianComment = sortedComments[Math.floor(sortedComments.length / 2)];

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');

    const lowestRatedCommentDiv = createCommentDiv(lowestRatedComment, '↓');
    commentsContainer.appendChild(lowestRatedCommentDiv);

    const medianRatedCommentDiv = createCommentDiv(medianComment, '↔');
    commentsContainer.appendChild(medianRatedCommentDiv);

    const highestRatedCommentDiv = createCommentDiv(highestRatedComment, '↑');
    commentsContainer.appendChild(highestRatedCommentDiv);

           displayedInfoElement.appendChild(commentsContainer); // Append comments container
  }


if (post.url && isImageURL(post.url)) {
  const imageElement = document.createElement('img');
  imageElement.style.maxWidth = '100%';
  imageElement.style.height = 'auto'; // Set height to auto to maintain aspect ratio
  imageElement.src = post.url;
  mediaContainer.appendChild(imageElement);
} else if (post.media && post.media.reddit_video) {
  const videoElement = document.createElement('video');
  videoElement.style.maxWidth = '100%';
  videoElement.style.height = 'auto';
  videoElement.controls = true;
      redditVideoElement.autoplay = true; 
    redditVideoElement.muted = false; 

  videoElement.src = post.media.reddit_video.fallback_url;
  mediaContainer.appendChild(videoElement);
} else if (post.media && post.media.oembed) {
  const providerName = post.media.oembed.provider_name;

  if (providerName === 'YouTube') {
  const youtubeElement = document.createElement('iframe');
  youtubeElement.width = '100%';
  youtubeElement.height = '315'; 
  youtubeElement.src = post.media.oembed.url.replace('watch?v=', 'embed/');
  youtubeElement.allowFullscreen = true;
      redditVideoElement.autoplay = true; 
    redditVideoElement.muted = false; 

  youtubeElement.setAttribute('frameborder', '0');
  youtubeElement.setAttribute('allow', 'autoplay; encrypted-media');
  youtubeElement.setAttribute('allowfullscreen', ''); 
  mediaContainer.appendChild(youtubeElement);
}
 else if (providerName === 'Reddit' && post.media.oembed.type === 'video') {
    const redditVideoElement = document.createElement('video');
    redditVideoElement.style.maxWidth = '100%';
    redditVideoElement.style.height = 'auto'; 
    redditVideoElement.controls = true;
    redditVideoElement.src = post.media.oembed.url;
    mediaContainer.appendChild(redditVideoElement);
  } else if (providerName === 'Reddit' && post.media.oembed.type === 'rich') {
    const redditGalleryContainer = document.createElement('div');
    redditGalleryContainer.classList.add('reddit-gallery-container');
    const redditGalleryData = post.media.oembed.html;
    redditGalleryContainer.innerHTML = redditGalleryData;
    mediaContainer.appendChild(redditGalleryContainer);
  }
}



  if (post.over_18) {
    const nsfwElement = document.createElement('p');
    nsfwElement.textContent = 'NSFW';
    nsfwElement.classList.add('nsfw');
    displayedInfoElement.appendChild(nsfwElement);
  }
}


function createCommentDiv(comment, symbol) {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment-item');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('comment-title');
  titleDiv.textContent = symbol;
  commentDiv.appendChild(titleDiv);

  const commentTextDiv = document.createElement('div');
  commentTextDiv.classList.add('comment-text');

  if (comment) {
    commentTextDiv.textContent = comment.body;
  } else {
    commentTextDiv.textContent = 'No comments available';
  }

  commentDiv.appendChild(commentTextDiv);

  if (comment && comment.authorInfo) {
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('comment-author');
    authorDiv.textContent = `Author: ${comment.authorInfo.username}`;
    commentDiv.appendChild(authorDiv);
  }

  return commentDiv;
}





function isImageURL(url) {
  const imageExtensions = /\.(gif|jpe?g|png|webp|bmp)$/i;
  return imageExtensions.test(url);
}



async function fetchPostComments(postId) {
  try {
    const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch comments for post: ${postId}`);
    }
    const data = await response.json();
    return data[1] && data[1].data ? data[1].data.children.map(child => child.data) : [];
  } catch (error) {
    console.log(`Error fetching comments for post: ${postId}`, error);
    return [];
  }
}

function displayPost(post) {
  console.log('Displaying post:', post);


  const postElement = createPostElement(post);


  updatePostInfo(post);


  const contentDisplay= document.getElementById('content-display');
  contentDisplay.innerHTML = ''; 
  contentDisplay.appendChild(postElement);
}

const fetchInterval = 15000; 

async function fetchAndStorePosts() {
  const count = 60;
  const newPosts = await fetchPostsBySearchQuery(currentSearchQuery, count);
  console.log(`Fetched posts for search query ${currentSearchQuery}:`, newPosts);

  if (newPosts.length === 0) {
    console.log('No posts fetched.');
    isPaused = true;
    console.log('Pausing fetchAndStorePosts');
    return;
  }


  if (currentSearchQuery !== previousSearchQuery) {
    console.log('Search query changed. Clearing postArray...');
    postsArray = [];
    previousSearchQuery = currentSearchQuery;
  }


  const unseenPosts = newPosts.filter(post => !alreadyShownPosts.includes(post));
  postsArray.push(...unseenPosts);

  console.log('Posts array:', postsArray);
  console.log('Already shown posts:', alreadyShownPosts);
  console.log('Post count:', postsArray.length);
  console.log('Already shown count:', alreadyShownPosts.length);

  displayRandomPost();
  isPaused = false;
}

function displayRandomPost() {
  console.log('Displaying random post');

  if (postsArray.length === 0) {
    console.log('No more posts to display');
    isPaused = true; 
    console.log('Pausing displayRandomPost');
    return;
  }

  const randomIndex = Math.floor(Math.random() * postsArray.length);
  const post = postsArray[randomIndex];
  alreadyShownPosts.push(post); 
  postsArray.splice(randomIndex, 1); 

  displayPostInformation(post);
  displayPost(post);


  console.log('Posts Array:', postsArray);
  console.log('Already Shown Posts:', alreadyShownPosts);
}


const hashtagInput = document.getElementById('hashtag-input');

let typingTimer;
const doneTypingInterval = 3000; 

function handleHashtagChange() {
  clearTimeout(typingTimer);
  console.log('Clearing postArray');
  typingTimer = setTimeout(() => {
    const newSearchQuery = hashtagInput.value.trim().toLowerCase();
    currentSearchQuery = newSearchQuery;
    postsArray = [];
    alreadyShownPosts = []; 
    isPaused = false;
    fetchAndStorePosts(); 
  }, doneTypingInterval);
}




nsfwToggle.addEventListener('change', handleToggleNSFW);
upvoteToggle.addEventListener('change', handleToggleUpvote);


function handleToggleNSFW() {
  console.log('Toggling NSFW filter');
  includeNSFW = !includeNSFW; 


  console.log('Clearing postArray');
  postsArray = [];

 
}


function handleToggleUpvote() {
  console.log('Toggling Upvote filter');
  includeUpvoteFilter = !includeUpvoteFilter;
  console.log('Clearing postArray');
  postsArray = [];


}

hashtagInput.addEventListener('input', handleHashtagChange);

fetchAndStorePosts();
requestInterval = setInterval(fetchAndStorePosts, fetchInterval);


function downloadPostsAsJSON() {
  const currentDate = new Date().toISOString().split('T')[0];
  const currentTime = new Date().toISOString().split('T')[1].split('.')[0].replace(/:/g, '-');
  const fileName = `CancelTheCulture_Archive_${currentDate}_${currentTime}.json`;

  const jsonContent = JSON.stringify(alreadyShownPosts, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });


  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;


  link.click();

 
  URL.revokeObjectURL(link.href);
}



const archiveButton = document.getElementById('archive-button');
archiveButton.addEventListener('click', downloadPostsAsJSON);



