document.addEventListener('keydown', keyToBeat)
document.addEventListener('keyup', keyToBeat)

keyToBeatMap = new Map();
keyToBeatMap.set('A', 'CLAP')
keyToBeatMap.set('S', 'HIHAT')
keyToBeatMap.set('D', 'KICK')
keyToBeatMap.set('F', 'OPENHAT')
keyToBeatMap.set('G', 'BOOM')
keyToBeatMap.set('H', 'RIDE')
keyToBeatMap.set('J', 'SNARE')
keyToBeatMap.set('K', 'TOM')
keyToBeatMap.set('L', 'TINK')

function keyToBeat(event) {
    let letter = event.code.slice(-1).toUpperCase()
    if (keyToBeatMap.has(letter)) {
        containerClasses = document.getElementById(letter).classList
        let sound = keyToBeatMap.get(letter)
        if (event.type === "keydown") {
            containerClasses.add('onbeat')
            beat = new Audio(`sounds/${sound}.wav`)
            beat.play()
        } else if (event.type === "keyup") {
            containerClasses.remove('onbeat')
        }
    }
}
