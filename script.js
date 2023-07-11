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
    name = name.replace(/\bsay\b|\bdefies\b|\bargue\b/gi, '');
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

function isRedditGalleryURL(url) {
  return url.includes('redditgallery.com');
}

function isImageURL(url) {
  // Check if the URL ends with a common image file extension
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const lowercasedURL = url.toLowerCase();
  return imageExtensions.some(extension => lowercasedURL.endsWith(extension));
}

function isRedditVideoURL(url) {
    return url.includes('v.redd.it') || url.includes('v.redd.it/video/');
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
authorInfoErrorElement.innerHTML = '<br>Reddit-User<br style="font-size: 12px;">[deleted].<br>';
authorInfoErrorElement.style.fontSize = '12px';
    displayedInfoElement.appendChild(authorInfoErrorElement);
  }


 const containerDiv = document.createElement('div');
containerDiv.classList.add('container-div');




const postCommentContainer = document.createElement('div');
postCommentContainer.classList.add('post-comment-container');

const subredditDiv = document.createElement('div');
subredditDiv.textContent = `r/${post.subreddit}`;
subredditDiv.classList.add('comment-info');
postCommentContainer.appendChild(subredditDiv);

const scoreDiv = document.createElement('div');
scoreDiv.textContent = `Score: ${post.score}`;
scoreDiv.classList.add('comment-info');
postCommentContainer.appendChild(scoreDiv);

const commentCountDiv = document.createElement('div');
commentCountDiv.textContent = `total comments: ${post.num_comments}`;
commentCountDiv.classList.add('comment-info');
postCommentContainer.appendChild(commentCountDiv);

const deletedCommentsDiv = document.createElement('div');
deletedCommentsDiv.textContent = `deleted comments: ${post.num_deleted_comments || 0}`;
deletedCommentsDiv.classList.add('comment-info');
postCommentContainer.appendChild(deletedCommentsDiv);

const bannedCommentsDiv = document.createElement('div');
bannedCommentsDiv.textContent = `banned comments: ${post.num_banned_comments || 0}`;
bannedCommentsDiv.classList.add('comment-info');
postCommentContainer.appendChild(bannedCommentsDiv);

if (post.over_18) {
  const nsfwElement = document.createElement('div');
  nsfwElement.textContent = 'NSFW';
  nsfwElement.classList.add('comment-info');
  postCommentContainer.appendChild(nsfwElement);
}

containerDiv.appendChild(postCommentContainer);
displayedInfoElement.appendChild(containerDiv);

const mediaContainer = document.createElement('div');
mediaContainer.classList.add('media-container');

if (post.url_overridden_by_dest) {
 if (isImageURL(post.url_overridden_by_dest)) {
    const imageElement = document.createElement('img');
    imageElement.src = post.url_overridden_by_dest;
    imageElement.alt = 'Post Image';
    imageElement.classList.add('media-item');
    mediaContainer.appendChild(imageElement);

      imageElement.style.maxWidth = '95%';

  } 

   else if (isRedditVideoURL(post.url_overridden_by_dest)) {
    const videoURL = post.media.reddit_video.fallback_url;
    const videoElement = document.createElement('video');
    videoElement.classList.add('media-item', 'video-item');
    videoElement.src = videoURL;
    videoElement.autoplay = true;
    videoElement.controls = true;
    videoElement.muted = false; // Change muted to false to play the video with sound
    mediaContainer.appendChild(videoElement);
  } 

  else if (post.is_gallery && post.gallery_data && post.gallery_data.items.length > 0) {
    const galleryImage = post.gallery_data.items[0];
    const galleryImageURL = galleryImage.media_id
      ? `https://i.redd.it/${galleryImage.media_id}.jpg`
      : galleryImage.url;
    const imageElement = document.createElement('img');
    imageElement.src = galleryImageURL;
    imageElement.alt = 'Gallery Image';
    imageElement.classList.add('media-item');
    mediaContainer.appendChild(imageElement);
  }
if (post.url_overridden_by_dest && !post.url_overridden_by_dest.includes('redd.it') && !post.url_overridden_by_dest.includes('reddit.com')) {
  const postLink = document.createElement('a');
  postLink.href = post.url_overridden_by_dest;
  postLink.textContent = post.url_overridden_by_dest;
  postLink.style.color = 'white';
  postLink.style.fontSize = '13px';
  postLink.style.fontWeight = 'bold';
  postLink.target = '_blank';

  mediaContainer.appendChild(postLink);

  // Create an iframe to display the website
  const websiteIframe = document.createElement('iframe');
  websiteIframe.classList.add('website-iframe');
  websiteIframe.style.width = '100%';
  websiteIframe.style.height = '430px';
  websiteIframe.src = post.url_overridden_by_dest;
  websiteIframe.onerror = function() {
    // Handle error when website refuses to open
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Website refuses to open';
    errorMessage.classList.add('website-error');
    mediaContainer.appendChild(errorMessage);
  };
  websiteIframe.onload = function() {
    // Check if the website is refusing to display due to X-Frame-Options
    const iframeWindow = websiteIframe.contentWindow;
    if (iframeWindow !== null && iframeWindow !== window && iframeWindow.document.readyState === 'complete') {
      const iframeLocation = iframeWindow.location;
      if (iframeLocation.origin !== window.location.origin) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Website refuses to display due to X-Frame-Options';
        errorMessage.classList.add('website-error');
        mediaContainer.appendChild(errorMessage);
      }
    }
  };

  mediaContainer.appendChild(websiteIframe);
}


}


const postContentElement = document.createElement('div');
postContentElement.classList.add('post-content');

// Remove HTML tags and display plain text
const plainText = post.selftext_html ? post.selftext_html.replace(/<\/?[^>]+(>|$)/g, "") : "";
postContentElement.textContent = plainText;


const postedContent = document.createElement('div');
postedContent.classList.add('posted-content');
postedContent.appendChild(mediaContainer);
postedContent.appendChild(postContentElement);

containerDiv.appendChild(postedContent);
displayedInfoElement.appendChild(containerDiv);



  const postedDateElement = document.createElement('div');
  postedDateElement.classList.add('posted-date');

  const postedDate = new Date(post.created_utc * 1000);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = postedDate.toLocaleDateString(undefined, options);
  postedDateElement.textContent = `Posted on ${formattedDate}`;

  const sidebarElement = document.createElement('div');
  sidebarElement.classList.add('sidebar');
  sidebarElement.appendChild(postedDateElement);
  displayedInfoElement.appendChild(sidebarElement);

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

const commentsContainer = document.createElement('div');
commentsContainer.classList.add('comments-container');

if (comments.length > 0) {
  const sortedComments = comments.sort((a, b) => a.score - b.score);
  const highestRatedComment = sortedComments[sortedComments.length - 1];
  const lowestRatedComment = sortedComments[0];
  const medianComment = sortedComments[Math.floor(sortedComments.length / 2)];

  const lowestRatedCommentDiv = createCommentDiv(lowestRatedComment, '↓');
  commentsContainer.appendChild(lowestRatedCommentDiv);

  const medianRatedCommentDiv = createCommentDiv(medianComment, '↔');
  commentsContainer.appendChild(medianRatedCommentDiv);

  const highestRatedCommentDiv = createCommentDiv(highestRatedComment, '↑');
  commentsContainer.appendChild(highestRatedCommentDiv);
} else {
  const noCommentsDiv = document.createElement('div');
  noCommentsDiv.textContent = '[no comments]';

  const lowestRatedCommentDiv = createCommentDiv(noCommentsDiv, '↓');
  commentsContainer.appendChild(lowestRatedCommentDiv);

  const medianRatedCommentDiv = createCommentDiv(noCommentsDiv, '↔');
  commentsContainer.appendChild(medianRatedCommentDiv);

  const highestRatedCommentDiv = createCommentDiv(noCommentsDiv, '↑');
  commentsContainer.appendChild(highestRatedCommentDiv);
}

displayedInfoElement.appendChild(commentsContainer); // Append comments container



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



