import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react';
import { Context } from '../context/BlogContext'
import BlogPostFrom from '../components/BlogPostFrom';

export default function EditScreen({navigation,route}) {
     const {state,editBlogPost}=useContext(Context);
     const id= route.params.id;
      const blogPost=state.find((blogPost)=>blogPost.id===route.params.id);
  return (
    <BlogPostFrom 
    isEditable={true}
    initialValues={{title:blogPost.title,
       content:blogPost.content}}
        onSubmit={(title,content)=>{
       editBlogPost(id,title,content, ()=>navigation.pop());
       }}
       />
  )
}

const styles = StyleSheet.create({})