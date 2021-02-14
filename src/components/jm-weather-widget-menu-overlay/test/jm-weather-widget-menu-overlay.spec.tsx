import { newSpecPage } from '@stencil/core/testing';
import { JmWeatherWidgetMenuOverlay } from '../jm-weather-widget-menu-overlay';

describe('jm-weather-widget-menu-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmWeatherWidgetMenuOverlay],
      html: `<jm-weather-widget-menu-overlay></jm-weather-widget-menu-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <jm-weather-widget-menu-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jm-weather-widget-menu-overlay>
    `);
  });
});
