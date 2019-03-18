const LEFT_BRACKET = '('
const RIGHT_BRACKET = ')'

const bracket = (size, l=0, r=0, brackets=[]) => {
  if (brackets.length === size*2) {
    console.log(brackets.join(''))
    return
  }

  if (l < size) {
    bracket(size, l+1, r, [...brackets, LEFT_BRACKET])
  }

  if (r < l) {
    bracket(size, l, r+1, [...brackets, RIGHT_BRACKET])
  }
}

// node.js
// $ node alg_1.js {n}
bracket(process.argv.slice(2)[0]*1)
