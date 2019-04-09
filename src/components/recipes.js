import React, { Component } from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import '../stylesheets/recipes.scss';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: 'Fajitas',
                instructions: 'In a large bowl, whisk together 1⁄2 cup oil, lime juice, cumin, and red pepper flakes. Season chicken with salt and pepper, then add to bowl and toss to coat. Let marinate in the fridge at least 30 minutes and up to 2 hours. When ready to cook, heat remaining tablespoon oil in a large skillet over medium heat. Add chicken and cook until golden and cooked through, 8 minutes per side. Let rest 10 minutes, then slice into strips. Add bell peppers and onion to skillet and cook until soft, 5 minutes. Add chicken and toss until combined. Serve with tortillas. Add tastiest of french fries.',
                ingredients: ['1/2 c. EVOO', '1/4 c. Lime juice', '2 tsp. Cumin', '1/2 tsp. Crushed red pepper flakes', '1 lb. Boneless skinless chicken breasts', 'Salt', 'Freshly ground black pepper', '3 Bell peppers', '1 Large onion', 'Tortillas', 'Fresh salsa', 'Tasty, tasty french fries'],
                img: 'fajitas.jpg'
            },
            {
                title: 'Fruit Smoothie',
                instructions: 'Put all the ingredients in a blender and process until smooth. Pour into glasses and serve. Cooks note: For non-dairy smoothies, substitute 1 cup rice milk for the milk and yogurt. Or, use soy yogurt or milk instead of dairy.',
                ingredients: ['1 Frozen banana', '2 c. frozen strawberries, raspberries, cherries', '1 c. milk', '1/2 c. plain or vanilla yogurt', '1/2 c. freshly squeezed orange juice', '2-3 tbsp. honey or to taste'],
                img: 'smoothie.jpg'
            },
            {
                title: 'Avocado Toast',
                instructions: 'In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork. Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings. For perfect avocado toast, ingredient quality is key. Use fresh, crusty whole-wheat bread and the best extra-virgin olive oil you can find.',
                ingredients: ['1/2 small avocado', '1/2 tsp. Lime juice', '1/8 tsp. Salt', '1/8 tsp. Freshly ground black pepper', '1 slice whole grain bread, toasted', '1/2 tsp. EVOO', 'Red pepper flakes to top', 'Fresh tomatoes to top'],
                img: 'avocadotoast.jpg'
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

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