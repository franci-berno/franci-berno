// import { getPage } from '$lib/api';

export async function load({ locals }) {
  let currentUser: any;

  // @ts-ignore
  if (!!locals) currentUser = locals.user;
  const page = null;
  return {
    currentUser,
    page
  };
}
