class Board {
    constructor(_parent, _row, _col) {
        this.parent = _parent;
        this.row = _row;
        this.col = _col;
    };
    render() {


        for (let i = 1; i <= this.row; i++) {
            for (let j = 1; j <= this.col; j++) {
                let pawnDark = document.createElement("img");
                pawnDark.src = "../files/pawn-dark.png";
                pawnDark.alt = "pawn dark";
                pawnDark.classList = "pawn pawn-dark"

                let pawnRed = document.createElement("img");
                pawnRed.src = "../files/pawn-red.png";
                pawnRed.alt = "pawn light";
                pawnRed.classList = "pawn pawn-light"
                let cel = document.createElement("div");

                cel.classList = "cell";
                if ((i + j) % 2 == 0) {
                    cel.classList = "cell cell-dark center";
                    if (i <= 3) cel.appendChild(pawnRed)
                    if (i >= 6 && i <= 8) cel.appendChild(pawnDark)
                    cel.addEventListener("click", () => {
                        console.log("entered -  i :"+i+","+" j: "+j );
                        
                    })
                }
                else {
                    cel.classList = "cell cell-light center";
                }
                // cel.innerHTML += "i: "+i+ "<br>j: "+j
                document.querySelector(this.parent).appendChild(cel);
            }

        }
    };
}