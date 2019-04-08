import React, { Component } from 'react';
import '../stylesheets/components.css';

class Recipe extends Component {
    render() {

        const {title} = this.props;
        const ingredients = this.props.ingredients.map( (ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
        ));

        return (
            <>
                <div>{title}</div>
                <ul>
                    {ingredients}
                </ul>
            </>
        );
    }
}

export default Recipe;