import { Toast } from 'quasar'

export class Popup {
  constructor (message, type) {
    this.options = {
      html: 'Message to display',
      icon: 'alarm_add',
      timeout: 1500,
      color: '#f8c1c1',
      bgColor: 'white',
      button: {
        label: 'Bezár',
        handler () {
        },
        color: '#000'
      }
    }
    this.options.html = message
    this.type = type
    this.createPopup()
  }

  createPopup () {
    return Toast.create(this.options)
  }
}
