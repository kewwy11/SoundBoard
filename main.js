const sounds = ['applause', 'tada', 'boo', 'gasp', 'wrong', 'victory']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopPlay()
        document.getElementById(sound).play()
    })

    document.getElementById('btns').appendChild(btn)
})

function stopPlay(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}