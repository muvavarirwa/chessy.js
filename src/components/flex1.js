const topPage = document.createElement('div');
topPage.classList.add('topPage');

const middlePage = document.createElement('div');
middlePage.classList.add('middlePage');

const bottomPage = document.createElement('div');
bottomPage.classList.add('bottomPage');

const topNav = document.createElement('div');
topNav.classList.add('topNav');
topNav.innerHTML = 'Chessy';

const leftNav = document.createElement('div');
leftNav.classList.add('leftNav');

const rightNav = document.createElement('div');
rightNav.classList.add('rightNav');

const bottomNav = document.createElement('div');
bottomNav.classList.add('bottomNav');

this.document.body.appendChild(topPage);
topPage.appendChild(topNav);

this.document.body.appendChild(middlePage);

/*middlePage.appendChild(leftNav);*/

const board = document.createElement('div');
board.setAttribute('id', 'board');
board.classList.add('board');
board.classList.add('middlePage');
board.style.display = 'flex';
board.style.flexDirection = 'row';
board.style.flexWrap = 'wrap-reverse';
board.style.alignContent = 'center';
board.style.backgroundColor = 'ghostwhite';
board.style.border = 'black';

middlePage.appendChild(board);

middlePage.appendChild(rightNav);

this.document.body.appendChild(bottomPage);
bottomPage.appendChild(bottomNav);

function createSquare(aClass, elementColor, i) {
    const element = document.createElement('div');
    element.style.height = '60px';
    element.style.width = '60px';
    element.style.backgroundColor = elementColor;
    element.classList.add(aClass);
    element.setAttribute('id', `square_${i}`);

    return element;
}

function createRow(aClass, i) {
    const row = document.createElement('div');
    row.style.backgroundColor = 'ghostwhite';
    row.classList.add(aClass);
    row.setAttribute('id', `row_${i}`);
    return row;
}

let row = undefined;

const squareProps = {
    elementColor: ['gray', 'ghostwhite'],
    elementClass: ['square-black', 'square-white'],
};

for (let i = 0; i < 64; i++) {
    let row_num = Math.floor(i / 8);
    let newRow = false;

    if (i % 8 === 0) {
        newRow = true;
        row = createRow('row', row_num);
    }

    let propSelector = undefined;

    if ((i + row_num) % 2 === 0) {
        propSelector = 0;
    } else {
        propSelector = 1;
    }

    let element = createSquare(
        squareProps.elementClass[propSelector],
        squareProps.elementColor[propSelector],
        i
    );
    row.appendChild(element);

    if (newRow) {
        board.appendChild(row);
    }
}

const image_names = {
    0: '\u2656',
    1: '\u2658',
    2: '\u2657',
    3: '\u2654',
    4: '\u2655',
    5: '\u2657',
    6: '\u2658',
    7: '\u2656',
    8: '\u2659',
    9: '\u2659',
    10: '\u2659',
    11: '\u2659',
    12: '\u2659',
    13: '\u2659',
    14: '\u2659',
    15: '\u2659',
    48: '\u265F',
    49: '\u265F',
    50: '\u265F',
    51: '\u265F',
    52: '\u265F',
    53: '\u265F',
    54: '\u265F',
    55: '\u265F',
    56: '\u265C',
    57: '\u265E',
    58: '\u265D',
    59: '\u265A',
    60: '\u265B',
    61: '\u265D',
    62: '\u265E',
    63: '\u265C',
};

moves = {
    pawn: [
        [7, 8, 9],
        [-7, -8, -9],
    ],
    knight: [
        [6, 10, 15, 17],
        [-6, -10, -17, -15],
    ],
    king: [
        [7, 8, 9],
        [-7, -8, -9],
    ],
    queen: [
        [7, 8, 9],
        [-7, -8, -9],
    ],
    bishop: [
        [7, 9],
        [-7, -9],
    ],
    rook: [
        [8],
        [-8]
    ],
};

numeric_names_ = {
    w_R0: 0,
    w_K0: 1,
    w_B0: 2,
    w__K: 3,
    w__Q: 4,
    w_B1: 5,
    w_K1: 6,
    w_R1: 7,
    w_P0: 8,
    w_P1: 9,
    w_P2: 10,
    w_P3: 11,
    w_P4: 12,
    w_P5: 13,
    w_P6: 14,
    w_P7: 15,
    b_P0: 48,
    b_P1: 49,
    b_P2: 50,
    b_P3: 51,
    b_P4: 52,
    b_P5: 53,
    b_P6: 54,
    b_P7: 55,
    b_R0: 56,
    b_K0: 57,
    b_B0: 58,
    b__K: 59,
    b__Q: 60,
    b_B1: 61,
    b_K1: 62,
    b_R1: 63,
};

const numeric_names = Object.keys(numeric_names_).reduce(
    (r, key) =>
    Object.assign(r, {
        [numeric_names_[key]]: key,
    }), {}
);

startPos = {
    pawn: [
        [8, 9, 10, 11, 12, 13, 14, 15],
        [48, 49, 50, 51, 52, 53, 54, 55],
    ],
    rook: [
        [0, 7],
        [56, 63],
    ],
    knight: [
        [1, 6],
        [57, 62],
    ],
    bishop: [
        [2, 5],
        [58, 61],
    ],
    king: [
        [3],
        [60]
    ],
    queen: [
        [4],
        [59]
    ],
};

function createPiece(aClass, image) {
    if (image) {
        const element = this.document.createElement('div');
        element.style.height = '40px';
        element.style.width = '40px';
        element.setAttribute('id', aClass);
        element.classList.add('piece');
        element.innerHTML = image;
        return element;
    }
}

Object.keys(image_names).forEach((key) => {
    let image = image_names[key];
    let squareID = `square_${key}`;
    let piece_id = `${numeric_names[key]}`;
    let thisSquare = this.document.getElementById(squareID);
    let thisPiece = createPiece(piece_id, image);
    thisSquare.appendChild(thisPiece);
});

const players = Object.keys(startPos);

players.forEach((player) => {
    let allPlayers = startPos[player][0].concat(startPos[player][1]);
    allPlayers.forEach((aPlayer) =>
        document
        .getElementById(`square_${aPlayer}`)
        .firstChild.setAttribute('type', player)
    );
});

function highLightPiece(e) {
    let currColor = e.target.style.backgroundColor;

    if (currColor === 'black') {
        e.target.style.backgroundColor = 'ghostwhite';
    } else {
        e.target.style.backgroundColor = 'black';
    }
}

function getMoves(piece_info_arr) {
    const [piece, side, position] = piece_info_arr;
    return moves[piece][side]
        .map((move) => {
            return move + position;
        })
        .filter((mov) => mov >= 0 && mov <= 63)
        .filter(
            (mov) =>
            document.getElementById(`square_${mov}`).children.length === 0 ||
            document.getElementById(`square_${mov}`).firstChild.id.split('_')[0] !=
            document
            .getElementById(`square_${position}`)
            .firstChild.id.split('_')[0]
        );
}

function getPieceInfo(_piece) {
    let position;
    try {
        position = Number(_piece.parentNode.id.split('_')[1]);
    } catch {
        console.log(_piece);
        console.log('=======');
    }
    let piece = _piece.getAttribute('type');
    let side_str = _piece.id.split('_')[0];
    let side = side_str === 'b' ? 1 : 0;
    if (side_str === 'b') {
        side = 1;
    }
    let out_arr = [];
    out_arr.push(piece);
    out_arr.push(side), out_arr.push(position);
    return out_arr;
}

const allPieces = Array.from(document.getElementsByClassName('piece'));

const feasibleMovesArr = [
    [],
    []
];

function updateFeasibleMoves() {
    allPieces.forEach((piece) => {
        let pieceInfo = getPieceInfo(piece);
        let availableMoves = getMoves(pieceInfo);
        availableMoves.forEach((move) => {
            let obj = {};
            let side_str = piece.id.split('_')[0];
            let side = side_str === 'b' ? 1 : 0;
            obj[piece.id] = move;
            feasibleMovesArr[side].push(obj);
        });
    });
}

function getRandomMove(feasibleMovesArr, side) {
    return feasibleMovesArr[side][
        Math.floor(Math.random() * feasibleMovesArr[side].length)
    ];
}

updateFeasibleMoves();

let i = 0;

function singleMove() {
    if (feasibleMovesArr[0].length > 0 && feasibleMovesArr[1].length > 0) {
        for (let side = 0; side < 2; side++) {
            updateFeasibleMoves();
            let move = getRandomMove(feasibleMovesArr, side);
            let movingPieceName = Array.from(Object.keys(move))[0];
            let targetSquare = document.getElementById(
                `square_${move[movingPieceName]}`
            );
            console.log(move);
            console.log(movingPieceName);
            let sourceSquare = document.getElementById(movingPieceName).parentNode;
            let movingPiece = document.getElementById(movingPieceName);
            sourceSquare.removeChild(movingPiece);
            if (targetSquare.children.length > 0) {
                targetSquare.removeChild(targetSquare.firstChild);
            }
            targetSquare.appendChild(movingPiece);
        }
    }
}

/* let piece = this.document.getElementsByTagName('piece');

        function clickedPiece() {
            let target = event.target;
            if (target.className != 'piece') {
                return;
            } else {
                let position = Number(target.parentNode.id.split('_')[1]);
                let piece = target.getAttribute('type');
                let side_str = target.id.split('_')[0];
                let side = side_str === 'b' ? 0 : 1;
                if (side_str === 'b') {
                    side = 1;
                }

                alert(`Feasible moves are: ${getMoves(piece, side, position)}`);
            }
        }
         */
board.addEventListener('click', singleMove);