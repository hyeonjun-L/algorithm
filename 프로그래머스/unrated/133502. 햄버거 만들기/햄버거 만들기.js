function solution(ingredient) {
    let hamburger = 0

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            hamburger++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return hamburger;
}