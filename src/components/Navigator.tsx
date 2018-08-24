import { Component } from "react"
import * as React from 'react'
import { connect } from "react-redux" /* code change */
import Login from './Login'
import Main from './Main'

export interface State {
  showingPage: string,
}

export class Navigator extends Component<State> {
  constructor(props: any) {
    super(props)
  }

  render() {
    let renderElement = <Login/>
    if (this.props.showingPage === 'Main') {
      renderElement = <Main/>
    }
    return (
      <div>
        {renderElement}
      </div>
    )
  }
}


const mapStateToProps = (state: any) => ({
  showingPage: state.NavigatorReducer.showingPage,
})
const mapDispatchToProps = (dispatch: any) => ({
});
export default connect<void, void, void>(
  mapStateToProps,
  mapDispatchToProps
)(Navigator)