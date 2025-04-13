basic.forever(function on_forever() {
    
})
let i = 0
let grid = [[3, 2, 1], [8, 7, 6]]
for (let j = 0; j < grid.length; j++) {
    for (i = 0; i < grid[0].length; i++) {
        basic.showNumber(grid[j][i])
    }
}
