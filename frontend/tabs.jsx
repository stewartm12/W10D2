import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_id: 0,
    }
  }

  render() {
    const {tabsArr} = this.props;
    return (
    <div>
      {tabsArr.map((tab, idx) => {
        return (
          <ul key={idx}>
            <h1 >{tab.title}</h1>
            <article>{tab.content}</article>
          </ul>
        )
      })}
    </div>
    )
  }
}



export default Tabs;