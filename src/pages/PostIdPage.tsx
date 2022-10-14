import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../api/PostService';
import { Comments, Post } from '../api/types';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/ui/Loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Array<Comments>>([]);

  const [fetchPostById, isLoading] = useFetching(async (id: number) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading] = useFetching(async (id: number) => {
    const response1 = await PostService.getCommentsByPostId(id);
    setComments(response1.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!post) return <Loader />;
  return (
    <div>
      <h1>ВЫ ОТКРЫЛИ СТРАНИЦУ С ПОСТА ID {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}
          <div>{post.body}
          </div>
        </div>
      }
      <h1 className="titleCom">Коментарии</h1>
      {isCommentsLoading
        ? <Loader />
        : <div> {comments.map(comment =>
          <div key={comment.id} className="comments">
            <h5>{comment.email}</h5>
            <div>{comment.body}</div>
          </div>
        )}
        </div>
      }
    </div>
  );
};

export default PostIdPage;
