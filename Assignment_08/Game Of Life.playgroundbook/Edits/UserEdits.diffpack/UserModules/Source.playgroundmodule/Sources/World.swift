public class World {
    public var cells = [[Cell]]()
    public let size: Int
    
    public init(size: Int) {
        self.size = size
        
        //init World
        self.cells = Array(repeating: Array(repeating: Cell(x: 0, y: 0, state:0),count: 10), count: 10)
        for x in 0..<size {
            for y in 0..<size {
                let randomState = Int.random(in:0..<2)
                let cell = Cell(x: x, y: y, state: randomState)
                cells[x][y] = cell
            }
        }
    }
    
    public func printWorld() {
        print("")
        for elem in self.cells {
            for cell in elem {
                print("",cell.state, terminator: " ")
            }
            print("\n")
        }
    }
    
    public func makeStep(cell: Cell) {
        var aliveNeighbours = checkAliveNeighbours(cell: cell)
        if aliveNeighbours == 3 && cell.state == 0 {
            cells[cell.x][cell.y].state = 1 
        } else if (aliveNeighbours == 2 || aliveNeighbours == 3) && cell.state == 1{
            cells[cell.x][cell.y].state = 1 
        } else {
            cells[cell.x][cell.y].state = 0
        }
    }
    
    private func getNeighbours(cell: Cell) -> [Cell]{
        var neighbours = [Cell]()
        for x in max(0, cell.x - 1) ... min(cell.x + 1, self.size - 1) {
            for y in max(0, cell.y - 1) ... min(cell.y + 1, self.size - 1) {
                if x != cell.x || y != cell.y {
                    neighbours.append(cells[x][y])
                }
            }
        }
        return neighbours
    }
    
    public func checkAliveNeighbours(cell: Cell) -> Int {
        var neighbours = getNeighbours(cell: cell)
        var aliveCounter = 0
        for neighbour in neighbours {
            if neighbour.state == 1 {
                aliveCounter+=1
            }
        }
        return aliveCounter
    }
}

