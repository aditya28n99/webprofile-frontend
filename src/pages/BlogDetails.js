import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {AiOutlineComment, BiSolidMessageRoundedEdit, GoHeartFill} from '../imports/Icons'
import '../imports/fonts.css'
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
  const [likeCounts, setLikeCounts] = useState(0)

  useEffect(() => {
    // Fetch blog post and comments from the server
    const fetchBlogByID = async() => {
      try{
        const data = await getBlogById(postId);
        setBlogData(data);
      }catch(error){
        console.error('Error fetching the blog post:', error);
      }
    }
    fetchBlogByID();

    // Fetch comments for the blog post
    const fetchBlogComments = async() =>{
      try{
        const CommentDdata = await getBlogComments(postId);
        setBlogData(prevData =>({
          ...prevData,
          comments: CommentDdata,
        }));
      }catch(error){
        console.error('Error fetching comments:', error);
      }
    }
    fetchBlogComments();
  }, [postId]);

  
  const handleLikeClick = () => {
  // Need to hander isLiked or not.. 
  // likes delet service is redy in the services.
  };

  const handleAddComment = async () => {
    if (newComment.trim() && userName.trim()) {
      try {
        const fetchUpdatedComments = async() =>{
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
        const fetchUpdateEditedComments = async() =>{

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
    return <Loader/>;
  }
  return (
      <>
    <BlogContainer>
      <BlogImageContainer>
      <BlogImage src={blogData.image_url} alt="Blog" />
      </BlogImageContainer>
      <BlogTitle>{blogData.title}</BlogTitle>
      <BlogSubTitle>{blogData.title}</BlogSubTitle>
      <BlogMeta>
        <BlogIcons>
        <div onClick={handleLikeClick} style={{ cursor: 'pointer', color: isLiked ? 'red' : 'white' }}>
  <GoHeartFill/>
</div>
          <div onClick={handleCommentIconClick} style={{ cursor: 'pointer' }}>
            <AiOutlineComment /> {blogData.comments?.length || 0}
          </div>
        </BlogIcons>
        <div className='text-white-50 fs-5'>Published on - {new Date(blogData.date).toLocaleDateString()}</div>
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
              className='text-light'
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
  max-width: 1400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;  
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const BlogImageContainer = styled.div`
  width: 70%;
  border-radius: 10px 10px 0 0;
  margin: 10px auto;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 10px 10px;
`;

const BlogTitle = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-family: "Edu TAS Beginner", cursive;
  color: aliceblue;
`;
const BlogSubTitle = styled.h4`
  margin-top: 20px;
  text-align: center;
  font-family: "Edu TAS Beginner", cursive;
  color: aliceblue;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  font-family: "Caveat", cursive;
  color: aliceblue;
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
  color: aliceblue;
`;


// new styles

const CommentSection = styled.div`
  margin: 20px;
  color: aliceblue;
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
  color: aliceblue;
`;

const CommentItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: aliceblue;

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
  margin: 0 auto;
  margin-top: 20px;
  background: rgba(45, 45, 45, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 20px;
  width: 75%;

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