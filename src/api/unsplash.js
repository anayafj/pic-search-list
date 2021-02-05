import axios from 'axios';

const unsplashKey = 'vmqHRVLTkx67xyofC_thH6CykQZcul7icEli95VtEgc';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID ' + unsplashKey,
	},
});
