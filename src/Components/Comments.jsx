import React from 'react'

const CommentsData=[
    {
    name:"parag varshney",
    text:"Lorem ispum dolor",
    replies:[{
        name:"parag varshney",
        text:"Lorem ispum dolor",
        replies:[{
            name:"parag varshney",
            text:"Lorem ispum dolor",
            replies:[],
        },],
        },],
    },
    {
        name:"parag varshney",
        text:"Lorem ispum dolor",
        replies:[{
            name:"parag varshney",
            text:"Lorem ispum dolor",
            replies:[],
        },],
    },
    {
        name:"parag varshney",
        text:"Lorem ispum dolor",
        replies:[{
            name:"parag varshney",
            text:"Lorem ispum dolor",
            replies:[{
                name:"parag varshney",
                text:"Lorem ispum dolor",
                replies:[],
            },],
            },],
    },
    {
        name:"parag varshney",
        text:"Lorem ispum dolor",
        replies:[{
            name:"parag varshney",
            text:"Lorem ispum dolor",
            replies:[],
            },],
        },
];
const Comment=({data})=>{
    const{name,text,replies}=data;
    return <div className='flex bg-gray-200 p-2 rounded-md my-2'>
        <img className='w-8 h-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'></img>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
}
const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        {comment.replies && comment.replies.length > 0 && ( // Check if there are replies
          <div className="ml-5 pl-5 border-l-2 border-black">
            <CommentsList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
};  

const Comments = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-xl'>Comments</h1>
      <CommentsList comments={CommentsData}/>
    </div>
  )
}

export default Comments
