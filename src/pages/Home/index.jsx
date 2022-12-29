import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import CoverImage from '../../components/Home/CoverImage';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
//import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar 
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
      
      */}
      

      {/* Blog List & Empty View */}
      <div className='container'>
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      </div>
      {/* Secondary Image <CoverImage/> */}
      <CoverImage/>
      {/*Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
