// export default async function fetchSubredditInfo(subName){
//   const url = `https://www.reddit.com/r/${subName}.json`;

  
//     const response = await fetch(url);

//     if (!response.ok) {
//       return [false,false]; 
//     }

//     const json = await response.json();
//     return [json['data']['children'],true]; 
//   }

export default async function fetchSubredditInfo(subName) {
  const url = `https://www.reddit.com/r/${subName}.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return [false, false]; 
    }

    const json = await response.json();
    return [json['data']['children'], true];
  } catch (error) {
    return [false, false]; 
  }
}



