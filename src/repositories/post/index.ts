import { JsonPostRepository } from './json-post-repository';
import { PostRepository } from './post-reposiroty';

export const postRepository: PostRepository = new JsonPostRepository();
