import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";
import { PostPage } from "./pages/PostPage";
import { AlbumsPage } from "./pages/AlbumsPage";
import { PhotosPage } from "./pages/PhotosPage";
import { PhotoPage } from "./pages/PhotoPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/posts/:id' element={<PostsPage />} />
          <Route path='/post/:postId' element={<PostPage />} />
          <Route path='/albums/:userId' element={<AlbumsPage />} />
          <Route path='/photos/:albumId' element={<PhotosPage />} />
          <Route path='/photo/:photoId' element={<PhotoPage />} />
      </Routes>
    </div>
  );
}

export default App;
