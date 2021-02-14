import { Component, Host, h, Method, State, Prop } from '@stencil/core';

@Component({
  tag: 'jm-weather-widget-menu-overlay',
  styleUrl: 'jm-weather-widget-menu-overlay.css',
  shadow: true,
})
export class JmWeatherWidgetMenuOverlay {
  @State() searchValue: string;
  @Prop({ reflect: true, mutable: true }) menuOpen: boolean = false;
 
  handleSubmit(e: Event){
    e.preventDefault();
    this.close();
    console.log(this.searchValue);
  }

  handleChange(e: any) {
    this.searchValue = e.target.value;
  }

  close = () => {
    this.menuOpen = false;
  }

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
          <input type="text" value={this.searchValue} onInput={event => this.handleChange(event)} placeholder="Enter Zipcode..." />
          <input type="submit" value="search" />
        </form>
        <footer>
          Built with Stencil.js - <a href="https://github.com/mabry1985/Weather-Widget-Stenciljs" target="_blank" >Github</a>
        </footer>
      </Host>
    );
  }
}
