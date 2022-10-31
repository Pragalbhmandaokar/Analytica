import { BaseOptions } from './base'

export type BindResult = {
  name: string
  target: EventTarget
  type: string
  handler: (event: any) => Record<string, any>
  options?: boolean | AddEventListenerOptions
  throttling?: number,
  condition?: (event: any) => boolean
}

export interface Plugin {
  /**
   * The name of the plugin.
   */
  key: string

  /**
   * Method to bind the event listener to the elements using the DOMEvent class.
   * @param options The options passed to the core.
   * @return Array of object target, type, handler, options and name
   * @public
   */
  bind: (options: BaseOptions) => BindResult[]

  /**
   * The callback method, called when the plugin is initialized.
   * @param options The options passed to the core.
   */
  onInit?: (options: BaseOptions) => void

  /**
   *  The callback method, called when the plugin is started.
   */
  onStart?: () => void

  /**
   * The callback method, called when the plugin is stopped.
   */
  onStop?: () => void


  /**
   * The callback method, called before the event is captured.
   * @param event The event to be captured.
   * @returns true if the event should be captured, false otherwise.
   */
  onBeforeCapture?: (event: Event) => boolean

  /**
   * The callback method, called when the event is captured.
   * @param eventData The data of the captured event.
   */
  onEventCapture?: (eventData: Record<string, any>) => void


  /**
   * Get the options of the plugin.
   */
  getOptions?: () => Record<string, any>

}