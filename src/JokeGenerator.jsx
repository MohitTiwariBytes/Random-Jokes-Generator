import React, { useState } from 'react';
import axios from 'axios';
import './JokeGenerator.css';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${response.data.setup} - ${response.data.punchline}`);
    } catch (error) {
      setJoke('Oops! Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="joke-generator">
      <h1>Random Joke Generator</h1>
      <div className="joke-container">
        {loading ? <p>Loading...</p> : <p>{joke}</p>}
      </div>
      <button onClick={fetchJoke} className="joke-button">
        Get a New Joke
      </button>
    </div>
  );
};

export default JokeGenerator;
