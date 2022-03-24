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
  import type { Test, TestContext } from '@japa/runner'
  import type { ApiRequest, ApiResponse, ApiClient } from '@japa/api-client'

  export interface ContainerBindings {
    'Japa/Preset/Test': typeof Test
    'Japa/Preset/TestContext': typeof TestContext
    'Japa/Preset/Assert': typeof Assert
    'Japa/Preset/ApiRequest': typeof ApiRequest
    'Japa/Preset/ApiClient': typeof ApiClient
    'Japa/Preset/ApiResponse': typeof ApiResponse
  }
}
