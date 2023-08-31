import React from 'react'

import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import { client } from '../utils/configSanity';
import {urlFor} from "../utils/configSanity"
interface Ipost {
      _id: string;
      title:string;
      body:string;
      _createdAt:string;
      slug:any;
      mainImage:any;
}
async function getData(){
const query = `*[_type == 'post']`;
const data = await client.fetch(query);
return data as Ipost[];
}
async function Portfolio() {
      const data = (await getData()) as Ipost[];
      console.log(data) 
  return (
    
    <div>

      <div>Portfolio</div>
      <div className="bg-slate-200 ">
          <h1 className="text-center w-4/5 mx-auto font-bold text-xl  text-sky-400 md:text-4xl font-serif ">TONY CHAMP<span className="text-orange-600 mx-4 font-serif ">BLOG</span> </h1>
          </div>
      <div className=" p-10 w-full  grid mx-auto bg-slate-300 md:grid-cols-4 gap-5 ">
      {data?.map((item) =>(
            <div key={item?._id} className="flex flex-col ">
                   <img className="h-40"  src={urlFor(item?.mainImage).url() } alt={item?.title}/>
            <div>
                  <h1  className="text-center font-bold text-white-500 text-xl font-serif ">{item?.title}</h1>
            </div>
            <button  className="rounded-full bg-sky-500/100  hover:bg-sky-700 py-1 my-4 hover:text-white"><Link href={`/Fullcard/${item.slug.current}`}
        >Full Post</Link></button>
            </div>
            
      ))}
    </div>
    </div>
  )
}

export default Portfolio