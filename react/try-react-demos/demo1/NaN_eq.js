function eq(a, b) {
    if (a !== a) //NaN
    return b !== b;
}
console.log(eq(NaN, NaN));


// NaN 的性质---->  a !== a