export default async function fetchSubredditInfo(subName){
  const url = `https://www.reddit.com/r/${subName}.json`;

  
    const response = await fetch(url);

    if (!response.ok) {
      return false; 
    }

    const json = await response.json();
    return json['data']['children']; 
  }




