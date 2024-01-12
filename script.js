import Header from "./components/Header/header.js";
import MainContent from "./components/MainContent/main-content.js";

const body = `${Header()}
${MainContent()}`;

let root = document.querySelector(".body");
root.innerHTML = body;

const api = "https://icanhazdadjoke.com/"

const fetchRandomDadJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch dad joke');
      }
      const jokeData = await response.json();
      const joke = jokeData.joke;
      console.log('Dad Joke:', joke);
    } catch (error) {
      console.error('Error fetching dad joke:', error.message);
    }
  };
  
  // Call the function
  fetchRandomDadJoke();