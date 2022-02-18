import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../HOC/layout';
import Home from '../components/home';
import Post from '../components/post';
import Profile from '../components/profile';

const Router = () => {

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/post/:postId" element={<Post />} />
            </Routes>
        </Layout>
    );
};

export default Router;