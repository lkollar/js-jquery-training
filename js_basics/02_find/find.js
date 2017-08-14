
function find_tallest() {
    var heights = [120, 180, 134, 143, 182, 190, 110];
    var tallest = heights[0];

    for (var i = 0; i < heights.length; ++i) {
        if (heights[i] > tallest) {
            tallest = heights[i];
        }
    }
    console.info('Tallest height:', tallest);
}

