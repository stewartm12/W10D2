import React from 'react';
import TabsHeader from './tab_header'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    }

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(event) {
    this.setState({
      selectedTab: parseInt(event.currentTarget.key)
    })
  }

  render() {
    const {tabsArr} = this.props;
    const {selectedTab} = this.state;
    const currentTab = tabsArr[selectedTab];

    return (
      <div id="tabs">
        <TabsHeader selectedTab={selectedTab} tabs={tabsArr} selectTab={this.selectTab}/>
        <article id="tab-content">{currentTab.content}</article>
      </div>
    )
  }
}



export default Tabs;


{/* <li key={idx}>
  <header onClick={this.handleTab}>
    <h1 >{tab.title}</h1>
  </header>
  <article>{tab.content}</article>
</li> */}