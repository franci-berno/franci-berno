/**
 * In this minimal setup there is only one user, the website admin.
 * If you want to support multiple users/authors you want to return the current user record here.
 */
export async function getCurrentUser() {
  return { name: 'Admin' };
}

/**
 * E.g. getPage("home") gets all dynamic data for the home page
 */
export async function getPage() {
    return null;
}