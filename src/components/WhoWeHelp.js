import React, {Component} from 'react';
import Decorations from "../assets/Decoration.svg";
import {NoGovernmentalOrganizations} from "../components/NoGovernmentalOrganizations";
import {LocalCollections} from "../components/LocalCollections";
import {Fundations} from "../components/Fundations";


class WhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Fundations,
            currentPage: 1,
            dataPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    changeOrganization = data => {
        this.setState({
            data: data
        });
    };

    render() {

        const { data, currentPage, dataPerPage } = this.state;

        // Logic for displaying data
        const indexOfLastTodo = currentPage * dataPerPage;
        const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
        const currentData = data.slice(indexOfFirstTodo, indexOfLastTodo);

        // const renderData = currentData.map((data, index) => {
        //     return <li key={index}>{data}</li>;
        // });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
            pageNumbers.push(i);
        }

        let style;

        if (pageNumbers.length === 1) {
            style = {
                visibility: 'hidden'
            };
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

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
                {currentData.map(data => {
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
                <ul className="page__numbers" style={style}>
                    {renderPageNumbers}
                </ul>
            </section>
        );
    }
}
export default WhoWeHelp;