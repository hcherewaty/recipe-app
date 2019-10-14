import React, {Component} from 'react';
import '../stylesheets/form.scss';

class RecipeInput extends Component {
    static defaultProps = {
      onClose() {},
      onSave() {}
    }
    
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        instructions: "",
        ingredients: [''],
        img: ''
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleNewIngredient = this.handleNewIngredient.bind(this);
      this.handleChangeIng = this.handleChangeIng.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }
    
    handleNewIngredient(e) {
      const {ingredients} = this.state;
      this.setState({ingredients: [...ingredients, '']});
    }
    
    handleChangeIng(e) {
      const i = Number(e.target.name.split('-')[1]);
      const ingredients = this.state.ingredients.map((ingredient, idx) => {
        if(idx === i) {
            return e.target.value;
        } else {
            return ingredient;
        }
      });
      this.setState({ingredients});
    }
    
    handleSubmit(e) {
      e.preventDefault();
      this.props.onSave({...this.state});
      this.setState({
        title: '',
        instructions: '',
        ingredients: [''],
        img: ''
      })
    }
    
    render() {
      const {title, instructions, img, ingredients} = this.state;
      const {onClose} = this.props;
      let inputs = ingredients.map( (ingredient, idx) => (
        <div
          className="recipe-form-line"
          key={`ingredient-${idx}`}
        >
          <label> {idx +1 }.
            <input
              type="text"
              name={`ingredient-${idx}`}
              value={ingredient}
              size={45}
              autoComplete="off"
              placeholder=" Ingredient"
              onChange={this.handleChangeIng} />
          </label>
        </div>
      ));
      
      return (
        <div className="recipe-form-container">
          <form className='recipe-form' onSubmit={this.handleSubmit}>

            <button
              type="button"
              className="close-button"
              onClick={onClose}
            >
              X
            </button>

            <div className='recipe-form-line'>
              <label htmlFor='recipe-title-input'>Title</label>
              <input
                id='recipe-title-input'
                key='title'
                name='title'
                type='text'
                value={title}
                size={42}
                autoComplete="off"
                onChange={this.handleChange}/>
            </div>

            <label
              htmlFor='recipe-instructions-input'
              style={{marginTop: '5px'}}
            >
              Instructions
            </label>

            <textarea
              key='instructions'
              id='recipe-instructions-input'
              type='Instructions'
              name='instructions'
              rows='8'
              cols='50'
              autoComplete='off'
              value={instructions}
              onChange={this.handleChange}/>

            {inputs}

            <button
              type="button"
              onClick={this.handleNewIngredient}
              className="buttons"
            >
              +
            </button>

            <div className='recipe-form-line'>
              <label htmlFor='recipe-img-input'>Image Url</label>
              <input
                id='recipe-img-input'
                type='text'
                placeholder=''
                name='img'
                value={img}
                size={36}
                autoComplete='off'
                onChange={this.handleChange} />
            </div>

            <button
              type="submit"
              className="buttons"
              style={{alignSelf: 'flex-end', marginRight: 0}}
            >
              SAVE
            </button>

          </form>
        </div>
      )
    }
  }
  
  export default RecipeInput;

// class RecipeForm extends Component {
//     static defaultProps = {
//         onClose() {},
//         onSave() {}
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             instructions: '',
//             ingredients: [''],
//             img: ''
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleNewIngredient = this.handleNewIngredient.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.onSave({...this.state});
//         this.setState({title: '', instructions: '', ingredients: [''], img: ''});
//     }

//     handleChangeIngredient(e) {
//         const i = Number(e.target.name.split('-')[1]);
//         const ingredients = this.state.ingredients.map( (ing, idx) => (
//             idx === i ? e.target.value : ing
//         ));
//         this.setState({ingredients});
//     }

//     handleChange(e) {
//         this.setState({[e.target.name]: e.target.value});
//     }

//     handleNewIngredient(e) {
//         const {ingredients} = this.state;
//         this.setState = ({ingredients: [...ingredients, '']});
//     }

//     render(){
//         const {title, instructions, img, ingredients} = this.state;
//         const onClose = this.props;
//         let inputs = ingredients.map( (ingredient, idx) => (
//             <div className = "recipeFormLine" key={`ingredient-${idx}`}>
//                 <label> {idx + 1}.
//                     <input 
//                     type="text"
//                     name={`ingredient-${idx}`}
//                     value={ingredient}
//                     size={45}
//                     autoComplete="off"
//                     placeHolder="Ingredient"
//                     onChange={this.handleChangeIngredient}
//                     />
//                 </label>
//             </div>
//         ));

//         return (
//             <div className="recipeFormContainer">
//                 <form className="recipeForm" onSubmit={this.handleSubmit}>
//                     <button 
//                     type="button"
//                     className = "closeButton"
//                     onClick={onClose}
//                     >
//                     X</button>

//                     <div className="recipeFormLine">
//                         <label htmlFor="recipeTitle">Title</label>
//                         <input 
//                         id="recipeTitle"
//                         key="title"
//                         name="title"
//                         type="text"
//                         value={title}
//                         size={42}
//                         autoComplete="off"
//                         onChange={this.handleChange}
//                         />
//                     </div>

//                     <label htmlFor="recipeInstructions" style={{marginTop: '5px'}}>
//                         Instructions
//                     </label>
//                     <textarea
//                         key="instructions"
//                         id="recipeInstructions"
//                         type="Instructions"
//                         name="instructions"
//                         rows="8"
//                         cols="50"
//                         autoComplete="off"
//                         value={instructions}
//                         onChange={this.handleChange}
//                     />

//                     {inputs}

//                     <button 
//                         type="button"
//                         onClick={this.handleNewIngredient}
//                         className="buttons"
//                     >
//                     +
//                     </button>

//                     <div className="recipeFormLine">
//                         <label htmlFor="recipeImg">Image URL</label>
//                         <input 
//                             id="recipeImg"
//                             type="text"
//                             placeholder="Image URL"
//                             name="img"
//                             value={img}
//                             size={36}
//                             autoComplete="off"
//                             onChange={this.handleChange}
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="buttons"
//                         style={{alignSelf: 'flex-end', marginRight: 0}}
//                     >
//                     SAVE
//                     </button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default RecipeForm;