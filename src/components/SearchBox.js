import React, {Component, PropTypes} from 'react'
import AutoComplete from 'material-ui/lib/auto-complete'
import RaisedButton from 'material-ui/lib/raised-button'
import {Link} from 'react-router'
import { defineMessages, injectIntl, intlShape} from 'react-intl'

const styles = {
  button: {
    margin: 22,
    border: 0
  }
}

const messages = defineMessages({
  search: {
    id: 'pictograms.search',
    description: 'searchBox message',
    defaultMessage: 'Enter search text'
  }
})

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    /* this.state = {
      dataSource: []
    } */
    // this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleUpdateInput = t => {
    if (t.keyCode === 13) {
      let link = `/pictograms/search/${t}`
      this.context.router.push(link)
    }
    this.props.onChange(t)
  }

  handleSubmit = t => {
    console.log(t)
    this.props.onChange(t)
    let link = `/pictograms/search/${t}`
    this.context.router.push(link)
  }

  render() {
    const {formatMessage} = this.props.intl
    let dataSource = this.props.dataSource
    let link = `/pictograms/search/${this.props.value}`
    // if (typeof dataSource === 'undefined') dataSource = []
    return (
      <div>
        <AutoComplete ref='input' floatingLabelText={formatMessage(messages.search)} filter={AutoComplete.fuzzyFilter} dataSource={dataSource}
          onNewRequest={this.handleSubmit} onUpdateInput={this.handleUpdateInput} searchText={this.props.value} />
        <RaisedButton label='Search' primary={true} style={styles.button} containerElement={<Link to={link} />}/>
      </div>
    )
  }
}

SearchBox.contextTypes = {
  router: React.PropTypes.object.isRequired
}

SearchBox.propTypes = {
  dataSource: PropTypes.array.isRequired,
  intl: intlShape.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

// export default SearchBox

export default injectIntl(SearchBox)
