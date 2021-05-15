import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';

import NewsCard from '../Components/NewsCard';

import NewsApi from '../apis/NewsApi';


const News = ({navigation}) => {

    const [news, setNews] = useState([]);

    useEffect(()=>{
        getNewsFromAPI()
    },[]);

    function getNewsFromAPI(){
        NewsApi.get('top-headlines?country=us&apiKey=6366504a3f964183b2083cba391d14d2')
            .then(async function(response){
                setNews(response.data);
                console.log(news);
            })
            .catch(err=>console.log(err));

        if(!news){
            return null;
        }
    }

    return(
        <View>
            <FlatList 
                data = {news.articles}
                keyExtractor={(item, idx)=>'key'+idx}
                renderItem = {({item})=> {
                    return <NewsCard item={item}/> 
                }}
            />
        </View>
    )
}

export default News;