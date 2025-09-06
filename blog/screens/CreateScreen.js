import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostFrom from '../components/BlogPostFrom'
import { Context } from '../context/BlogContext'

export default function CreateScreen({navigation}) {
  const {addBlogPost} = useContext(Context)
  return( 
  <BlogPostFrom 
  isEditable={false}
  onSubmit={(title,content)=>{
  addBlogPost(title,content, ()=>navigation.navigate('Index'));
  }}
  />
);
}

const styles = StyleSheet.create({});