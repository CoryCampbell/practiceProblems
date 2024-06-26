var merge = function(intervals) {
  //sort the intervals array for simplified solution
    intervals.sort((a,b) => a[0] - b[0]);

    //loop through the intervals array
    for (let i = 1; i < intervals.length; i++) {
        let [x,y] = intervals[i];
        let [prevX, prevY] = intervals [i - 1];

        //test if our x is less than or equal to our previous Y
        if (x <= prevY) {
          //adjust the value of the index to equal the highest value between y and prevY
            intervals[i - 1][1] = Math.max(y,prevY);
            //we can then remove the array and index i because we have joined it to the prev
            intervals.splice(i,1);
            //lower the i count to compensate for the combining of two indexes
            i--
        }
    }
    return intervals;
};
