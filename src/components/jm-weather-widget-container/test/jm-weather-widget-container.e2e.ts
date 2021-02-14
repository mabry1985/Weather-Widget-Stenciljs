import { newE2EPage } from '@stencil/core/testing';

describe('jm-weather-widget-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jm-weather-widget-container></jm-weather-widget-container>');

    const element = await page.find('jm-weather-widget-container');
    expect(element).toHaveClass('hydrated');
  });
});
