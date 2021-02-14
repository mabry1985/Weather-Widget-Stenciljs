import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jm-weather-widget-container',
  styleUrl: 'jm-weather-widget-container.css',
  shadow: true,
})
export class JmWeatherWidgetContainer {

  render() {
    return (
      <Host>
        <div class="info-container">
          <p class="temp">29f</p>
          <h4 class="location">Portland, OR</h4>
        </div>
      </Host>
    );
  }

}
