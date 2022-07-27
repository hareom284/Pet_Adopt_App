import { useParams } from "react-router-dom";
import { Component } from "react";
import Carosul from "./Carosul";
import ErrorBoundary from "./ErrorBoundry";
import ThemsContext from "./ThemsContext";
import Model from "../Model";
import client from "../api";
class Details extends Component {

    state =
        {
            loading: true,
            showModel: false
        }
    toggleShowModel = () => this.setState({ showModel: !this.state.showModel })
    async componentDidMount() {
        client.animal.show(this.props.param)
            .then((response) => {
                console.log(response.data, "Details")
                //set data from api
                this.setState(Object.assign({ loading: false }, response.data.animal))
            })
    }
    render() {
        const { name, type, breeds, contact, description, photos } = this.state;
        if (this.state.loading) {
            return (
                <h3>Loading  ... </h3>
            )
        }
        else {
            return (
                <div className="details">
                    <Carosul images={photos} />
                    <h1>{name}</h1>
                    <h2>{type} - {breeds.primary} - {contact.address.city},{contact.address.state}</h2>
                    <p>{description}</p>
                    {
                        this.state.showModel ?
                            (
                                <Model>
                                    <h1>Do you want to Adopt</h1>
                                    <div className="buttons">
                                        <a href="https://google.com">Yes</a>
                                        <button onClick={this.toggleShowModel}>No</button>
                                    </div>
                                </Model>
                            ) :
                            (
                                null
                            )

                    }
                    <ThemsContext.Consumer>
                        {
                            ([theme]) => (
                                <button
                                    style={{ backgroundColor: theme }}
                                    onClick={this.toggleShowModel}> Adopt {name}</button>
                            )
                        }
                    </ThemsContext.Consumer>
                </div >

            )
        }
        console.log(images)
    }
}

const DetailsParam = () => {
    const { id } = useParams()
    return (
        <ErrorBoundary>
            <Details param={id} />
        </ErrorBoundary>
    )
}
export default DetailsParam;