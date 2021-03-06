import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '../features/articles/articlesSlice';
import commentsSlice from '../features/comments/commentsSlice';
import subredditsSlice from '../features/subreddits/subredditsSlice';
export const store = configureStore({
  reducer: {
    subreddits: subredditsSlice,
    articles: articlesSlice,
    comments: commentsSlice,
  },
});
