import { describe, it, expect } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';

// Extend expect with axe matchers
expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('should pass axe accessibility tests on a basic HTML structure', async () => {
    // Create a test DOM structure
    document.body.innerHTML = `
      <main>
        <h1>Test Page</h1>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        <section>
          <h2>Content Section</h2>
          <p>This is test content for accessibility testing.</p>
          <button type="button">Interactive Button</button>
        </section>
      </main>
    `;

    // Run axe accessibility tests
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('should detect accessibility violations', async () => {
    // Create problematic HTML for testing
    document.body.innerHTML = `
      <div>
        <img src="test.jpg">
        <button>Click me</button>
        <input type="text">
      </div>
    `;

    const results = await axe(document.body);
    // This should have violations (missing alt text, missing labels, etc.)
    expect(results.violations.length).toBeGreaterThan(0);
  });

  it('should pass when accessibility issues are fixed', async () => {
    // Create properly accessible HTML with landmark elements
    document.body.innerHTML = `
      <main>
        <div>
          <img src="test.jpg" alt="Test image description">
          <button type="button" aria-label="Click this button">Click me</button>
          <label for="test-input">Test Input:</label>
          <input type="text" id="test-input" name="testInput">
        </div>
      </main>
    `;

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});