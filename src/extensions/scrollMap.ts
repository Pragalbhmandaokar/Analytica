/**
 * Scroll maps show you the exact percentage of people who scroll down to any point on the page: the redder the area, the more visitors saw it.
 */
import { getEventData, storeEvent, RootCapture } from '../core'
import { AutoCaptureProps, Persistence } from '../types'


export default class ScrollMap extends RootCapture{

  private scrollPercentage: number
  private captureScrollEventHandler: OmitThisParameter<(event: Event) => void>

  /**
   * Scroll map constructor function.
   */
  constructor({
                persistence,
                onEventCapture
              }: AutoCaptureProps) {
    super({
      persistence,
      onEventCapture
    })
    this.scrollPercentage = 0.0

    // saving the scroll event handler to be able to remove it later
    this.captureScrollEventHandler = this.captureEvent.bind(this)
  }


  /**
   * A function to start capturing the scroll events on your site.
   */
  public start(): void {
    console.log('start capturing scroll events')
    this.bindScrollEvent()
  }

  /**
   * A function to stop capturing the scroll events on your site.
   */
  public stop(): void {
    window.removeEventListener('scroll', this.captureScrollEventHandler)
  }

  /**
   * Bind scroll event to the window.
   */
  private bindScrollEvent(): void {
    window.addEventListener('scroll', this.captureScrollEventHandler)
  }

  /**
   * A function to capture the scroll events on your site.
   */
  protected captureEvent(event: Event): void {
    const scrollPercentage = this.getScrollPercentage()
    if (scrollPercentage > this.scrollPercentage) {
      this.scrollPercentage = scrollPercentage
      this.sendScrollPercentage(event)
    }
  }

  /**
   * A function to get the scroll percentage.
   */
  private getScrollPercentage(): number {
    const scrollPosition = window.scrollY
    const windowSize = window.innerHeight
    const bodyHeight = document.body.offsetHeight

    return Math.round((scrollPosition / (bodyHeight - windowSize)) * 100)
  }

  /**
   * A function to send the scroll percentage to the server.
   */
  private sendScrollPercentage(event: Event): void {

    const data = {
      ...getEventData(event, []),
      scroll: {
        scrollPercentage: this.scrollPercentage,
        scrollPosition: window.scrollY,
        windowSize: window.innerHeight,
        bodyHeight: document.body.offsetHeight
      }
    }


    storeEvent(data, this.onEventCapture)
  }
}
