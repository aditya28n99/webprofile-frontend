import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaThumbsUp, FaComments, FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const BlogImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const BlogTitle = styled.h1`
  margin-top: 20px;
  font-size: 2em;
  text-align: center;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const BlogIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const BlogDescription = styled.p`
  margin-top: 20px;
  font-size: 1.2em;
  line-height: 1.6;
`;

const CommentSection = styled.div`
  margin-top: 20px;
`;

const CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin: 10px 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const CommentAuthor = styled.span`
  display: block;
  font-size: 0.9em;
  color: #666;
`;

const EditComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BlogDetails = () => {
  const { postId } = useParams();
  const [blogData, setBlogData] = useState({
    comments: [], // Initialize comments as an empty array
    likes: 0, // Initialize likes to 0
  });
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [editComment, setEditComment] = useState(null);
  const [editedText, setEditedText] = useState('');
  const commentSectionRef = useRef(null);

  useEffect(() => {
    // Fetch blog post and comments from the server
    axios.get(`http://localhost:5000/blogs/${postId}`)
      .then(response => {
        setBlogData(response.data);
      })
      .catch(error => {
        console.error('Error fetching the blog post:', error);
      });

    // Fetch comments for the blog post
    axios.get(`http://localhost:5000/blogs/${postId}/comments`)
      .then(response => {
        setBlogData(prevData => ({
          ...prevData,
          comments: response.data,
        }));
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [postId]);

  const handleLikeClick = () => {
    axios.post(`http://localhost:5000/blogs/${postId}/likes`)
      .then(response => {
        setBlogData(prevData => ({
          ...prevData,
          likes: response.data.like_count,
        }));
      })
      .catch(error => {
        console.error('Error updating likes:', error);
      });
  };

  const handleAddComment = () => {
    if (newComment.trim() && userName.trim()) {
      axios.post(`http://localhost:5000/blogs/${postId}/comments`, { comment: newComment, user_name: userName })
        .then(response => {
          setBlogData(prevData => ({
            ...prevData,
            comments: response.data,
          }));
          setNewComment('');
          setUserName('');
        })
        .catch(error => {
          console.error('Error adding comment:', error);
        });
    }
  };

  const handleEditComment = (id, comment) => {
    setEditComment(id);
    setEditedText(comment);
  };

  const handleSaveEditComment = (id) => {
    axios.put(`http://localhost:5000/blogs/${postId}/comments/${id}`, { comment: editedText })
      .then(() => {
        setBlogData(prevData => ({
          ...prevData,
          comments: prevData.comments.map(comment =>
            comment.id === id ? { ...comment, comment: editedText } : comment
          ),
        }));
        setEditComment(null);
        setEditedText('');
      })
      .catch(error => {
        console.error('Error updating comment:', error);
      });
  };

  const handleCommentIconClick = () => {
    commentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <BlogContainer>
      <BlogImage src={blogData.image_url} alt="Blog" />
      <BlogTitle>{blogData.title}</BlogTitle>
      <BlogMeta>
        <BlogIcons>
          <div onClick={handleLikeClick} style={{ cursor: 'pointer', color: 'red' }}>
            <FaThumbsUp /> {blogData.likes}
          </div>
          <div onClick={handleCommentIconClick} style={{ cursor: 'pointer' }}>
            <FaComments /> {blogData.comments?.length || 0}
          </div>
        </BlogIcons>
        <div>Published on - {new Date(blogData.date).toLocaleDateString()}</div>
      </BlogMeta>
      <BlogDescription>{blogData.content}</BlogDescription>
      <CommentSection ref={commentSectionRef}>
        <h2>Comments</h2>
        <CommentList>
          {blogData.comments?.map(comment => (
            <CommentItem key={comment.id}>
              {editComment === comment.id ? (
                <EditComment>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEditComment(comment.id)}>Save</button>
                </EditComment>
              ) : (
                <>
                  <p>{comment.comment}</p>
                  <CommentAuthor>{comment.user_name}</CommentAuthor>
                  <FaEdit
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleEditComment(comment.id, comment.comment)}
                  />
                </>
              )}
            </CommentItem>
          ))}
        </CommentList>
        <CommentInput>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your name"
            required
          />
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            required
          />
          <button onClick={handleAddComment}>Post Comment</button>
        </CommentInput>
      </CommentSection>
    </BlogContainer>
  );
};

export default BlogDetails;
