import { Component, Event, Host, h, Method, State, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'jm-weather-widget-menu-overlay',
  styleUrl: 'jm-weather-widget-menu-overlay.css',
  shadow: true,
})
export class JmWeatherWidgetMenuOverlay {
  @State() cityValue: string;
  @State() stateValue: string;
  @State() loading: boolean = false;
  @State() error: string;
  @State() cityInputValid: boolean = false;
  @State() stateInputValid: boolean = false;

  @Prop({ reflect: true, mutable: true }) menuOpen: boolean = false;
  @Event({ bubbles: true, composed: true }) jmFetchWeather: EventEmitter<string[]>;

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const trimmedStateInput = this.stateValue.trim()
    const trimmedCityInput = this.cityValue.trim()
    this.jmFetchWeather.emit([trimmedCityInput, trimmedStateInput]);
    this.cityValue = '';
    this.stateValue = '';
    this.close();
  };

  handleCityChange = (e: any) => {
    this.cityValue = e.target.value;
    if (this.cityValue.trim() !== '') {
      this.cityInputValid = true;
    } else {
      this.cityInputValid = false;
    }
  };

  handleStateChange = (e: any) => {
    this.stateValue = e.target.value;
    if (this.stateValue.trim() !== '') {
      this.stateInputValid = true;
    } else {
      this.stateInputValid = false;
    }
  };

  private close = () => {
    this.menuOpen = false;
  };

  @Method()
  async open() {
    this.menuOpen = true;
  }

  render() {
    return (
      <Host>
        <p onClick={this.close} class="close-menu-button">
          x
        </p>
        <form class="search-form" onSubmit={e => this.handleSubmit(e)}>
          <input type="text" value={this.cityValue} onInput={event => this.handleCityChange(event)} placeholder="City..." />
          <input type="text" value={this.stateValue} onInput={event => this.handleStateChange(event)} placeholder="State..." />
          <input id="submit-button" type="submit" value=">" disabled={!this.cityInputValid || !this.stateInputValid} />
        </form>
        <footer>
          Built with Stencil.js -{' '}
          <a href="https://github.com/mabry1985/Weather-Widget-Stenciljs" target="_blank">
            Github
          </a>
        </footer>
      </Host>
    );
  }
}
