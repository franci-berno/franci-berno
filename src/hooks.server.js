export async function handle({ event, resolve }) {
  event.locals.user = { name: 'Admin' }
  const response = await resolve(event);
  return response;
}
