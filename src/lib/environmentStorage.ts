/**
 * Environment storage utilities for sentra-landing
 * Manages environment selection in localStorage
 */

const ENVIRONMENT_KEY = 'senaerp-current-environment';

/**
 * Get current environment from localStorage
 */
export function getEnvironment(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(ENVIRONMENT_KEY);
}

/**
 * Set current environment in localStorage
 */
export function setEnvironment(environmentName: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ENVIRONMENT_KEY, environmentName);
}

/**
 * Clear current environment from localStorage
 */
export function clearEnvironment(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ENVIRONMENT_KEY);
}

/**
 * Check if an environment is currently selected
 */
export function hasEnvironment(): boolean {
  return !!getEnvironment();
}
