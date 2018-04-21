import React, { Component } from 'react';

import './styles/ComponentPage.scss'

class ComponentPage extends Component {
  renderSidebarLink(link, index) {
    return (
      <a
        href={`/material-components-web-catalog/${link.url}`}
        key={index}
        role='listitem'
        className={`mdc-list-item ${link.active ? 'sidebar-active' : ''}`}>
          {link.content}
       </a>
    );
  }

  renderSidebar(activeLink) {
    const links = [{
      content: 'Button',
      url: '/button',
      active: activeLink === 'Button',
    }, {
      content: 'Card',
      url: '/card',
      active: activeLink === 'Card',
    }];

    return(
      <section className='sidebar mdc-layout-grid__cell mdc-layout-grid__cell--span-2'>
        {links.map(this.renderSidebarLink)}
      </section>
    );
  }

  renderResource(title, imageSource, url) {
    return (
      <a href={url} role='listitem' className='mdc-list-item' target='_blank'>
        <span className='mdc-list-item__graphic'>
          <img src={imageSource} className='resources-icon' alt={`${title} icon`}/>
        </span>
        <span className='mdc-list-item__text'>{title}</span>
      </a>
    );
  }

  renderDemoWrapper() {
    return(
      <section className='demo-wrapper mdc-layout-grid__cell mdc-layout-grid__cell--span-10'>
        <h1 className='mdc-typography--headline'>{this.props.title}</h1>
        <p className='mdc-typography--body1'>{this.props.description}</p>

        <h2 className='demo-title mdc-typography--title'>Resources</h2>
        {this.renderResource('Material Design Guidelines', './images/ic_material_design_24px.svg', this.props.designLink)}
        {this.renderResource('Documentation', './images/ic_drive_document_24px.svg', this.props.docsLink)}
        {this.renderResource('Source Code', './images/ic_code_24px.svg', this.props.sourceLink)}

        <h2 className='demo-title mdc-typography--title'>Demos</h2>
        {this.props.demos}
      </section>
    );
  }

  render() {
    return (
      <div>
        <section className='hero'>
          {this.props.hero}
        </section>
        <div className='mdc-layout-grid'>
          <div className='mdc-layout-grid__inner'>
            {this.renderSidebar(this.props.title)}
            {this.renderDemoWrapper()}
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPage;