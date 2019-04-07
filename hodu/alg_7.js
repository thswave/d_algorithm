/**
 * Given a list of intervals, merge intersecting intervals.
 * ex)
 * Input: [[2,4], [1,5], [7,9]]
 * Output: [[1,5], [7,9]]
 * Input: [[3,6], [1,3], [2,4]]
 * Output: [[1,6]]
 */
const mergeIntervals = (intervals) =>
  intervals.reduce((result, interval) => {
    const [from, to] = interval
    const targetIndex = result.findIndex(v => from <= v[1])
    
    if (targetIndex !== -1) {
      const [min, max] = result[targetIndex]
      result[targetIndex] = [from < min ? from : min, to > max ? to : max]
    } else {
      result.push(interval)
    }

    return result
  }, [])
