import { Component, Host, h, Prop } from '@stencil/core';
import Sun from './assets/sun.svg';
import Menu from './assets/menu.svg';
import DownArrow from './assets/arrow-down.svg';

@Component({
  tag: 'jm-weather-widget-container',
  styleUrl: 'jm-weather-widget-container.css',
  shadow: true,
})
export class JmWeatherWidgetContainer {
  @Prop({ mutable: true, reflect: true }) drawerOpen: boolean = false;


  toggleDrawer = () => {
    this.drawerOpen = !this.drawerOpen; 
    console.log("drawer toggled")
  }

  render() {
    return (
      <Host>
        <div class="header-container">
          <div class="weather-icon-container" innerHTML={Sun} />
          <div class="info-container">
            <p class="temp">29f</p>
            <h4 class="location">Portland, OR</h4>
          </div>
          <div class="button-container">
            <div innerHTML={Menu} class="hamburger-menu" />
            <div onClick={this.toggleDrawer} innerHTML={DownArrow} class="dropdown-button" />
          </div>
        </div>
      </Host>
    );
  }
}
