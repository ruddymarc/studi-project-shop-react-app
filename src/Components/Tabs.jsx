import React, {useState} from 'react'
import './Tabs.css'

const Tabs = ({ tabs, children }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id)
  const handleTabsNavClick = (tab) => setActiveTabId(tab.id)
  const avisCount = children.filter(child => child.props.id === 'avis')[0].props.children.length
  const tabsNavTemplate = tabs.map(tab => (
    <li
      className={activeTabId === tab.id ? 'active' : null}
      onClick={() => handleTabsNavClick(tab)}
    >
      {tab.id === 'avis' ? tab.label.concat('(', avisCount, ')') : tab.label}
    </li>
  ))
  const tabsContent = children.filter(child => child.props.id === activeTabId)

  return (
    <div className="Tabs-wrapper">
      <ul className="Tabs-nav">
        {tabsNavTemplate}
      </ul>
      <div className="Tabs-content">
        {tabsContent}
      </div>
    </div>
  )
}

export default Tabs