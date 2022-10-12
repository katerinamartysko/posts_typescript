import axios from 'axios';
import { Post } from './types';

interface GetAllRequest {
  data: Array<Post>,
  headers: {
    'x-total-count': string
  }
}

export default class PostService {
  static async getAll(limit: number = 10, page: number = 1): Promise<GetAllRequest> {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page
      }
    });
  }

  static async getById(id: number) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  static async getCommentsByPostId(id: number) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}
