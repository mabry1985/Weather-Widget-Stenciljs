import { newSpecPage } from '@stencil/core/testing';
import { JmWeatherWidgetContainer } from '../jm-weather-widget-container';

describe('jm-weather-widget-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmWeatherWidgetContainer],
      html: `<jm-weather-widget-container></jm-weather-widget-container>`,
    });
    expect(page.root).toEqualHtml(`
      <jm-weather-widget-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jm-weather-widget-container>
    `);
  });
});
