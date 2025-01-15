# Reddit-On

## Description
The **Reddit-On** is a browser-based application that enables users to explore multiple subreddits simultaneously in separate, customizable lanes. It leverages the Reddit JSON feed to dynamically fetch and display posts, providing a clean, responsive, and interactive user interface.

The application is built using **React.js**, **React Router DOM**, and **Bootstrap**, ensuring efficient state management, smooth routing, and a visually appealing design. It also incorporates local storage to preserve user preferences across sessions.

This project has been created as part of the [Roadmap.sh Reddit Client Project](https://roadmap.sh/projects/reddit-client).

---

## Features

- **Dynamic Subreddit Lanes**: Users can add and remove lanes by specifying subreddit names.
- **Real-Time Data**: Fetches posts from Reddit using the JSON feed API.
- **Post Details**: Displays essential post information, including titles, authors, and vote counts.
- **Loading States**: Shows loading indicators while fetching data.
- **Error Handling**: Displays error messages for invalid subreddit names or API issues.
- **Local Storage Support**: Saves user-added lanes and restores them on reload.
- **Light-Dark Mode Toggle**: Switch between light and dark themes for better user experience.
- **Reload Subreddit Data**: Refresh the data of individual subreddit lanes.
- **Responsive Design**: Works seamlessly across devices and screen sizes.

---

## Prerequisites

To run this project locally, ensure you have the following:

- **Node.js** (v14 or later)
- **npm** or **yarn** package manager

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KunalVChoudhary/Reddit-On.git
   cd Reddit-On
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

---

## Deployed URL

Access the live application here:
[Reddit-On](https://your-deployed-url.com)

---

## API Reference

The application uses Reddit's JSON feed to fetch data:
```
https://www.reddit.com/r/{subreddit}.json
```
Replace `{subreddit}` with the desired subreddit name to retrieve its posts.

---

## Technologies Used

- **React.js**: For building the user interface and managing component states.
- **React Router DOM**: For handling application routing.
- **Bootstrap**: For responsive design and pre-styled components.
- **Local Storage**: For persisting user preferences.

---

## Author

**Your Name**  
Feel free to reach out for feedback or collaboration:
- **Email**: imkunalvchoudhary@gmail.com
- **GitHub**: [KunalVChoudhary](https://github.com/KunalVChoudhary)

---

## Acknowledgments

- [Reddit API Documentation](https://www.reddit.com/dev/api/)
- [React.js Documentation](https://reactjs.org/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Icons8](https://icons8.com)