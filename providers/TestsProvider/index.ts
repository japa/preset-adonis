/*
 * @japa/preset-adonis
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

/**
 * AdonisJS provider for registering japa class to the container
 */
export default class TestsProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.bind('Japa/Preset/Assert', () => {
      const { Assert } = require('@japa/assert')
      return Assert
    })

    this.app.container.bind('Japa/Preset/ApiRequest', () => {
      const { ApiRequest } = require('@japa/api-client')
      return ApiRequest
    })

    this.app.container.bind('Japa/Preset/ApiResponse', () => {
      const { ApiResponse } = require('@japa/api-client')
      return ApiResponse
    })
  }
}
