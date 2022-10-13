# AutoCapture.js

A simple javascript library to provide an easiest and most comprehensive way to automatically capture the user
interactions on the website, from the moment of installation forward. A single snippet grabs every
click, touch, page-view, and fill — forever.

## Use Cases

- **User Behavior Analysis** - Understand how users interact with your site, and how they use your
  site to achieve their goals.
- **Track User Journeys** - Track the user journeys from the moment they land on your site, to the
  moment they leave.
- **Custom Analytics Tool** - Build your own analytics tools and libraries using AutoCapture.js to
  track user behavior, and use the data to improve your site.
- **Build Your Own Heatmap** - Build your own heatmap to understand how users interact with your
  site.
- **Build Your Own Form Analytics** - Build your own form analytics to understand how users use your
  forms to achieve their goals.
- **Build Your Own Click Analytics** - Build your own click analytics to understand how users
  interact with your site.
- **Build Your Own Scroll Analytics** - Build your own scroll analytics to understand how users
  scroll on your site.


## Installation

### NPM

```bash
npm install autocapture
```

### CDN

```html

<script src='https://unpkg.com/autocapture.js'></script>
```

### Importing library

You can import the library in your project using the following:

```javascript
import AutoCapture from 'autoCapture';
```

However, you can use cdn to import the library's UMD build in a browser and start using it right
away.

### Usage

```javascript
 const instance = new AutoCapture({
  safelist: ['input[type="password"]'],
  persistence: 'memory',
  capture: ['scroll', 'click', 'input', 'change', 'page-view'],
  onEventCapture: (event) => {
    console.log('Event stored', event)

    // Send event to the server
    // ...
  }
})

instance.start()
```

**Simple as that** - AutoCapture.js will automatically capture all the user interactions on your
site, from the moment of installation forward.

### Notable Features

- **Safelist** - Safelist is a list of CSS selectors that you want to ignore. For example, you can
  ignore all the password inputs by adding `input[type="password"]` to the safelist.
- **Persistence** - Persistence is the way you want to store the captured events. You can choose
  between `memory`, `localStorage`, `cookie` and `none`. `memory` is the default value.
  - `memory` - Events are stored in memory and are lost when the page is refreshed.
  - `localStorage` - Events are stored in the browser's local storage and are persisted across
    sessions.
  - `cookie` - Events are stored in the browser's cookie and are persisted across sessions.
  - `none` - Events are not stored anywhere.
- **Capture** - Capture is the list of events you want to capture. You can choose between `scroll`
  , `click`, `input`, `change`, `page-view`, `touch`, `scroll`, `submit`, `mouse-movement` are the default values.
- **onEventCapture** - onEventCapture is a callback function that will be called every time an event
  is captured. You can use this callback to send the captured events to your server.
  - You can use this callback to send the captured events to your server.
  - You can use this callback to presist the captured events in your own way.
  - You can use this callback to send the captured events to your own analytics tool.

## Complete Options List

| Option | Type | Default                                                         | Description                                                                                                                                                              |
| --- | --- |-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| safelist | Array | []                                                              | Safelist is a list of CSS selectors that you want to ignore. For example, you can ignore all the password inputs by adding `input[type="password"]` to the safelist.     |
| persistence | String | 'memory'                                                        | Persistence is the way you want to store the captured events. You can choose between `memory`, `localStorage`, `cookie` and `none`. `memory` is the default value.       |
| capture | Array | ['click', 'change', 'submit']                                   | Capture is the list of events you want to capture. You can choose between `scroll`, `click`, `input`, `change`, `page-view`, `touch`, `submit`, `mouse-movement` are the default values. |
| onEventCapture | Function | (capturedEvent: any) => {}                                      | onEventCapture is a callback function that will be called every time an event is captured. You can use this callback to send the captured events to your server.         |
| elements | Array | ['a', 'button', 'form', 'input', 'select', 'textarea', 'label'] | A list of elements to capture events from.                                                                                                                               |
| attributes | Array | ['text', 'className', 'value', 'type', 'tagName', 'href', 'src', 'id', 'name', 'placeholder', 'title', 'alt', 'role']                                                                | A list of attributes to capture from the elements.                                                                                                                       |

## Available Public Methods

| Method | Description                                 |
| --- |---------------------------------------------|
| start | Start capturing events.                     |
| stop | Stop capturing events.                      |
| clear | Clear all the captured events from storage. |
| getCapturedEvents | Get all the captured events. |
| getPageViews | Get all the captured page views. |

## Roadmap

- [x] Capture clicks
- [x] Capture scrolls
- [x] Capture form submits
- [x] Capture input fills
- [x] Capture page views
- [x] Capture swipes (touch)
- [x] Capture mouse movements
- [ ] Capture mouse drags
- [ ] Capture mouse double clicks
- [ ] Capture mouse right clicks
- [ ] Capture idle/active time


## Credits

Made with :heart: by [@seeratawan01](https://github.com/seeratawan01).

## License
MIT License - see the [LICENSE](LICENSE) file for details.
