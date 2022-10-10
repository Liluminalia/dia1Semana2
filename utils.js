// existe otra forma de implementar las funciones
// mediante declaracion
// export function bar () {
//     const x = 22 * 2;
//     if (x > 12) {
//         console.log(x);
//     }
// };

export const foo = () => {
    const x = 22 * 2;

    if (x > 12) {
        console.log(x);
    }
};
