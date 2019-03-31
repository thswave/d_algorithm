const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", input => {
  const 총_괄호_수 = parseInt(input, 10);
  const 괄호_카운트 = [0, 0];
  const 조합_리스트 = [];
  const 괄호_조합 = "";

  const 괄호_조합_계산 = (괄호_카운트, 괄호_조합) => {
    const [왼쪽, 오른쪽] = 괄호_카운트;

    if (왼쪽 === 총_괄호_수 && 오른쪽 === 총_괄호_수) {
      return 조합_리스트.push(괄호_조합);
    }

    if (왼쪽 < 총_괄호_수) {
      괄호_조합_계산([왼쪽 + 1, 오른쪽], 괄호_조합.concat("("));
    }

    if (왼쪽 > 오른쪽) {
      괄호_조합_계산([왼쪽, 오른쪽 + 1], 괄호_조합.concat(")"));
    }
  };

  괄호_조합_계산(괄호_카운트, 괄호_조합);
  console.log(조합_리스트);
});
