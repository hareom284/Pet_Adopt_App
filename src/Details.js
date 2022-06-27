import { useParams } from "react-router-dom";
import { Component } from "react";
import Carosul from "./Carosul"
class Details extends Component {

    state =
        {
            loading: true
        }
    async componentDidMount() {
        const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${this.props.param}`)
        const resjson = await res.json();
        this.setState(Object.assign({ loading: false }, resjson.pets[0]))
    }
    render() {

        const { name, animal, breed, city, state, description, images } = this.state;

        if (this.state.loading) {
            return (
                <h3>Loading ... </h3>
            )
        }
        else {
            return (
                <div className="details">
                    <Carosul images={images} />
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} - {city},{state}</h2>
                    <p>{description}</p>
                </div>

            )
        }
        console.log(images)
    }
}

const DetailsParam = () => {
    const { id } = useParams()
    return (
        <Details param={id} />
    )
}
export default DetailsParam;