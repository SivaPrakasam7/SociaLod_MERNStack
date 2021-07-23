import { Component } from "react";
import Title from '../components/widgets/title';
import Para from '../components/widgets/paragraph';
import Profile from '../components/widgets/profile';

export default class Main extends Component {
    render() {
        return (
            <div class="center Glass-plate main">
                <Title title="SociaLod" align="bold h1" />
                <Para cont=" &emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo obcaecati, maxime eum quae quaerat soluta officia nisi eveniet mollitia voluptas aliquam saepe architecto temporibus, sit harum enim ipsa. Dicta cum sequi alias sapiente delectus ad, voluptates, temporibus nesciunt debitis autem corrupti provident accusantium soluta consequatur facilis voluptatum officiis quae corporis. Esse iusto cupiditate labore rem possimus illum qui eligendi, porro amet corporis saepe placeat voluptas atque, facilis iste magni vel, consequatur optio assumenda rerum praesentium. Eos libero molestiae distinctio maiores nesciunt corrupti harum saepe reiciendis sapiente dolores, sed assumenda atque sit magnam? In rem beatae quaerat pariatur, vero vitae." />
                <Profile src={process.env.PUBLIC_URL + "/img/networking-teachers.jpg"} align="left-bottom" />
            </div>
        );
    }
}