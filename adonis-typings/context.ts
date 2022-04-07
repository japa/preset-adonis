/*
 * @japa/preset-adonis
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import '@japa/runner'
import { MakeUrlOptions } from '@ioc:Adonis/Core/Route'

declare module '@japa/runner' {
  interface TestContext {
    route(
      routeIdentifier: string,
      params?: Record<string, any> | any[],
      options?: MakeUrlOptions
    ): string
  }
}
