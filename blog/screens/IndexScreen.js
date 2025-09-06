import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import {Context} from '../context/BlogContext' //context global veriyi ifade ediyor
import Feather from '@expo/vector-icons/Feather';

export default function IndexScreen({navigation}) {
 const {state,addBlogPost,deleteBlogPost} = useContext(Context) //context içindeki state ve addBlogPost fonksiyonunu alıyor
 //buradaki state şu anki blog yazılarını barındıran diz(array) dir. Diğer sayfada içinde veri var
 //buradaki addBlogPost kullanıcı butona tıkladığında çağırılan fonksiyon. Diğer sayfada içeriği tanımlanmışı
  return (
    <View>
      <FlatList
      data={state} //dataya state değerini attık yani ilk başta gelecek veriler bunlar da flatlist de tutuluyor zaten
      keyExtractor={(blogPost)=>blogPost && blogPost.id ? String(blogPost.id) : Math.random().toString()}
      renderItem={({item})=>{ //her bir blogPost için benzersiz bir key gerekiyor
        return (
          <TouchableOpacity onPress={()=> navigation.navigate('Show', { id: item.id })}>
          <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
           <Feather name="trash" size={24} color="black"/>
          </TouchableOpacity>
         </View>
         </TouchableOpacity>
        );
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopWidth:1,
    paddingHorizontal:10,
    paddingVertical:20,
    borderColor:'gray'
  },
  title:{
    fontSize:18
  },
})