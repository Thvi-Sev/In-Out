const salary = [200, 180, 500, 300];

function ShowTotal(arr)
{
    let total =0;
    for(let i=0;i<arr.length;i++){
        total += arr[i];
    }
    return total;
}
const result = ShowTotal();