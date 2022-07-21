import {
  useGetPostsQuery,
  useAddPostMutation,
  useLazyGetPostsQuery,
} from "../store/query";
const Posts = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  const [getPost] = useLazyGetPostsQuery();
  const [addPost, postData] = useAddPostMutation();

  if (isLoading) return <h1>Loading..</h1>;
  if (error) return <h1>Error..</h1>;
  return (
    <div>
      <button
        onClick={() => {
          addPost({
            title: "foo",
            body: "bar",
            userId: 1,
          });
        }}
      >
        Add post
      </button>
      <button
        onClick={() => {
          getPost();
        }}
      >
        Get Posts
      </button>
      <ol>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Posts;
