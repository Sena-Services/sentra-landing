/**
 * Authentication utilities for sentra-landing
 * Handles checking authentication state and user management
 */

export interface User {
  email: string;
  first_name: string;
  last_name: string;
  full_name: string;
  user_image?: string;
}

export interface AuthResponse {
  authenticated: boolean;
  user?: User;
}

/**
 * Check if the user is currently authenticated
 * Calls the Frappe backend to verify session
 */
export async function checkAuth(): Promise<AuthResponse> {
  try {
    const frappeUrl = process.env.NEXT_PUBLIC_FRAPPE_URL || 'http://localhost:8000';
    console.log('[Auth] Checking authentication at:', frappeUrl);

    const response = await fetch(
      `${frappeUrl}/api/method/crm.api.user_auth.get_current_user`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('[Auth] Response status:', response.status);

    if (!response.ok) {
      console.log('[Auth] Response not OK, user not authenticated');
      return { authenticated: false };
    }

    const data = await response.json();
    console.log('[Auth] Response data:', data);
    console.log('[Auth] data.message:', data.message);

    // Format 1: data.message.success with data.message.user (Frappe format)
    if (data.message?.success && data.message?.user) {
      console.log('[Auth] User authenticated (format 1 - Frappe):', data.message.user);
      return {
        authenticated: true,
        user: data.message.user,
      };
    }

    // Format 2: data.message.authenticated with data.message.user
    if (data.message?.authenticated && data.message?.user) {
      console.log('[Auth] User authenticated (format 2):', data.message.user.email);
      return {
        authenticated: true,
        user: data.message.user,
      };
    }

    // Format 3: data.message is the user object itself
    if (data.message && typeof data.message === 'object' && data.message.email) {
      console.log('[Auth] User authenticated (format 3):', data.message.email);
      return {
        authenticated: true,
        user: {
          email: data.message.email || data.message.user || '',
          first_name: data.message.first_name || '',
          last_name: data.message.last_name || '',
          full_name: data.message.full_name || data.message.name || '',
          user_image: data.message.user_image,
        },
      };
    }

    // Format 4: top-level authenticated field
    if (data.authenticated && data.user) {
      console.log('[Auth] User authenticated (format 4):', data.user.email);
      return {
        authenticated: true,
        user: data.user,
      };
    }

    console.log('[Auth] User not authenticated (no user in response)');
    return { authenticated: false };
  } catch (error) {
    console.error('[Auth] Auth check failed with error:', error);
    return { authenticated: false };
  }
}

/**
 * Logout the current user
 */
export async function logout(): Promise<boolean> {
  try {
    const frappeUrl = process.env.NEXT_PUBLIC_FRAPPE_URL || 'http://localhost:8000';
    const response = await fetch(
      `${frappeUrl}/api/method/crm.api.user_auth.logout`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.ok;
  } catch (error) {
    console.error('Logout failed:', error);
    return false;
  }
}

/**
 * Get user initials from name
 */
export function getUserInitials(user: User): string {
  const firstName = user.first_name || '';
  const lastName = user.last_name || '';

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  if (firstName) {
    return firstName.substring(0, 2).toUpperCase();
  }

  if (user.email) {
    return user.email.substring(0, 2).toUpperCase();
  }

  return 'U';
}
