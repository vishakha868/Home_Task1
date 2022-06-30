const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`Enter the operation to be performed\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n`, operation => {
    var operation=`${operation}`;
    switch(operation){
      case '1':
        readline.question(`Enter the space separated inputs to be taken\n`,num=>{
          var num = `${num}`
          var arr=num.trim().split(" ");
          var total=0;
          for(var i in arr){
             total+=parseInt(arr[i]);
          }
          console.log(total);
          readline.close();
        });
        break;
      case '2':
        readline.question('Enter the space separated inputs to be taken\n',num=>{
          var num=`${num}`
          var arr=num.trim().split(" ");
          console.log(arr[1]-arr[0])
          readline.close();
        })
        break;
      case '3':
        readline.question(`Enter the space separated inputs to be taken\n`,num=>{
          var num = `${num}`
          var arr=num.trim().split(" ");
          var total=1;
          for(var i in arr){
             total*=parseInt(arr[i]);
          }
          console.log(total);
          readline.close();
        })
          break;
      case '4':
        readline.question('Enter the space separated inputs to be taken\n',num=>{
          var num=`${num}`
          var arr=num.trim().split(" ")
          console.log(arr[1]/arr[0])
          readline.close();
        })
        break; 
      default:
        console.log("Not applicable operation")
        readline.close();
        break;
        
    }
  });