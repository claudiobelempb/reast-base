import { PostCard } from "../PostCard";
import "./styles.css";

const Posts = ({ posts }) => {
  return (
    <div className={"posts"}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          cover={post.cover}
          body={post.body}
        />
      ))}
    </div>
  );
};

export { Posts };
