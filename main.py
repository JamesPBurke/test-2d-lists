def on_forever():
    pass
basic.forever(on_forever)

i = 0
grid = [[3,2,1],[8,7,6]]
for j in range(len(grid)):
    for i in range(len(grid[0])):
        basic.show_number(grid[j][i])