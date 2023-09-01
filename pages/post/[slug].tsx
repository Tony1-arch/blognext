// ./frontend/pages/post/[slug].tsx
import {PortableText} from '@portabletext/react'
import { client } from "../../utils/configSanity"
import { urlFor } from "../../utils/configSanity"
import Link from "next/link"
import Image from "next/image"
import styles from '../post/Post.module.css'
// ./frontend/pages/post/[slug].tsx

const Post = ({post}:any) => {
  
  return (
    <div className={styles.ccard}>
      <h1 className={styles.title}>{post?.title}</h1>
      <div>
            <img className={styles.img}  src={urlFor(post?.mainImage).url() } alt={post?.title}/>
      </div>
      <div className={styles.par}>
      <PortableText value={post?.body}   />
      </div>
            
      
      <div >
      <Link href='/'> <button className={styles.btn}>Home</button>   </Link>
      </div>
      
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug:any) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context:any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  
  return {
    props: {
      post
    }
  }
}

export default Post