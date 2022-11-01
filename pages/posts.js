import React from 'react';
import BlogPost from '../components/BlogPost';
import Head from 'next/head';
import mongoose from 'mongoose'
import Blog from '../model/Blog'

const Posts = (props) => {

  let styles = {
    dark: { background: 'rgb(32 32 35)', color: 'white' },
    white: { background: '#f0e7db' },
  };

  // console.log(props.blogs[0].BlogName)

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

          {/* All Posts and Blogs here */}
          <div className="md:flex justify-center md:flex-wrap">
            {props.blogs.map((blog) => {
              return (
                <BlogPost key={blog._id} blogName={blog.BlogName} title={blog.title} body={blog.body} image={blog.image} ShortDesc={blog.shortDesc}/>
              )
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
