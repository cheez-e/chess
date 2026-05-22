const ROWS = 8
const COLS = 8

const board = document.getElementById("board")

for (r = 0; r < ROWS; r++){
    for (c = 0; c < COLS; c++){
        const newDiv = document.createElement("div");
        newDiv.className = (r + c) % 2 == 0 ? "light-square" : "dark-square"

        // black pieces
        if (r == 0){
            if (c == 0 || c == 7){
                const newImg = document.createElement("img");
                newImg.src = "pieces/b_rook.png"
                newDiv.appendChild(newImg)
            }

            if (c == 1 || c == 6){
                const newImg = document.createElement("img");
                newImg.src = "pieces/b_knight.png"
                newDiv.appendChild(newImg)
            }

            if (c == 2 || c == 5){
                const newImg = document.createElement("img");
                newImg.src = "pieces/b_bishop.png"
                newDiv.appendChild(newImg)
            }

            if (c == 3){
                const newImg = document.createElement("img");
                newImg.src = "pieces/b_queen.png"
                newDiv.appendChild(newImg)
            }

            if (c == 4){
                const newImg = document.createElement("img");
                newImg.src = "pieces/b_king.png"
                newDiv.appendChild(newImg)
            }
        }

        // black pawns
        if (r == 1){
            const newImg = document.createElement("img");
            newImg.src = "pieces/b_pawn.png"
            newDiv.appendChild(newImg)
        }

        // white pawns
        if (r == 6){
            const newImg = document.createElement("img");
            newImg.src = "pieces/w_pawn.png"
            newDiv.appendChild(newImg)
        }

        // white pieces
        if (r == 7){
            if (c == 0 || c == 7){
                const newImg = document.createElement("img");
                newImg.src = "pieces/w_rook.png"
                newDiv.appendChild(newImg)
            }

            if (c == 1 || c == 6){
                const newImg = document.createElement("img");
                newImg.src = "pieces/w_knight.png"
                newDiv.appendChild(newImg)
            }

            if (c == 2 || c == 5){
                const newImg = document.createElement("img");
                newImg.src = "pieces/w_bishop.png"
                newDiv.appendChild(newImg)
            }

            if (c == 3){
                const newImg = document.createElement("img");
                newImg.src = "pieces/w_queen.png"
                newDiv.appendChild(newImg)
            }

            if (c == 4){
                const newImg = document.createElement("img");
                newImg.src = "pieces/w_king.png"
                newDiv.appendChild(newImg)
            }
        }
        
        board.appendChild(newDiv)
    }
}