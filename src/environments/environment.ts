// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  enableHttpMocks: false,
  comingSoon: false,
  endpoints: {
    albums: "https://jsonplaceholder.typicode.com/albums",
    todos: "https://jsonplaceholder.typicode.com/todos",
    postId: "https://jsonplaceholder.typicode.com/comments?postId=1",
  },
  urls: {},
  sessionConfig: {
    length: 65,
    warningAt: 45,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

//note: endpoints would be like below, thats the reson proxy config has /api/*
//forms: 'api/forms'
//claimDetails: 'api/claim/:claimNumber
