export default async function getImages(inputValue, page = 1) {
  const url = 'https://pixabay.com/api/';
  const API_KEY = '36186835-0f2957db708a682a7472f2654';

  return await fetch(
    `${url}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
