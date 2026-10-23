import react from 'react';
import {useGetPosts} from '../postshooks';

const PostList = () => {
  const{isLoading, isError, error,data} = useGetPosts()

  if (isLoading) return <p>loading..</p>

  if (isError ) return <p>{error.message}</p>

  return <div>{JSON.stringify(data)}</div>
}

export default PostList;