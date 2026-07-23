import { useEffect, useState } from 'react';
import { BlogService, type Blog } from '../services/blogService';
import { createSlug } from '../utils/slug';

/**
 * Fetches all blogs and returns only those that belong to the given topic.
 * A blog matches when its slugified category, group, or any tag equals `topicSlug`
 * (e.g. 'custom-ai-solutions', 'web-development'). This is the same matching logic
 * used by the News & Updates topic filter, so a blog surfaces in both places.
 */
export const useTopicBlogs = (topicSlug: string): Blog[] => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    let active = true;
    BlogService.listAll()
      .then((list) => {
        if (!active) return;
        setBlogs(
          list.filter((item) =>
            [item.category, item.group, ...(item.tags ?? [])]
              .filter(Boolean)
              .some((value) => createSlug(value as string) === topicSlug),
          ),
        );
      })
      .catch((err) => console.error('Blog fetch failed', err));
    return () => {
      active = false;
    };
  }, [topicSlug]);

  return blogs;
};
