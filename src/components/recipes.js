import React, { Component } from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import '../stylesheets/recipes.scss';

class RecipeList extends Component {

    render() {
        const recipes = this.props.recipes.map( (r, idx) => (
            <Recipe key={idx} {...r} />
        ));

        return (
            <div className="recipes">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;