import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';
import Head from 'next/head';
import mongoose from 'mongoose'
import Blog from '../model/Blog'
import { BiSearch } from 'react-icons/bi'

const Posts = (props) => {

  let styles = {
    dark: { background: 'rgb(32 32 35)', color: 'white' },
    white: { background: '#f0e7db' },
  };

  const [search, setSearch] = useState('')

  return (
    <>

      <Head>
        <title>Tausur Rahaman - All Posts</title>
        <meta name="description" content="Tausur Rahaman - Browse all my blogs and posts" />
        <link rel="icon" href="/metaIcon.png" />
      </Head>

      <div
        style={props.theme == 'dark' ? styles.dark : styles.white}
        className="flex justify-center pt-20 pb-5 md:px-0 px-5">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold font-mono inline-flex justify-center border-b-4 border-gray-500">
            Posts
          </h1>

          {/* Search bar */}
          <div className='my-8 py-1 flex items-center justify-center '>
            <div className='px-2 inline-flex items-center rounded-full border-2 border-gray-500'>
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='bg-transparent focus:outline-none px-4 py-2 md:w-96 border-r-2 border-gray-500' placeholder="Search blogs by it's title or any hotword" />
              <button>
                <BiSearch className='text-xl mx-2' />
              </button>
            </div>
          </div>

          {/* All Posts and Blogs here */}
          <div className="md:flex justify-center md:flex-wrap">
            {search == '' && props.blogs.map((blog) => {
              return (
                <BlogPost key={blog._id} blogName={blog.BlogName} title={blog.title} body={blog.body} image={blog.image} ShortDesc={blog.shortDesc} />
              )
            })}

            {search !== '' && props.blogs.map((blog) => {
              blog.title.toLowerCase().split(" ").map((text)=>{
              if (text == search.toLowerCase()) {
                return (
                  <BlogPost key={blog._id} blogName={blog.BlogName} title={blog.title} body={blog.body} image={blog.image} ShortDesc={blog.shortDesc} />
                )
              }
                                                                              })
            })}

          </div>
        </div>
      </div>
    </>
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

export default Posts;
