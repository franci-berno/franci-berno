export async function handle({ event, resolve }) {
  // @ts-ignore
  event.locals.user = { name: 'Admin' }
  const response = await resolve(event);
  return response;
}
