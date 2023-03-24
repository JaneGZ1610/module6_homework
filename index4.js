function usersInt(x,y) {
    let i = setInterval(() => {
        console.log(x++);
        if (x > y) clearInterval(i);
    }, 1000)
}
usersInt(3, 14)


