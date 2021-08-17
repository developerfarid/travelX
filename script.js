document.getElementById("mars-add").addEventListener("click", function(){
        mainFun("mars", "add")
})
document.getElementById("moon-add").addEventListener("click", function(){
    mainFun("moon", "add")
})
document.getElementById("mars-sub").addEventListener("click", function(){
    mainFun("mars", "sub")
})
document.getElementById("moon-sub").addEventListener("click", function(){
mainFun("moon", "sub")
})



// main Function

function mainFun(type, calType) {
    let inputValueId = document.getElementById(`${type}-input`);
    let inputValue = parseFloat(inputValueId.value);
    if (calType === "add") {
        inputValue++;
        document.getElementById(`${type}-input`).value = inputValue;
        updateUi(type, inputValue);

        
    }else{
        if(inputValue <= 0){
            return;
        }
        inputValue--;
        document.getElementById(`${type}-input`).value = inputValue;
        updateUi(type,inputValue);
    }
    function updateUi(type, inputValue) {
        if (type ==="mars") {
            let total = 1000 * inputValue;
            document.getElementById(`${type}-cost`).innerText= total;
            totalFun(type)
     
        }else{
            let total = 2000 * inputValue;
            document.getElementById(`${type}-cost`).innerText= total;
            totalFun(type)
        } 
        function  totalFun(type){
            const costMon= parseFloat(document.getElementById("moon-cost").innerText);
             console.log("costMon");
            const costMars= parseFloat(document.getElementById("mars-cost").innerText);
            console.log(costMon, costMars);
            const totalCost = costMars + costMon;
            document.getElementById("total-cost").innerText= totalCost;   
             } 
    }
    

}






