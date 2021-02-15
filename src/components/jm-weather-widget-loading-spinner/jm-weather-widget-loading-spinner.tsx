import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jm-weather-widget-loading-spinner',
  styleUrl: 'jm-weather-widget-loading-spinner.css',
  shadow: true,
})
export class JmWeatherWidgetLoadingSpinner {

  render() {
    return (
      <Host>
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Host>
    );
  }

}
