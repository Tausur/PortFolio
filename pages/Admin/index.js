import React from 'react'
import Head from 'next/head'
import mongoose from 'mongoose'
import { useState } from 'react'
import AdminBlogPost from '../../components/AdminBlogPost'
import AdminWorkPost from '../../components/AdminWorkPost'
import UpdateBlog from '../../components/UpdateBlog'
import UpdateWork from '../../components/UpdateWork'
import Blog from '../../model/Blog'
import Work from '../../model/Work'
import { BiEditAlt } from 'react-icons/bi'

const Admin = (props) => {

  const [collection, setCollection] = useState('')
  const [updateDoc, setUpdateDoc] = useState('')
  const [blogID, setBlogID] = useState('')
  const [workID, setWorkID] = useState('')
  const [addDoc, setAddDoc] = useState('')

  const [abc, setAbc] = useState('')

  const theme = props.theme

  const styles = {
    'dark': { 'background': 'rgb(32 32 35)', 'color': 'white' },
    'white': { 'background': '#f0e7db' }
  }

  return (
    <main>

      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin only!" />
      </Head>

      <div style={theme == 'dark' ? styles.dark : styles.white} className='py-24 px-16'>
        <div>
          <h1 className='text-3xl font-semibold text-teal-500 font-mono pb-5'>Cloud MetaBase</h1>

          {/* Main section */}
          <div className='border-2 border-gray-600 rounded-md p-5 flex'>

            {/* Collection section */}
            <div className='w-1/5'>
              <h1 className='text-sky-500 text-lg font-semibold border-b-4 px-1 border-gray-500 inline-block mb-2' >Collections</h1>

              <button className='text-xl px-5 cursor-pointer font-mono py-1 hover:bg-zinc-600 block rounded-lg duration-300 ease-in-out' onClick={() => {
                setCollection('BlogPost')
                setAddDoc('')
                setWorkID('')
              }} >BlogPost</button>

              <button className='text-xl px-5 cursor-pointer font-mono py-1 hover:bg-zinc-600 block rounded-lg duration-300 ease-in-out' onClick={() => {
                setCollection('WorkBlog')
                setAddDoc('')
                setBlogID('')
              }} >WorkBlog</button>

            </div>

            {/* Document section */}
            <div className='w-1/3 border-l-2 border-gray-500 px-2'>
              <h1 className='text-sky-500 text-lg font-semibold border-b-4 px-1 border-gray-500 inline-block mb-2'>Documents</h1>
              <button className='text-xl font-mono block py-2 px-1 text-teal-500 ease-in-out duration-300 hover:text-sky-500' onClick={() => setAddDoc(collection == 'BlogPost' ? 'Blog' : 'Work')} >
                Add document
              </button>
              {collection == 'BlogPost' && props.blogs.map((blog) => {
                return (
                  <button className='text-xl active:bg-stone-500 duration-300 hover:bg-stone-400 px-2 rounded-md font-mono py-1 ease-in-out block' key={blog._id} onClick={() => setBlogID(blog._id)} >{blog._id}</button>
                )
              })}

              {collection == 'WorkBlog' && props.works.map((data) => {
                return (
                  <button className='text-xl active:bg-stone-500 duration-300 hover:bg-stone-400 px-2 rounded-md font-mono py-1 ease-in-out block' key={data._id} onClick={() => setWorkID(data._id)} >{data._id}</button>
                )
              })}

            </div>

            {/* Field section */}
            {addDoc == '' && <div className='w-1/2 border-l-2 border-gray-500 px-2'>
              <h1 className='text-sky-500 text-lg font-semibold border-b-4 px-1 border-gray-500 inline-block mb-2'>Fields</h1>

              {blogID !== '' && <button className='px-5 text-xl' onClick={() => {
                setAddDoc('UpdateBlog')
              }}>
                <BiEditAlt />
              </button>}

              {workID !== '' && <button className='px-5 text-xl' onClick={() => {
                setAddDoc('UpdateWork')
              }}>
                <BiEditAlt />
              </button>}

              {collection == 'BlogPost' && props.blogs.map((blog) => {
                if (blog._id == blogID) {
                  return (
                    <>

                    <div className='text-xl px-5 font-mono py-1 ease-in-out' key={blog._id}>
                      <div className='flex'>
                        <p className='pr-2 text-teal-500'>BlogName :</p>
                        {blog.BlogName}
                      </div>

                      <div className='flex'>
                        <p className='pr-2 text-teal-500'>Title :</p>
                        {blog.title}
                      </div>

                      <div className='flex'>
                        <p className='pr-2 text-teal-500'>ShortDesc :</p>
                        {blog.shortDesc}
                      </div>

                      <div className='flex'>
                        <p className='pr-2 text-teal-500'>Image :</p>
                        {blog.image}
                      </div>

                      <div className=''>
                        <p className='pr-2 text-teal-500'>Body :</p>
                        {blog.body.map((para) => {
                          return (
                            <div key={para._id} className='py-2 block'>
                              {para}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    </>
                  )
                }
              })}
              {
                collection == 'WorkBlog' && props.works.map((data) => {
                  if (data._id == workID) {
                    return (
                      <div className='text-xl px-5 font-mono py-1 ease-in-out' key={data._id}>

                        <div className='flex'>
                          <p className='pr-2 text-teal-500'>ProductName :</p>
                          {data.productName}
                        </div>

                        <div className='flex'>
                          <p className='pr-2 text-teal-500'>Title :</p>
                          {data.title}
                        </div>

                        <div className='flex'>
                          <p className='pr-2 text-teal-500'>ShortDesc :</p>
                          {data.shortDesc}
                        </div>

                        <div className='flex'>
                          <p className='pr-2 text-teal-500'>Image :</p>
                          {data.image}
                        </div>

                        <div>
                          <p className='pr-2 text-teal-500'>Body :</p>
                          {data.body.map((para) => {
                            return (
                              <div key={para._id} className='py-2 block'>
                                {para}
                              </div>
                            )
                          })}
                        </div>


                        <div>
                          <p className='pr-2 text-teal-500'>Info :</p>

                          <div className='flex pl-12'>
                            <p className='text-sky-500 pr-2'>Website : </p>
                            {data.info[0].Website}
                          </div>

                          <div className='flex pl-12'>
                            <p className='text-sky-500 pr-2'>Stack : </p>
                            {data.info[0].Stack}
                          </div>

                          <div className='flex pl-12'>
                            <p className='text-sky-500 pr-2'>Platform : </p>
                            {data.info[0].Platform}
                          </div>

                          <div className='flex pl-12'>
                            <p className='text-sky-500 pr-2'>Blog : </p>
                            {data.info[0].Blog}
                          </div>

                        </div>

                      </div>
                    )
                  }
                })
              }

            </div>
            }

            {addDoc == 'Blog' && <AdminBlogPost />}

            {addDoc == 'Work' && <AdminWorkPost />}

            {addDoc == 'UpdateBlog' && <div>
              {props.blogs.map((blog)=>{
                if(blog._id == blogID){
                  return(
                    <UpdateBlog id={blogID} blog={blog} key={blog._id}/>
                  )
                }
              })}
            </div>}

            {addDoc == 'UpdateWork' && <div>
              {props.works.map((data)=>{
                if(data._id == workID){
                  return(
                    <UpdateWork id={workID} data={data} key={data._id}/>
                  )
                }
              })}
            </div>}


          </div>
        </div>
      </div>

    </main>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ""

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/Admin/login",
        permanent: false
      }
    }
  }

  let blogs = await Blog.find()
  let works = await Work.find()
  blogs = blogs.reverse()
  works = works.reverse()

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
      works: JSON.parse(JSON.stringify(works))
    }
  }
}

export default Admin