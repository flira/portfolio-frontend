import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('welcome-card')
export class WelcomeCard extends LitElement {
  @property({ type: String })
  title = 'Welcome to Your Portfolio';

  @property({ type: String })
  description = 'This is a modern portfolio built with Astro.js and Lit components';

  // Note: CSS Modules work best with Astro components, 
  // but we'll use Lit's css for component styling
  static styles = css`
    :host {
      display: block;
      margin: 2rem 0;
    }

    .card {
      background: var(--background-color, #ffffff);
      border-radius: 0.5rem;
      padding: 2rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--gray-200, #e5e7eb);
      transition: transform var(--transition-fast, 150ms ease-in-out), box-shadow var(--transition-fast, 150ms ease-in-out);
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-color, #1f2937);
      margin: 0 0 1rem 0;
    }

    .description {
      color: var(--gray-500, #6b7280);
      line-height: 1.6;
      margin: 0;
    }

    @media (min-width: 768px) {
      .card {
        padding: 2.5rem;
      }
      .title {
        font-size: 1.875rem;
      }
    }
  `;

  render() {
    return html`
      <div class="card" role="article" aria-labelledby="card-title">
        <h2 id="card-title" class="title">${this.title}</h2>
        <p class="description">${this.description}</p>
      </div>
    `;
  }
}