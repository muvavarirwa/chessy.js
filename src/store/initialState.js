import image_names from './image_names';
import initialState from './initState';

//Set initialState.board to same as starting position of each piece
Object.keys(initialState.pieces).forEach((piece, idx) =>
    // Here we count backwards for pieces on the other side of board...
    idx < 16 ?
    (initialState.board[idx] = piece) :
    (initialState.board[32 + idx] = piece)
);

//Lets make sure the pieces can only move within the board
//Still need to make sure they can only move within bounds of board columns...

const pieces = Object.keys(initialState.pieces);

pieces.forEach((piece) => {
    const curr_piece = initialState.pieces[piece];
    curr_piece.moves.forEach((move) => {
        let next_pos = move + curr_piece.curr_pos;
        if (
            next_pos >= 0 &&
            next_pos <= 63 &&
            initialState.board[next_pos] === undefined
        ) {
            curr_piece.feasible_moves.push(next_pos);
        }
    });
    curr_piece.feasible_moves = [...new Set(curr_piece.feasible_moves)];
});

//initialize initialState with imageUrl
pieces.forEach((piece) => {
    const curr_piece = initialState.pieces[piece];
    curr_piece['image_url'] = image_names[curr_piece['start_pos']];
});

export default initialState;