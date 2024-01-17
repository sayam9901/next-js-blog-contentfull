import Image from 'next/image'
import styles from './page.module.css'
import { getBlogPosts } from '../ContentModel'
import Card from "../Card"
import Navbar from './Navbar'
import  image  from '../Utils/image.jpg'
import Header from './Header'
import Footer from './Footer'
import { useEffect,useState } from 'react'

interface Blog {
  id: number;
  title: string;
  author: string;
  // Add other properties as needed
}

const Home = async() => {
 const blogs = await getBlogPosts();
 
  const handlePopUp = () => {
    console.log('hii');
  };

  return (
    <>
    <Navbar/>
    <Header/>
    <main className={styles.main}>
      <div className={styles.card}>
         {
          blogs.map((blog:any)=>(
           <Card
           title = {blog.title}
           author={blog.author}
           image="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"
           description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
           change = {blog.title}
           /> 
          ))
          
         }
      </div>
    </main>
    <Footer/>
    </>
  )
}
export default Home