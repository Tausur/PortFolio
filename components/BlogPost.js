import React from 'react';
import Link from 'next/link'

const BlogPost = (props) => {
  return (
	  <div className="py-6 md:w-1/3 md:mx-2 mx-5">
      <Link href={`/Blogs/${props.blogName}`}>
      <img
        src={props.image}
        alt=""
        className={
			'md:w-72 w-full rounded-xl object-cover object-center shadow-xl cursor-pointer'
        }
      />
      </Link>
      <p className="text-2xl font-bold flex justify-center">{props.title}</p>
      <p className="px-5 py-4">
        {props.ShortDesc}
      </p>
    </div>
  );
};

export default BlogPost;
