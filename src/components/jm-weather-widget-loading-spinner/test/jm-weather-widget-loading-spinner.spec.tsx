import { newSpecPage } from '@stencil/core/testing';
import { JmWeatherWidgetLoadingSpinner } from '../jm-weather-widget-loading-spinner';

describe('jm-weather-widget-loading-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmWeatherWidgetLoadingSpinner],
      html: `<jm-weather-widget-loading-spinner></jm-weather-widget-loading-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <jm-weather-widget-loading-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jm-weather-widget-loading-spinner>
    `);
  });
});
