import { Toast } from 'quasar'

export const info = (message) => {
  let defaults = {
    html: 'Message to display',
    icon: 'alarm_add',
    timeout: 2500,
    color: '#f8c1c1',
    bgColor: 'white',
    button: {
      label: 'Bezár',
      handler () {
        // Specify what to do when button is clicked/tapped
      },
      color: '#000'
    }
  }

  console.log(this.options)
  if (message) {
    defaults.message = message
  }

  return Toast.create(defaults)
}
