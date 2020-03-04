import React, {Component} from 'react';
import Decorations from "../assets/Decoration.svg";
import {NoGovernmentalOrganizations} from "../components/NoGovernmentalOrganizations";
import {LocalCollections} from "../components/LocalCollections";
import {Fundations} from "../components/Fundations";
// import Pagination from "react-js-pagination";


class WhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Fundations,
            // currentPage: 1,
            // dataPerPage: 3
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(event) {
    //     this.setState({
    //         currentPage: Number(event.target.id)
    //     });
    // }

    changeOrganization = data => {
        this.setState({
            data: data
        });
    };

    render() {
        // const { data, currentPage, dataPerPage } = this.state;
        // // Logic for displaying todos
        // const indexOfLastData = currentPage * dataPerPage;
        // const indexOfFirstData = indexOfLastData - dataPerPage;
        // const currentData = data.slice(indexOfFirstData, indexOfLastData);
        //
        // const renderData = currentData.map((data, index) => {
        //     return <li key={index}>{data}</li>;
        // });
        return (
            <section className="organizations__container">
                <h4>Komu pomagamy?</h4>
                <img src={Decorations} alt="T-shirt"/>
                <div className="organizations__change__buttons">
                    <button onClick={() => this.changeOrganization(Fundations)}>
                        Fundacjom non-profit
                    </button>
                    <button onClick={() => this.changeOrganization(NoGovernmentalOrganizations)}>
                        Organizacjom pozarządowym
                    </button>
                    <button onClick={() => this.changeOrganization(LocalCollections)}>
                        Lokalnym zbiórkom
                    </button>
                </div>
                <span>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji z którym
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
                    czego potrzebują.
                </span>
                {this.state.data.map(data => {
                    return (
                        <div className="organizations__list" key={data.id}>
                            <div className="organizations__list__left">
                                <h3>{data.name}</h3>
                                <span>Cel i misja: {data.aim}</span>
                            </div>
                            <div className="organizations__list__right">
                                <span>{data.gifts}</span>
                            </div>
                        </div>
                    );
                })}
            </section>
        );
    }
}
export default WhoWeHelp;