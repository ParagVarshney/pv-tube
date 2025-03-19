export const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?
part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const LIVE_CHAT_COUNT=20;
export const YOUTUBE_SEARCH_API_RESULTS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=`;

