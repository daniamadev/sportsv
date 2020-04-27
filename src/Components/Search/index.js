import React, { Component } from "react"
import { connect } from "react-redux"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
    }
  }

  render() {
    return <input type="text" onChange={this.props.handleSearch} />
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
  }
}

export default connect(mapStateToProps)(Search)
