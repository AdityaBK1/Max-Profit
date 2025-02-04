function MaxProfit(input1, flag, T_Count, P_Count, C_Count, sum) {
  let T_Earn;
  let P_Earn;
  let C_Earn;

  if (input1 == 7) {
    flag = 1;
  }

  if (input1 > 5) {
    T_Earn = (input1 - 5) * 1500;
  } else {
    T_Earn = 0;
  }

  if (input1 > 4) {
    P_Earn = (input1 - 4) * 1000;
  } else {
    P_Earn = 0;
  }

  if (input1 > 10) {
    C_Earn = (input1 - 10) * 1000;
  } else {
    C_Earn = 0;
  }

  let max = Math.max(T_Earn, P_Earn, C_Earn);
  console.log(max);
  sum = sum + max;
  if (max !== 0) {
    if (max === T_Earn) {
      input1 = input1 - 8;
      T_Count++;
    } else if (max === P_Earn) {
      input1 = input1 - 4;
      P_Count++;
    } else {
  
      input1 = input1 - 10;
      C_Count++;
    }
  }

  return [input1, flag, T_Count, P_Count, C_Count, sum];
}

function InputValue() {
  let input = document.getElementById("inputTime").value;
  let sum = 0;
  let T_Count = 0;
  let P_Count = 0;
  let C_Count = 0;
  let flag = 0;

  count_while = 0;
  let solution1 = document.getElementById("solution1");
  let solution2 = document.getElementById("solution2");
  solution1.innerHTML=""
  solution2.innerHTML=""

  let i = 0;
  while (input > 4) {
    [input, flag, T_Count, P_Count, C_Count, sum] = MaxProfit(
      input,
      flag,
      T_Count,
      P_Count,
      C_Count,
      sum
    );
    i++;
  }
  console.log("flag",flag)
  let earning = (document.getElementById("sum").innerHTML = `$${sum}`);
  


  if (flag == 1) {
    solution1.innerHTML = `Multiple Possible Solutions:
     Solution1=>T:${T_Count},P:${P_Count},C:${C_Count}`;

   solution2.innerHTML=
     `Solution2=>T:${T_Count - 1},P:${P_Count + 1},C:${C_Count}`;
  } else {
    solution1.innerHTML = `Solution1=>T:${T_Count},P:${P_Count},C:${C_Count}`;
  }

  console.log(sum);
}
InputValue();
