function solution(wallpaper) {
    const row = wallpaper[0].length
    const column = wallpaper.length
    let [cmin, cmax, rmin, rmax] = [50, -1, 50, -1]

    for (let r=0; r<row; r++) {
        for (let c=0; c<column; c++) {
            if (wallpaper[c][r] === '#') {
                cmin = Math.min(cmin, c)
                cmax = Math.max(cmax, c)
                rmin = Math.min(rmin, r)
                rmax = Math.max(rmax, r)
            }
        }
    }

    return [cmin, rmin, cmax+1, rmax+1]
}
