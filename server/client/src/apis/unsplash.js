import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization:'Client-ID XK5RgngjdbYDVVL0H86o6WlGldd1R7k5xASBTvrqJLc'
  }
});
