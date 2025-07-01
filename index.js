let count = 0
const interval = setInterval(() => {
    count++
    console.log(count)

    if (count === 5) {
        clearInterval(interval)
         alert('hello')
    }
}, 5000) 

