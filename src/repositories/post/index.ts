import { DrizzlePostRepository } from './drizzle-post-repository';

import { PostRepository } from './post-reposiroty';

export const postRepository: PostRepository = new DrizzlePostRepository();
