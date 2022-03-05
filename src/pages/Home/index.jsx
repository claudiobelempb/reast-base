import { Component } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Posts } from "../../components/Posts";
import { loadPost } from "../../utils/post-load";

import "./styles.css";

class Home extends Component {
  state = {
    posts: [],
    allPots: [],
    page: 0,
    postsPerPage: 3,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPost();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPots: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPots, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPost = allPots.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPost);
    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPots, searchValue } = this.state;

    const noMorePOsts = page + postsPerPage >= allPots.length;

    const filteredPosts = !!searchValue
      ? allPots.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        {!!searchValue && (
          <h3 className="text-container">search Value: {searchValue}</h3>
        )}
        <Input searchValue={searchValue} handleChange={this.handleChange} />

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

        {filteredPosts.length === 0 && (
          <p className="text-container">Não existem posts =(</p>
        )}

        {!searchValue && (
          <Button
            disabled={noMorePOsts}
            onClick={this.loadMorePosts}
            title={"Load more posts"}
          />
        )}
      </section>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Home</h1>
//     </div>
//   );
// }

export default Home;
