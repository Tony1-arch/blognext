

import Link from 'next/link'
import Image from "next/image"
import styles from "./Pages.module.css"
import { client } from '../utils/configSanity';
import {urlFor} from "../utils/configSanity";


export default function Blog({ posts }) {
      return (
        <div  className={styles.main}>
          
          {posts.map((post) => (
           <div className={styles.card}  key={post?._id}>
            <h2 className={styles.title} >{post.title}</h2>
            <div>

            <Image fill={true} className={styles.img}  src={urlFor(post?.mainImage).url() } alt={post?.title}/>
           </div>
           <Link href={`/post/${post.slug.current}`}>
           <button className={styles.btn} >READ MORE</button>
           </Link>
           
           </div>
          ))}
        </div>
      )
    }
     
    // This function gets called at build time on server-side.
    // It won't be called on client-side, so you can even do
    // direct database queries.
    export async function getStaticProps() {
      // Call an external API endpoint to get posts.
      // You can use any data fetching library
      const query = `*[_type == 'post']`;
      const posts = await client.fetch(query);
      // By returning { props: { posts } }, the Blog component
      // will receive `posts` as a prop at build time
      return {
        props: {
          posts,
        },
      }
    }


