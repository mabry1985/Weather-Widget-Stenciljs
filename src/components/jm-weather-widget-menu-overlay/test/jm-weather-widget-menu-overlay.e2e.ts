import { newE2EPage } from '@stencil/core/testing';

describe('jm-weather-widget-menu-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jm-weather-widget-menu-overlay></jm-weather-widget-menu-overlay>');

    const element = await page.find('jm-weather-widget-menu-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
