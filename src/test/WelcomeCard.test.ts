import { describe, it, expect } from 'vitest';
import { fixture, html, expect as wcExpect } from '@open-wc/testing';
import '../components/WelcomeCard.ts';

describe('WelcomeCard Component', () => {
  it('should render with default props', async () => {
    const el = await fixture(html`<welcome-card></welcome-card>`);
    
    expect(el).toBeDefined();
    expect(el.shadowRoot).toBeDefined();
    
    const title = el.shadowRoot!.querySelector('.title');
    expect(title?.textContent).toBe('Welcome to Your Portfolio');
    
    const description = el.shadowRoot!.querySelector('.description');
    expect(description?.textContent).toBe('This is a modern portfolio built with Astro.js and Lit components');
  });

  it('should render with custom props', async () => {
    const el = await fixture(html`
      <welcome-card 
        title="Custom Title" 
        description="Custom description">
      </welcome-card>
    `);
    
    const title = el.shadowRoot!.querySelector('.title');
    expect(title?.textContent).toBe('Custom Title');
    
    const description = el.shadowRoot!.querySelector('.description');
    expect(description?.textContent).toBe('Custom description');
  });

  it('should have proper accessibility attributes', async () => {
    const el = await fixture(html`<welcome-card></welcome-card>`);
    
    const card = el.shadowRoot!.querySelector('.card');
    expect(card?.getAttribute('role')).toBe('article');
    expect(card?.getAttribute('aria-labelledby')).toBe('card-title');
    
    const title = el.shadowRoot!.querySelector('#card-title');
    expect(title).toBeDefined();
  });

  it('should pass basic axe accessibility tests', async () => {
    const el = await fixture(html`<welcome-card></welcome-card>`);
    await wcExpect(el).to.be.accessible();
  });
});