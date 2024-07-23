import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../components/profileComponents/Loader.jsx';
import ErrorAlert from '../components/profileComponents/ErrorAlert.jsx';
import { getAllBlogs } from '../services/blogService.js';
import { FaSearch } from '../imports/Icons.js';

// Lazy load BlogItem component
const BlogItem = lazy(() => import('../components/blogsComponents/BlogItem.jsx'));

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogsData = await getAllBlogs();
        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log("got error while fetching bloglist " + error);
      }
    };
    fetchBlogData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredBlogs = blogs.filter(blog => {
    return (
      (filterCategory === '' || blog.categories === filterCategory) &&
      (searchTerm === '' || blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }).sort((a, b) => {
    if (sortOption === 'date') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === 'a-z') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <BlogsPage>
      <h1 style={{ color: 'goldenrod' }}>My Blogs</h1>
      <FilterBar>
        <SearchInput>
          <FaSearch color="black" />
          <Input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchInput>
        <Select value={filterCategory} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="tech">Tech Updates</option>
          <option value="career">Career</option>
          <option value="workout">Workout</option>
          <option value="routine">Routine</option>
        </Select>
        <Select value={sortOption} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="a-z">A-Z</option>
        </Select>
      </FilterBar>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorAlert error={error} />
      ) : (
        <Suspense fallback={<Loader />}>
          <BlogsList>
            {filteredBlogs.map(blog => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </BlogsList>
        </Suspense>
      )}
    </BlogsPage>
  );
};

export default Blogs;

// Component Styled CSS
const BlogsPage = styled.div`
  padding: 30px;
  color: white;
  min-height: 100vh;
`;

const BlogsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
`;
