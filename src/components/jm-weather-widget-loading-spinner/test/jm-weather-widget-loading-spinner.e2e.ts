import { newE2EPage } from '@stencil/core/testing';

describe('jm-weather-widget-loading-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jm-weather-widget-loading-spinner></jm-weather-widget-loading-spinner>');

    const element = await page.find('jm-weather-widget-loading-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
