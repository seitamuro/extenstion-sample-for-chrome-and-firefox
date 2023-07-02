browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

console.log(`'Allo 'Allo! Event Page`)
console.log("Hello world?")
console.log(`title: ${document.title}`)