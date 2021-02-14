import { Component, Element, Host, h, Prop } from '@stencil/core';
import Sun from './assets/sun.svg';
import Menu from './assets/menu.svg';
import DownArrow from './assets/arrow-down.svg';

@Component({
  tag: 'jm-weather-widget-container',
  styleUrl: 'jm-weather-widget-container.css',
  shadow: true,
})
export class JmWeatherWidgetContainer {
  @Element() el: HTMLElement;
  @Prop({ mutable: true, reflect: true }) drawerOpen: boolean = false;

  toggleDrawer = () => {
    this.drawerOpen = !this.drawerOpen;
  };

  openMenu = () => {
    const menuOverlay = this.el.shadowRoot.querySelector('jm-weather-widget-menu-overlay');
    if(this.drawerOpen) {
      this.drawerOpen = false;
      setTimeout(() => menuOverlay.open(), 500)
    } else {
      menuOverlay.open();
    }
  };

  render() {
    return (
      <Host>
        <jm-weather-widget-menu-overlay />
        <header class="header-container">
          <div class="weather-icon-container" innerHTML={Sun} />
          <div class="info-container">
            <p class="temp">29f</p>
            <h4 class="location">Portland, OR</h4>
          </div>
          <div class="button-container">
            <div onClick={this.openMenu} innerHTML={Menu} class="hamburger-menu" />
            <div onClick={this.toggleDrawer} innerHTML={DownArrow} class="dropdown-button" />
          </div>
        </header>
        <content class="forecast-container">
          <div class="forecast">
            <h3 class="day">Mon</h3>
            <p class="temperature">L: 36f / H: 54f</p>
            <div innerHTML={Sun} />
          </div>
          <div class="forecast">
            <h3 class="day">Tue</h3>
            <p class="temperature">L: 36f / H: 54f</p>
            <div innerHTML={Sun} />
          </div>
          <div class="forecast">
            <h3 class="day">Wed</h3>
            <p class="temperature">L: 36f / H: 54f</p>
            <div innerHTML={Sun} />
          </div>
          <div class="forecast">
            <h3 class="day">Thur</h3>
            <p class="temperature">L: 36f / H: 54f</p>
            <div innerHTML={Sun} />
          </div>
          <div class="forecast">
            <h3 class="day">Fri</h3>
            <p class="temperature">L: 36f / H: 54f</p>
            <div innerHTML={Sun} />
          </div>
        </content>
      </Host>
    );
  }
}
