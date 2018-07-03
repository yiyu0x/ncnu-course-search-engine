var lst = ['中文系','外文系','社工系','公行系','公行專班','公職養成學分學程','歷史系','東南亞系','東南亞系人類學','東南亞系在職專班','華文學程','國際華語文學程','文創產業政策學程','非營利組織專班','原鄉發展學士專班','管院','國企系','經濟系','資管系','財金系','觀光餐旅系觀光','觀光餐旅系餐旅','高階經管班','兩岸高階主管班','新興產業博士班','新興產業碩士班','土木系','資工系','電機系','應化系','應化生醫所','應光系','光電碩專班','國比系','教政系','諮人系','諮人系終身學習與人力資源','心理健康與諮詢專班','課科所','終身學習專班','教育學程','體育室','軍訓室','共同選','共同必','通識','語文中心'];

function f1(){
    var sel = document.getElementById('fac').value;
    var str = "<option>不指定</option>";

    if(sel == '人文學院'){
        for(i=0;i<15;i++)
            str = str + "<option>"+lst[i]+"</option>";
        document.getElementById('dep').innerHTML = str;
    }
    else if(sel == '管理學院'){
        for(i=15;i<26;i++)
            str = str + "<option>"+lst[i]+"</option>";
        document.getElementById('dep').innerHTML = str;
    }
    else if(sel == '科技學院'){
        for(i=26;i<33;i++)
            str = str + "<option>"+lst[i]+"</option>";
        document.getElementById('dep').innerHTML = str;
    }
    else if(sel == '教育學院'){
        for(i=33;i<lst.length;i++)
            str = str + "<option>"+lst[i]+"</option>";
        document.getElementById('dep').innerHTML = str;
    }
    else{
        for(i=0;i<lst.length;i++)
            str = str + "<option>"+lst[i]+"</option>";
        document.getElementById('dep').innerHTML = str;
    }
}

