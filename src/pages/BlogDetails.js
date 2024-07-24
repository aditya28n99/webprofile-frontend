import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineComment, BiSolidMessageRoundedEdit, GoHeartFill } from '../imports/Icons';
import '../imports/fonts.css';
import Loader from '../components/profileComponents/Loader';
import { deletBlogLikes, getBlogById, getBlogComments, addCommentToBlog, updateCommentOnBlog } from '../services/blogService';

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
  const [likeCounts, setLikeCounts] = useState(0);

  useEffect(() => {
    // Fetch blog post and comments from the server
    const fetchBlogByID = async () => {
      try {
        const data = await getBlogById(postId);
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching the blog post:', error);
      }
    };
    fetchBlogByID();

    // Fetch comments for the blog post
    const fetchBlogComments = async () => {
      try {
        const CommentDdata = await getBlogComments(postId);
        setBlogData(prevData => ({
          ...prevData,
          comments: CommentDdata,
        }));
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchBlogComments();
  }, [postId]);

  const handleLikeClick = () => {
    // Need to hander isLiked or not.. 
    // likes delet service is redy in the services.
  };

  const handleAddComment = async () => {
    if (newComment.trim() && userName.trim()) {
      try {
        const fetchUpdatedComments = async () => {
          const updatedComments = await addCommentToBlog(postId, { comment: newComment, user_name: userName });
          setBlogData(prevData => ({
            ...prevData,
            comments: updatedComments,
          }));
          setNewComment('');
          setUserName('');
        };
        fetchUpdatedComments();
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  const handleEditComment = (id, comment) => {
    setEditComment(id);
    setEditedText(comment);
  };

  const handleSaveEditComment = async (id) => {
    if (editedText.trim()) {
      try {
        const fetchUpdateEditedComments = async () => {
          await updateCommentOnBlog(postId, id, { comment: editedText });
          setBlogData(prevData => ({
            ...prevData,
            comments: prevData.comments.map(comment =>
              comment.id === id ? { ...comment, comment: editedText } : comment
            ),
          }));
          setEditComment(null);
          setEditedText('');
        };
        fetchUpdateEditedComments();
      } catch (error) {
        console.error('Error updating comment:', error);
      }
    }
  };

  const handleCommentIconClick = () => {
    commentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!blogData) {
    return <Loader />;
  }

  return (
    <>
      <BlogContainer>
        <BlogImageContainer>
          <BlogImage src={blogData.image_url} alt="Blog" />
        </BlogImageContainer>
        <BlogTitle>{blogData.title}</BlogTitle>
        <BlogSubTitle>{blogData.subtitle}</BlogSubTitle>
        <BlogMeta>
          <BlogIcons>
            <div onClick={handleLikeClick} style={{ cursor: 'pointer', color: isLiked ? 'red' : 'white' }}>
              <GoHeartFill />
            </div>
            <div onClick={handleCommentIconClick} style={{ cursor: 'pointer' }}>
              <AiOutlineComment /> {blogData.comments?.length || 0}
            </div>
          </BlogIcons>
          <div className='text-white-50 fs-5'>Published on - {new Date(blogData.date).toLocaleDateString()}</div>
        </BlogMeta>
        <BlogDescription dangerouslySetInnerHTML={{ __html: blogData.content }} />
        <CommentSection ref={commentSectionRef}>
  <h2 style={{ fontFamily: '"Edu TAS Beginner", cursive' }}>Comments</h2>
  <CommentList>
    {blogData.comments?.map(comment => (
      <CommentItem key={comment.id}>
        {editComment === comment.id ? (
          <EditComment>
            <input
              className='text-light'
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button onClick={() => handleSaveEditComment(comment.id)}>Save</button>
          </EditComment>
        ) : (
          <>
            <CommentText>{comment.comment}</CommentText>
            <CommentActions>
              <CommentAuthor>{comment.user_name}</CommentAuthor>
              <BiSolidMessageRoundedEdit
                style={{ cursor: 'pointer' }}
                onClick={() => handleEditComment(comment.id, comment.comment)}
              />
            </CommentActions>
          </>
        )}
      </CommentItem>
    ))}
  </CommentList>
  <CommentInput>
    <input
      className='text-light'
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Your name"
      required
    />
    <input
      className='text-light'
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
    </>
  );
};

export default BlogDetails;

const BlogContainer = styled.div`
  max-width: 1250px;
  margin: 20px auto;
  padding: 20px;
  /* border: 1px solid #ddd; */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #1e1e1e; /* Darker background for better contrast */
  color: #f5f5f5; /* Light text color for better readability */
`;

const BlogImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const BlogImage = styled.img`
  width: 100%;
  max-height: 600px; /* Set a max height for better control */
  object-fit: cover; /* Ensures the image covers the container without distortion */
  display: block;
  border-radius: 10px;
  margin-bottom: 20px; /* Add some space below the image */
`;

const BlogTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #e0e0e0; /* Slightly lighter color for titles */
  margin-bottom: 10px;
`;

const BlogSubTitle = styled.h4`
  font-size: 1.5em;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #b0b0b0; /* Slightly lighter color for subtitles */
  margin-bottom: 20px;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #b0b0b0;
  margin-bottom: 20px;
`;

const BlogIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.2em;
`;

const BlogDescription = styled.div`
  font-size: 1.2em;
  line-height: 1.8;
  font-family: 'Gideon Roman', serif;
  color: #f5f5f5;
  margin-bottom: 20px;
`;

const CommentSection = styled.div`
  margin-top: 30px;
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CommentItem = styled.li`
  border-bottom: 1px solid #333;
  padding: 15px 0;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:last-child {
    border-bottom: none;
  }
`;

const EditComment = styled.div`
  display: flex;
  align-items: center;

  input {
    flex-grow: 1;
    margin-right: 10px;
    border: 1px solid #ddd;
    padding: 8px;
    color: #f5f5f5;
    background: #2a2a2a;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    padding: 8px 12px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }
`;

const CommentText = styled.p`
  flex-grow: 1;
  margin: 0;
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
`;

const CommentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CommentAuthor = styled.div`
  font-size: 0.9em;
  color: #aaa;
  font-family: 'Roboto', sans-serif;
`;

const CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background: #2a2a2a;
    color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
  }

  button {
    align-self: flex-start;
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }
`;

const Gap = styled.div`
  height: 30px;
`;
