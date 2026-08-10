import { Link } from 'react-router-dom';

// Function to strip HTML tags
const stripHtmlTags = (html) => {
  return html.replace(/<[^>]*>/g, ''); // Remove HTML tags
};

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border border-green-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[30%] transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[200px] w-full object-cover transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2 bg-white'>
        <p className='text-lg font-semibold line-clamp-2 '>{post.title}</p>
        <p className='text-gray-600 text-sm line-clamp-3 '>
          {post.description || stripHtmlTags(post.content)} {/* Stripping HTML tags */}
        </p>
        <Link
          to={`/post/${post.slug}`}
          className=' absolute bottom-2 left-0 right-0 border border-[#ffa500] text-white bg-gradient-to-r from-[#46923c]  to-[#46923c] hover:bg-gradient-to-r from-[#46923c]  to-[#46923c] hover:text-white transition-all duration-300 text-center py-2 rounded-md m-2'
        >
          Read more
        </Link>
      </div>
    </div>
  );
}


// import { Link } from 'react-router-dom';

// export default function PostCard({ post }) {
//   return (
//     <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
//       <Link to={`/post/${post.slug}`}>
//         <img
//           src={post.image}
//           alt='post cover'
//           className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
//         />
//       </Link>
//       <div className='p-3 flex flex-col gap-2'>
//         <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
//         <span className='italic text-sm'>{post.category}</span>
//         <Link
//           to={`/post/${post.slug}`}
//           className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
//         >
//           Read article
//         </Link>
//       </div>
//     </div>
//   );
// }
