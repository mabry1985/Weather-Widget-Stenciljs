import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jm-weather-widget-menu-overlay',
  styleUrl: 'jm-weather-widget-menu-overlay.css',
  shadow: true,
})
export class JmWeatherWidgetMenuOverlay {

  render() {
    return (
      <Host>
        <p class="close-menu-button">x</p>
      </Host>
    );
  }

}
