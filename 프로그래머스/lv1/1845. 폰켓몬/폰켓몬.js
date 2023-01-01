function solution(nums) {
    const pokemon = Math.floor(nums.length/2);
    pokemonType = Array.from(new Set(nums));
    return pokemon < pokemonType.length ? pokemon : pokemonType.length;
}