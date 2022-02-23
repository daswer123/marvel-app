import "./RandomBlock.scss";

import CharInfo from "../CharInfo/CharInfo";
import RandomChar from "../RandomChar/RandomChar";
import { Component } from "react";
import { getRandomChar } from "../../services/service";
import Spinner from "../Spinner/Spinner";
import { resizeText } from "../../services/helper";

class RandomBlock extends Component {
  state = {
    data: {},
    story: "",
    loading: true,
  };

  async componentDidMount() {
    const request = await getRandomChar();

    const [data, story] = request;
    const resizeStory = resizeText(story, 150);

    this.setState(() => ({
      data,
      story: resizeStory,
      loading: false,
    }));
  }

  changeChar = async () => {
    this.setState((state) => ({
      ...state,
      loading: true,
    }));

    const request = await getRandomChar();

    const [data, story] = request;
    const resizeStory = resizeText(story, 150);

    this.setState(() => ({
      data,
      story: resizeStory,
      loading: false,
    }));
  };

  render() {
    const page = <CharInfo data={this.state.data} story={this.state.story} />;

    return (
      <section className="random-block">
        {this.state.loading ? <Spinner /> : page}
        {/* <CharInfo data={this.state.data} story={this.state.story} /> */}
        <RandomChar changeRandomChar={this.changeChar} />
      </section>
    );
  }
}

export default RandomBlock;
