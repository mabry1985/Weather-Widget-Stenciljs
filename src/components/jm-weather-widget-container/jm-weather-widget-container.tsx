import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import Sun from './assets/sun.svg';
import Menu from './assets/menu.svg';
import DownArrow from './assets/arrow-down.svg';

@Component({
  tag: 'jm-weather-widget-container',
  styleUrl: 'jm-weather-widget-container.css',
  shadow: true,
})
export class JmWeatherWidgetContainer {
  @State() weatherData: any;
  @Element() el: HTMLElement;
  @Prop() apiKey: string;
  @Prop() defaultCity: string;
  @Prop() defaultState: string;
  @Prop({ mutable: true, reflect: true }) drawerOpen: boolean = false;

  connectedCallback() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.defaultCity},${this.defaultState}&appid=${this.apiKey}&units=imperial`)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => this.weatherData = parsedRes)
      .catch(err => console.log(err));
  };

  toggleDrawer = () => {
    this.drawerOpen = !this.drawerOpen;
  };

  openMenu = () => {
    const menuOverlay = this.el.shadowRoot.querySelector('jm-weather-widget-menu-overlay');
    if (this.drawerOpen) {
      this.drawerOpen = false;
      setTimeout(() => menuOverlay.open(), 500);
    } else {
      menuOverlay.open();
    }
  };

  render() {
    // console.log(this.weatherData, 'this is the render method');
    return (
      <Host>
        <jm-weather-widget-menu-overlay />
        <header class="header-container">
          <div class="weather-icon-container" innerHTML={Sun} />
          <div class="info-container">
            <p class="temp">{this.weatherData && Math.round(this.weatherData['main']['temp'])}&deg;<span class="fahrenheit">F</span> </p>
            <h4 class="location">
              {this.weatherData && this.weatherData['name']}, {this.defaultState}
            </h4>
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
