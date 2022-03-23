/*
 * @japa/preset-adonis
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Adonis/Core/Application' {
  import type { Assert } from '@japa/assert'
  import type { ApiRequest, ApiResponse } from '@japa/api-client'

  export interface ContainerBindings {
    'Japa/Preset/Assert': Assert
    'Japa/Preset/ApiRequest': ApiRequest
    'Japa/Preset/ApiResponse': ApiResponse
  }
}
