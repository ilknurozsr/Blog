import React, { useState, useReducer} from 'react';
import createDataContext from './createDataContext';
//bu sayfada dispatch edilen aksiyona göre state i değiştirceğiz
const blogReducer=(state,action)=>{ 
    switch(action.type) {
        case 'add_blogpost': 
            return[...state,{
            id:Math.floor(Math.random()*999999),
            title:action.payload.title,
            content:action.payload.content,
        },
    ]; 
       
        case 'edit_blogpost':
            return state.map((blogPost)=>{
                return blogPost.id===action.payload.id?action.payload: blogPost;
            })


        case 'delete_blogpost':
            return state.filter((blogPost)=>blogPost.id !== action.payload);
            default:
                return state;
       }
    };   

 const addBlogPost=(dispatch)=>{ //call back function. Bu fonksiyon çağırıldığında reducer atype:add_blogpost gönderen bir fonksiyon döner
       return (title, content, callback) =>{
    dispatch({type:'add_blogpost',payload:{title,content}});
       };
       if (callback) {
      callback(); 
    }
    };
    const editBlogPost=(dispatch)=>{ 
       return (id,title, content, callback) =>{
    dispatch({type:'edit_blogpost',payload:{id,title,content}});
       };
       if (callback) {
      callback(); 
    }
    };
    const deleteBlogPost=(dispatch)=>{
       return(id)=>{
        dispatch({type:'delete_blogpost',payload:id})
       };
    };

export const {Context, Provider}=createDataContext(blogReducer,{addBlogPost, deleteBlogPost,editBlogPost},[]);
//buradaki Context diğer sayfada da kullanılacak ve uygulamanın tüm ekranlarda kullanılabilen global verisini ifade ediyor. createDataContext i çağırıyoruz.
//tüm uygulamayı sarabilmek için de prvider. Diğer sayfada