import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {AiTwotoneLike, AiOutlineComment, BiSolidMessageRoundedEdit} from '../imports/Icons'
import { GoHeartFill } from "react-icons/go";

import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../imports/fonts.css'
import Loader from '../components/profileComponents/Loader';


const BlogContainer = styled.div`
  max-width: 1400px;
  margin: 50px auto;
  padding: 20px;
  /* border: 1px solid #ddd;  
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1); */
`;

const BlogImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const BlogTitle = styled.h1`
  margin-top: 20px;
  font-size: 2em;
  text-align: center;
  font-family: "Edu TAS Beginner", cursive;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  font-family: "Caveat", cursive;

`;

const BlogIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: larger;
`;

const BlogDescription = styled.p`
  margin-top: 20px;
  font-size: 1.2em;
  line-height: 1.6;
  font-family: "Sedan SC", serif;

`;


// new styles

const CommentSection = styled.div`
  margin: 20px;
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  p {
    font-size: 0.9em; /* Smaller font for comments */
    margin: 0;
    flex-grow: 1;
  }
`;

const EditComment = styled.div`
  display: flex;
  align-items: center;

  input {
    flex-grow: 1;
    margin-right: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
    padding: 5px;
  }

  button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const CommentAuthor = styled.span`
  font-size: 0.8em;
  font-weight: lighter;
  color: white;
  display: block;
  text-align: right;
  margin-top: 5px;

  &::before {
    content: '~ ';
  }
`;

const CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  input {
    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
    padding: 10px;
    font-size: 1em;
    transition: filter 0.3s ease;

    &::placeholder {
      color: gainsboro;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    align-self: flex-end;
    background-color: #008CBA; /* Blue */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Gap = styled.div`
width: 20px;
`

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

  const [isLiked, setIsLiked] = useState(false);
  const [likeCounts, setLikeCounts] = useState(0)


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
    if (isLiked) {
      // Remove like
      axios.delete(`http://localhost:5000/blogs/${postId}/likes`)
        .then(() => {
          setBlogData(prevData => ({
            ...prevData,
            likes: prevData.likes - 1,
            
          }));
          setIsLiked(false);
          setLikeCounts(0); 
        })
        .catch(error => {
          console.error('Error removing like:', error);
        });
    } else {
      // Add like
      axios.post(`http://localhost:5000/blogs/${postId}/likes`)
        .then(() => {
          setBlogData(prevData => ({
            ...prevData,
            likes: prevData.likes + 1,
          }));
          setIsLiked(true);
          setLikeCounts(1);
        })
        .catch(error => {
          console.error('Error adding like:', error);
        });
    }
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
    return <Loader/>;
  }

  return (
    <BlogContainer>
      <BlogImage src={blogData.image_url} alt="Blog" />
      <BlogTitle>{blogData.title}</BlogTitle>
      <BlogMeta>
        <BlogIcons>
        <div onClick={handleLikeClick} style={{ cursor: 'pointer', color: isLiked ? 'red' : 'white' }}>
  <GoHeartFill/>
</div>
          <div onClick={handleCommentIconClick} style={{ cursor: 'pointer' }}>
            <AiOutlineComment /> {blogData.comments?.length || 0}
          </div>
        </BlogIcons>
        <div>Published on - {new Date(blogData.date).toLocaleDateString()}</div>
      </BlogMeta>
      <BlogDescription>{blogData.content}</BlogDescription>
      <CommentSection ref={commentSectionRef}>
  <h2 style={{fontFamily: '"Edu TAS Beginner", cursive'}}>Comments</h2>
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
            <Gap></Gap>
            <BiSolidMessageRoundedEdit
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
