import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io'
import mongoose from 'mongoose'
import Blog from '../../model/Blog'
import { useState } from 'react';

const Blogs = (props) => {

  const router = useRouter();

  let styles = {
    dark: { background: 'rgb(32 32 35)', color: 'white' },
    white: { background: '#f0e7db' },
  };

  let i = 0

  return (
    <main>

      <div
        className="pt-24 pb-5 md:px-10 px-8"
        style={props.theme == 'dark' ? styles.dark : styles.white}>

        <div className='flex justify-center'>

          {props.blogs.map((blog) => {
            if (router.query.blog == blog.BlogName) {
              return (
                <div className='md:w-1/2 py-5' key={blog.id}>

                  <Head>
                    <title>{blog.title}</title>
                    <link rel="icon" href="/metaIcon.png" />
                  </Head>

                  <div className="flex items-center">
                    <Link href='/posts'>
                      <button className="text-2xl text-teal-500 cursor-pointer">Posts</button>
                    </Link>
                    <IoIosArrowForward className='text-3xl px-1 font-bold' />
                    <p className="text-2xl cursor-pointer">{blog.title}</p>
                  </div>

                  {/* body here */}
                  <p className="py-10 text-lg">
                    {blog.shortDesc}
                  </p>

                  {/*post image */}
                  <div className='flex justify-center md:pb-5 pb-3'>
                    <img src={blog.image} className="rounded-xl md:w-96 w-96" />
                  </div>

                  {blog.body.map((para) => {
                    i = i + 1
                    return (
                      <p className="py-3 text-lg" key={i}>
                        {para}
                      </p>
                    )
                  })}

                </div>
              )
            }
          })}

        </div>
      </div>

    </main>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
  }
  let blogs = await Blog.find()
  blogs = blogs.reverse()
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }
  }
}

export default Blogs;
