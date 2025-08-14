import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-reposiroty';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const SIMULATE_TIME = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateAwait() {
    if (SIMULATE_TIME <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_TIME));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parserdJson = JSON.parse(jsonContent);
    const { posts } = parserdJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateAwait();

    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }
}
