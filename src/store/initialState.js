const initialState = {
    board: {},
    pieces: {
        w_R0: {
            start_pos: 0,
            curr_pos: 0,
            feasible_moves: [],
            moves: [8, 16, 24, 32],
        },
        w_K0: {
            start_pos: 1,
            curr_pos: 1,
            feasible_moves: [],
            moves: [6, 10, 15, 17],
        },
        w_B0: {
            start_pos: 2,
            curr_pos: 2,
            feasible_moves: [],
            moves: [-63, -61, -62, -60, -61, -59, -60, -58, -59, -57, -58, -56, -57, -55, -56, -54, -55, -53, -54, -52, -53, -51, -52, -50, -51, -49, -50, -48, -49, -47, -48, -46, -47, -45, -46, -44, -45, -43, -44, -42, -43, -41, -42, -40, -41, -39, -40, -38, -39, -37, -38, -36, -37, -35, -36, -34, -35, -33, -34, -32, -33, -31, -32, -30, -31, -29, -30, -28, -29, -27, -28, -26, -27, -25, -26, -24, -25, -23, -24, -22, -23, -21, -22, -20, -21, -19, -20, -18, -19, -17, -18, -16, -17, -15, -16, -14, -15, -13, -14, -12, -13, -11, -12, -10, -11, -9, -10, -8, -9, -7, -8, -6, -7, -5, -6, -4, -5, -3, -4, -2, -3, -1, -2,
                0, -1,
                1,
                0,
                2,
                1,
                3,
                2,
                4,
                3,
                5,
                4,
                6,
                5,
                7,
                6,
                8,
                7,
                9,
                8,
                10,
                9,
                11,
                10,
                12,
                11,
                13,
                12,
                14,
                13,
                15,
                14,
                16,
                15,
                17,
                16,
                18,
                17,
                19,
                18,
                20,
                19,
                21,
                20,
                22,
                21,
                23,
                22,
                24,
                23,
                25,
                24,
                26,
                25,
                27,
                26,
                28,
                27,
                29,
                28,
                30,
                29,
                31,
                30,
                32,
                31,
                33,
                32,
                34,
                33,
                35,
                34,
                36,
                35,
                37,
                36,
                38,
                37,
                39,
                38,
                40,
                39,
                41,
                40,
                42,
                41,
                43,
                42,
                44,
                43,
                45,
                44,
                46,
                45,
                47,
                46,
                48,
                47,
                49,
                48,
                50,
                49,
                51,
                50,
                52,
                51,
                53,
                52,
                54,
                53,
                55,
                54,
                56,
                55,
                57,
                56,
                58,
                57,
                59,
                58,
                60,
                59,
                61,
                60,
                62,
                61,
                63,
            ],
        },
        w__K: { start_pos: 3, curr_pos: 3, feasible_moves: [], moves: [7, 8, 9] },
        w__Q: {
            start_pos: 4,
            curr_pos: 4,
            feasible_moves: [],
            moves: [-62, -61, -60, -59, -58, -57, -56, -55, -54, -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
            ],
        },
        w_B1: {
            start_pos: 5,
            curr_pos: 5,
            feasible_moves: [],
            moves: [-63, -61, -62, -60, -61, -59, -60, -58, -59, -57, -58, -56, -57, -55, -56, -54, -55, -53, -54, -52, -53, -51, -52, -50, -51, -49, -50, -48, -49, -47, -48, -46, -47, -45, -46, -44, -45, -43, -44, -42, -43, -41, -42, -40, -41, -39, -40, -38, -39, -37, -38, -36, -37, -35, -36, -34, -35, -33, -34, -32, -33, -31, -32, -30, -31, -29, -30, -28, -29, -27, -28, -26, -27, -25, -26, -24, -25, -23, -24, -22, -23, -21, -22, -20, -21, -19, -20, -18, -19, -17, -18, -16, -17, -15, -16, -14, -15, -13, -14, -12, -13, -11, -12, -10, -11, -9, -10, -8, -9, -7, -8, -6, -7, -5, -6, -4, -5, -3, -4, -2, -3, -1, -2,
                0, -1,
                1,
                0,
                2,
                1,
                3,
                2,
                4,
                3,
                5,
                4,
                6,
                5,
                7,
                6,
                8,
                7,
                9,
                8,
                10,
                9,
                11,
                10,
                12,
                11,
                13,
                12,
                14,
                13,
                15,
                14,
                16,
                15,
                17,
                16,
                18,
                17,
                19,
                18,
                20,
                19,
                21,
                20,
                22,
                21,
                23,
                22,
                24,
                23,
                25,
                24,
                26,
                25,
                27,
                26,
                28,
                27,
                29,
                28,
                30,
                29,
                31,
                30,
                32,
                31,
                33,
                32,
                34,
                33,
                35,
                34,
                36,
                35,
                37,
                36,
                38,
                37,
                39,
                38,
                40,
                39,
                41,
                40,
                42,
                41,
                43,
                42,
                44,
                43,
                45,
                44,
                46,
                45,
                47,
                46,
                48,
                47,
                49,
                48,
                50,
                49,
                51,
                50,
                52,
                51,
                53,
                52,
                54,
                53,
                55,
                54,
                56,
                55,
                57,
                56,
                58,
                57,
                59,
                58,
                60,
                59,
                61,
                60,
                62,
                61,
                63,
            ],
        },
        w_K1: {
            start_pos: 6,
            curr_pos: 6,
            feasible_moves: [],
            moves: [6, 10, 15, 17],
        },
        w_R1: {
            start_pos: 7,
            curr_pos: 7,
            feasible_moves: [],
            moves: [8, 16, 24, 32],
        },
        w_P0: { start_pos: 8, curr_pos: 8, feasible_moves: [], moves: [7, 8, 9] },
        w_P1: { start_pos: 9, curr_pos: 9, feasible_moves: [], moves: [7, 8, 9] },
        w_P2: { start_pos: 10, curr_pos: 10, feasible_moves: [], moves: [7, 8, 9] },
        w_P3: { start_pos: 11, curr_pos: 11, feasible_moves: [], moves: [7, 8, 9] },
        w_P4: { start_pos: 12, curr_pos: 12, feasible_moves: [], moves: [7, 8, 9] },
        w_P5: { start_pos: 13, curr_pos: 13, feasible_moves: [], moves: [7, 8, 9] },
        w_P6: { start_pos: 14, curr_pos: 14, feasible_moves: [], moves: [7, 8, 9] },
        w_P7: { start_pos: 15, curr_pos: 15, feasible_moves: [], moves: [7, 8, 9] },
        b_P0: {
            start_pos: 48,
            curr_pos: 48,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b_P1: {
            start_pos: 49,
            curr_pos: 49,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b_P2: {
            start_pos: 50,
            curr_pos: 50,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b_P3: {
            start_pos: 51,
            curr_pos: 51,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b_P4: {
            start_pos: 52,
            curr_pos: 52,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b_P5: {
            start_pos: 53,
            curr_pos: 53,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b_P6: {
            start_pos: 54,
            curr_pos: 54,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b_P7: {
            start_pos: 55,
            curr_pos: 55,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b_R0: {
            start_pos: 56,
            curr_pos: 56,
            feasible_moves: [],
            moves: [-8, -16, -24, -32],
        },
        b_K0: {
            start_pos: 57,
            curr_pos: 57,
            feasible_moves: [],
            moves: [-6, -10, -15, -17],
        },
        b_B0: {
            start_pos: 58,
            curr_pos: 58,
            feasible_moves: [],
            moves: [-63, -61, -62, -60, -61, -59, -60, -58, -59, -57, -58, -56, -57, -55, -56, -54, -55, -53, -54, -52, -53, -51, -52, -50, -51, -49, -50, -48, -49, -47, -48, -46, -47, -45, -46, -44, -45, -43, -44, -42, -43, -41, -42, -40, -41, -39, -40, -38, -39, -37, -38, -36, -37, -35, -36, -34, -35, -33, -34, -32, -33, -31, -32, -30, -31, -29, -30, -28, -29, -27, -28, -26, -27, -25, -26, -24, -25, -23, -24, -22, -23, -21, -22, -20, -21, -19, -20, -18, -19, -17, -18, -16, -17, -15, -16, -14, -15, -13, -14, -12, -13, -11, -12, -10, -11, -9, -10, -8, -9, -7, -8, -6, -7, -5, -6, -4, -5, -3, -4, -2, -3, -1, -2,
                0, -1,
                1,
                0,
                2,
                1,
                3,
                2,
                4,
                3,
                5,
                4,
                6,
                5,
                7,
                6,
                8,
                7,
                9,
                8,
                10,
                9,
                11,
                10,
                12,
                11,
                13,
                12,
                14,
                13,
                15,
                14,
                16,
                15,
                17,
                16,
                18,
                17,
                19,
                18,
                20,
                19,
                21,
                20,
                22,
                21,
                23,
                22,
                24,
                23,
                25,
                24,
                26,
                25,
                27,
                26,
                28,
                27,
                29,
                28,
                30,
                29,
                31,
                30,
                32,
                31,
                33,
                32,
                34,
                33,
                35,
                34,
                36,
                35,
                37,
                36,
                38,
                37,
                39,
                38,
                40,
                39,
                41,
                40,
                42,
                41,
                43,
                42,
                44,
                43,
                45,
                44,
                46,
                45,
                47,
                46,
                48,
                47,
                49,
                48,
                50,
                49,
                51,
                50,
                52,
                51,
                53,
                52,
                54,
                53,
                55,
                54,
                56,
                55,
                57,
                56,
                58,
                57,
                59,
                58,
                60,
                59,
                61,
                60,
                62,
                61,
                63,
            ],
        },
        b__K: {
            start_pos: 59,
            curr_pos: 59,
            feasible_moves: [],
            moves: [-7, -8, -9],
        },
        b__Q: {
            start_pos: 60,
            curr_pos: 60,
            feasible_moves: [],
            moves: [-62, -61, -60, -59, -58, -57, -56, -55, -54, -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
            ],
        },
        b_B1: {
            start_pos: 61,
            curr_pos: 61,
            feasible_moves: [],
            moves: [-63, -61, -62, -60, -61, -59, -60, -58, -59, -57, -58, -56, -57, -55, -56, -54, -55, -53, -54, -52, -53, -51, -52, -50, -51, -49, -50, -48, -49, -47, -48, -46, -47, -45, -46, -44, -45, -43, -44, -42, -43, -41, -42, -40, -41, -39, -40, -38, -39, -37, -38, -36, -37, -35, -36, -34, -35, -33, -34, -32, -33, -31, -32, -30, -31, -29, -30, -28, -29, -27, -28, -26, -27, -25, -26, -24, -25, -23, -24, -22, -23, -21, -22, -20, -21, -19, -20, -18, -19, -17, -18, -16, -17, -15, -16, -14, -15, -13, -14, -12, -13, -11, -12, -10, -11, -9, -10, -8, -9, -7, -8, -6, -7, -5, -6, -4, -5, -3, -4, -2, -3, -1, -2,
                0, -1,
                1,
                0,
                2,
                1,
                3,
                2,
                4,
                3,
                5,
                4,
                6,
                5,
                7,
                6,
                8,
                7,
                9,
                8,
                10,
                9,
                11,
                10,
                12,
                11,
                13,
                12,
                14,
                13,
                15,
                14,
                16,
                15,
                17,
                16,
                18,
                17,
                19,
                18,
                20,
                19,
                21,
                20,
                22,
                21,
                23,
                22,
                24,
                23,
                25,
                24,
                26,
                25,
                27,
                26,
                28,
                27,
                29,
                28,
                30,
                29,
                31,
                30,
                32,
                31,
                33,
                32,
                34,
                33,
                35,
                34,
                36,
                35,
                37,
                36,
                38,
                37,
                39,
                38,
                40,
                39,
                41,
                40,
                42,
                41,
                43,
                42,
                44,
                43,
                45,
                44,
                46,
                45,
                47,
                46,
                48,
                47,
                49,
                48,
                50,
                49,
                51,
                50,
                52,
                51,
                53,
                52,
                54,
                53,
                55,
                54,
                56,
                55,
                57,
                56,
                58,
                57,
                59,
                58,
                60,
                59,
                61,
                60,
                62,
                61,
                63,
            ],
        },
        b_K1: {
            start_pos: 62,
            curr_pos: 62,
            feasible_moves: [],
            moves: [-6, -10, -15, -17],
        },
        b_R1: {
            start_pos: 63,
            curr_pos: 63,
            feasible_moves: [],
            moves: [-8, -16, -24, -32],
        },
    },
};

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
        if (next_pos >= 0 && next_pos <= 63 && initialState.board[next_pos]) {
            curr_piece.feasible_moves.push(next_pos);
        }
    });
    curr_piece.feasible_moves = [...new Set(curr_piece.feasible_moves)];
});

export default initialState;