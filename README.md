Certainly! Here’s a comprehensive README file for your project, including instructions for setting up the News API key and running the server.

---

# NewsDaily

Welcome to NewsDaily, a simple news aggregator website that displays the latest headlines and articles from various categories. This project utilizes the News API to fetch news content, and Bootstrap for styling.

## Features

- **Home Page**: Displays the latest news articles.
- **Search**: Allows searching for news by query.
- **Pagination**: Navigate through multiple pages of news articles.
- **Categories**: View news in categories like Weather, Sports, Tech Updates, Global, and Horoscope.

## Getting Started

To set up and run this project locally, follow these instructions:

### Prerequisites

- [Node.js](https://nodejs.org/) (for running the server)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- A News API key. You can obtain one from [News API](https://newsapi.org/).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/newsdaily.git
   cd newsdaily
   ```

2. **Install dependencies**

   Ensure you have `server.js` file and any dependencies required for it. Install the required npm packages:

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory of your project and add your News API key. The `.env` file should contain:

   ```plaintext
   NEWS_API_KEY=your_news_api_key_here
   ```

   Replace `your_news_api_key_here` with your actual News API key.

### Running the Project

1. **Start the server**

   Run the following command to start the server:

   ```bash
   npm start
   ```

   The server will be accessible at `http://localhost:8080`.

2. **Access the application**

   Open your web browser and navigate to `http://localhost:8080` to view the NewsDaily application.

## File Descriptions

- `index.html`: The main HTML file that provides the layout and user interface of the application. It includes Bootstrap for styling and JavaScript for dynamic content loading and pagination.
- `server.js`: The server file that sets up an Express server to serve the `index.html` file. It reads the News API key from the environment variables.

## Usage

- **Homepage**: By default, the homepage shows the latest news articles. Use the navigation bar to select different categories or search for specific news.
- **Search**: Use the search bar to find news articles by query.
- **Pagination**: Use the "Previous" and "Next" buttons to navigate through pages of news articles.

