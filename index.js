
    function calclator(){
        let nprice = parseInt(document.getElementById("amount").value);
        let daysOfThemonth = [31,29,31,30,31,30,31,31,30,31,30,31];


        let monthsnames = ["January","February","March","April","May","June","July","August","September","October","Novermber","December"];
        let shedMilk = {
            shed0 : parseInt(document.getElementById("shed1").value),
            shed1 : parseInt(document.getElementById("shed2").value),
            shed2 : parseInt(document.getElementById("shed3").value),
            shed3 : parseInt(document.getElementById("shed4").value)
        };
        let datef = new Date();
        let months = datef.getMonth();
        let currentMonth = daysOfThemonth[months];
        
        let tottalmilk = shedMilk.shed0 + shedMilk.shed1 +shedMilk.shed2 + shedMilk.shed3;
        let dailyamount = tottalmilk * nprice;
        let daysOfTheYear = daysOfThemonth.reduce((a,b) => a + b, 0);
    
        document.getElementById("tottal").innerHTML="Tottal Quantity(Litres): " + tottalmilk;
        let dailyd = document.getElementById("daily").innerHTML="Daily Amount(Kshs): " + tottalmilk * nprice;
        let weekly = document.getElementById("weekly").innerHTML="Weekly Amount(Kshs): " + (tottalmilk * nprice) * 7;
        let monthly = document.getElementById("monthly").innerHTML = "Monthly Amount(Kshs): " + (tottalmilk * nprice) * currentMonth;
    
        // yearly
         let data = {
             jan: ["January",31],
             feb: ["February",29],
             mar: ["March",31],
             Apr: ["April",30],
             may: ["May",31],
             jun: ["June",30],
             jul: ["July",31],
             Aug: ["August",31],
             sep: ["September",30],
             oct: ["October",31],
             nov: ["November",30],
             dec: ["December",31]
             
         }
        //  alert(parseInt(data.Apr[1]*dailyamount));
         document.getElementById("yearly1").innerHTML= data.jan[0] + " " + parseInt(data.jan[1]*dailyamount);
         document.getElementById("yearly2").innerHTML= data.feb[0] + " " + parseInt(data.feb[1]*dailyamount);
         document.getElementById("yearly3").innerHTML= data.mar[0] + " " + parseInt(data.mar[1]*dailyamount);
         document.getElementById("yearly4").innerHTML= data.Apr[0] + " " + parseInt(data.Apr[1]*dailyamount);
         document.getElementById("yearly5").innerHTML= data.may[0] + " " + parseInt(data.may[1]*dailyamount);
         document.getElementById("yearly6").innerHTML= data.jun[0] + " " + parseInt(data.jun[1]*dailyamount);
         document.getElementById("yearly7").innerHTML= data.jul[0] + " " + parseInt(data.jul[1]*dailyamount);
         document.getElementById("yearly8").innerHTML= data.Aug[0] + " " + parseInt(data.Aug[1]*dailyamount);
         document.getElementById("yearly9").innerHTML= data.sep[0] + " " + parseInt(data.sep[1]*dailyamount);
         document.getElementById("yearly10").innerHTML= data.oct[0] + " " + parseInt(data.oct[1]*dailyamount);
         document.getElementById("yearly11").innerHTML= data.nov[0] + " " + parseInt(data.nov[1]*dailyamount);
         document.getElementById("yearly12").innerHTML= data.dec[0] + " " + parseInt(data.dec[1]*dailyamount);
        return false;
    }

