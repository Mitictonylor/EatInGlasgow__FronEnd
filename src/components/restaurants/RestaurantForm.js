import React, {Component, Fragment} from 'react'

class RestaurantForm extends Component{

  constructor(props){
    super(props)//it will track the state just for the form
    this.state = {
           restaurant:{name: "",
                       url: "",
                       capacity: 0,
                       priceRange: "",
                       cousine: "",
                       discount:0,
                       email: "",
                       address: "",
                       postcode: "",
                       town: "",
                       openTime: "",
                       closeTime: ""
    }}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    if(this.props.restaurant){
      this.setState({restaurant: { ... this.props.restaurant}})
    }
  }

  handleChange(event) {
    let propertyName = event.target.name;
    let restaurant = this.state.restaurant
    restaurant[propertyName] = event.target.value;
    this.setState({restaurant: restaurant});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.restaurant.id){
      this.props.onUpdate(this.state.restaurant)
    }else{
      console.log("Called");
      this.props.onCreate(this.state.restaurant)
    }

}


  render(){
    let heading = ""; // ADDED

      if (!this.props.restaurant){
        heading = "Create restaurant"
      } else {
        heading = "Edit " + this.props.restaurant.name ;
      }
        return(
          <>
          <h3> {heading}</h3>

      <form className="form-container">
      <div className="form_wrap">
        <label htmlFor="name">Your name:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input your name..."
          name="name"
          id="name"
          type="text"
          value={this.state.name} />
      </div>

      <div className="form_wrap">
        <label htmlFor="url">Image URL:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input the image URL..."
          name="url"
          id="url"
          type="text"
          value={this.state.url} />
      </div>

      <div className="form_wrap">
        <label htmlFor="capacity">Seat capacity:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input seat capacity..."
          name="capacity"
          id="capacity"
          type="number"
          value={this.state.capacity} />
      </div>
      <div className="form_wrap">
      <label htmlFor="priceRange">PriceRange:</label>
      <select required id="price-range-selector" defaultValue="default" onChange = {this.handleChange}>
            <option>Choose a price Range...</option>
            <option value="cheap" >Cheap</option>
            <option value="medium" >Medium</option>
            <option value="expensive" >Expensive</option>
          </select>
      </div>

      <div className="form_wrap">
        <label htmlFor="cousine">Cousine:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input cousine..."
          name="cousine"
          id="cousine"
          type="text"
          value={this.state.cousine} />
      </div>

      <div className="form_wrap">
        <label htmlFor="discount">Discount:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input discount..."
          name="discount"
          id="discount"
          type="number"
          value={this.state.discount} />
      </div>

      <div className="form_wrap">
        <label htmlFor="email">Your email:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input your em@il..."
          name="email"
          id="email"
          type="email"
          value={this.state.email} />
      </div>

      <div className="form_wrap">
        <label htmlFor="address">address:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input address..."
          name="address"
          id="address"
          type="text"
          value={this.state.address} />
      </div>

      <div className="form_wrap">
        <label htmlFor="town">Town:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input town..."
          name="town"
          id="town"
          type="text"
          value={this.state.town} />
      </div>

      <div className="form_wrap">
        <label htmlFor="postcode">Postcode:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input postcode..."
          name="postcode"
          id="postcode"
          type="text"
          value={this.state.postcode} />
      </div>

      <div className="form_wrap">
        <label htmlFor="openTime">Opening time:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input opening time..."
          name="openTime"
          id="openTime"
          type="time"
          value={this.state.openTime} />
      </div>

      <div className="form_wrap">
        <label htmlFor="closeTime">Closing time:</label>
        <input
          required
          onChange={this.handleChange}
          placeholder="Input closing Time..."
          name="closeTime"
          id="closeTime"
          type="time"
          value={this.state.closeTime} />
      </div>

      <input onClick={this.handleSubmit} type="submit" value="submit" />
    </form>
    </>
    )
  }
}
export default RestaurantForm;
