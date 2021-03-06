import axios from 'axios';
import App from './App';

const url = 'http://hackathon-test-server.jichoup.trap.show/';
export const get = () => {
  return axios.get(url);
};
export const post = (value: Todo) => {
  axios.post(url, value);
};
export const delete = (index: Int) =>{
    axios.delete(url+index)
}
