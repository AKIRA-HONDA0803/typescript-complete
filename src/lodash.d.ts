// declare module 'lodash' {
//   export function shuffle<T>(arr: T[]): T[]
// }
// declare namesapce _ {
//   function shuffle<T>(arr: T[]): T[]
// }

import _ from 'lodash';
declare module 'lodash' {
  interface LoDashStatic {
    hello: string;
  }
}