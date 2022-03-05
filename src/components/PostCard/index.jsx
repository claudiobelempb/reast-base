import "./styles.css";

const PostCard = ({ title, cover, body, id }) => {
  return (
    <div className={"post"}>
      <img src={cover} alt={title} />
      <div className={"posts-content"}>
        <h2>
          {title} - {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export { PostCard };
