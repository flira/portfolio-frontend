import '@open-wc/testing';
import 'axe-core/axe.min.js';

// Make axe available globally for accessibility tests
declare global {
  interface Window {
    axe: any;
  }
}