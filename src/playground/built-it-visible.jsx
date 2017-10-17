class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.visibilityToggle = this.visibilityToggle.bind(this)
    this.state = {
      visibility: false
    }
  }
  visibilityToggle() {
    this.setState((prevState) => {
      return {
        visibility: !this.state.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={ this.visibilityToggle }>
          { this.state.visibility ? "Hide details" : "Show details" }
        </button>
        { this.state.visibility && <div>
                                     <p>Show me, show mee!</p>
                                   </div> }
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector("#app"))