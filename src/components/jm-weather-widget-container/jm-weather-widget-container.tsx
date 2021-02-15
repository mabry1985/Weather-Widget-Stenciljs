import { Component, Element, Host, h, Prop, State, Listen } from '@stencil/core';
import Sun from './assets/sun.svg';
import Drizzle from './assets/cloud-drizzle.svg';
import Storm from './assets/cloud-lightning.svg';
import Rain from './assets/cloud-rain.svg';
import Snow from './assets/cloud-snow.svg';
import Cloudy from './assets/cloud.svg';
import Menu from './assets/menu.svg';
import DownArrow from './assets/arrow-down.svg';

@Component({
  tag: 'jm-weather-widget-container',
  styleUrl: 'jm-weather-widget-container.css',
  shadow: true,
})
export class JmWeatherWidgetContainer {
  @State() weatherData: any;
  @State() city: any;
  @State() state: any;
  @Element() el: HTMLElement;
  @Prop() apiKey: string;
  @Prop() defaultCity: string = 'Portland';
  @Prop() defaultState: string = 'Oregon';
  @Prop({ mutable: true, reflect: true }) drawerOpen: boolean = false;

  connectedCallback() {
    this.city = this.defaultCity;
    this.state = this.defaultState;
    this.fetchWeatherData();
  }

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

  private fetchWeatherIcon = (): string => {
    const weatherId = this.weatherData['weather'][0]['id'];
    switch (true) {
      case weatherId > 199 && weatherId < 233:
        return Storm;
      case weatherId > 299 && weatherId < 322:
        return Drizzle;
      case weatherId > 499 && weatherId < 532:
        return Rain;
      case weatherId > 599 && weatherId < 623:
        return Snow;
      case weatherId > 700 && weatherId < 782:
        return Cloudy;
      case weatherId === 800:
        return Sun;
      case weatherId > 800 && weatherId < 803:
        return Sun;
      case weatherId > 802 && weatherId < 805:
        return Cloudy;
      default:
        return Cloudy;
    }
  };

  @Listen('jmFetchWeather')
  onSearchSubmit(event: CustomEvent) {
    if (event.detail) {
      this.fetchWeatherData(event.detail[0], event.detail[1])
    }
  }

  private fetchWeatherData(city: string = this.defaultCity, state: string = this.defaultState) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${this.apiKey}&units=imperial`)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        this.weatherData = parsedRes
        this.city = city;
        this.state = state;
      })
      .catch(err => console.log(err, 'error'));
  }

  render() {
    const icon = this.weatherData && this.fetchWeatherIcon();
    return (
      <Host>
        <jm-weather-widget-menu-overlay />
        <header class="header-container">
          <div class="weather-icon-container" innerHTML={icon} />
          <div class="info-container">
            <p class="temp">
              {this.weatherData && Math.round(this.weatherData['main']['temp'])}&deg;<span class="fahrenheit">F</span>{' '}
            </p>
            <h4 class="location">
              {this.weatherData && this.weatherData['name']}, {this.state}
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
