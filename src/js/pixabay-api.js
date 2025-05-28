
import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './render-functions';

export async function getImagesByQuery(query, page=1, per_page=15) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '50348877-00e3539199181f67fed2a274d'
    const params = new URLSearchParams({
        'key': API_KEY,
        'q': query,
        'image_type': 'photo',
        'orientation': 'horizontal',
        'safesearch': true,
        'page': page,
        'per_page': per_page,
  });

  const url = `${BASE_URL}?${params.toString()}`;
  const res = await axios.get(url, { params});
  return res.data
}

