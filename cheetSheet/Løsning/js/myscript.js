console.log("Hello World");
let st = "&lt;";
let sl = "&gt;";

/* create a a table */
document.getElementById("createTableNow").addEventListener("click", function() {
    document.getElementById("createListPlaceholder").innerHTML = "";
    let caption = document.getElementById("caption").value;
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);
    createTables(rows, cols, caption);
    document.getElementById("createListPlaceholder").style.display = "block";
});
    function createTables(rows, cols, caption){
        let pTag = st+"table"+sl + "<br>" + st+"caption"+sl + caption + st+"/caption"+sl + "<br>";

        pTag += st+"tr"+sl + "<br>"; //table rows heading start
        for(var j = 0; j < rows; j++){
            pTag += st+"th"+sl + st+"th"+sl + "<br>"; //table headings
        };
        pTag += "&lt;/tr&gt; <br>" //table row heading end

        for(var i = 0; i < rows; i++){ //number of table rows
            pTag += st+"tr"+sl + "<br>";
            for(var k = 0; k < cols; k++){
                pTag += st+"td"+sl + st+"/td"+sl + "<br>"; //table data
            };
            pTag += st+"/tr"+sl + "<br>";
        };
        pTag += st+"/table"+sl ;
        document.getElementById("createTablePlaceholder").innerHTML = pTag;
    }

//Create lists
document.getElementById("createListsNow").addEventListener("click", function() {
    //document.getElementById("createListPlaceholder").innerHTML = "";
    let ordredList = document.getElementById("ordredList");
    let unordredList = document.getElementById("unordredList");
    let listNumber = parseInt(document.getElementById("listNumber").value);
    if(ordredList.value && ordredList.checked){ //if it is an ordred list 
        console.log("hello1 ol");
        let listType = "ol";
        createList(listNumber, listType);
    }
    if(unordredList.value && unordredList.checked){ //if it is an unordred list 
        console.log("hello1 ul");
        let listType = "ul";
        createList(listNumber, listType);
    }
});
    function createList(listNumber, ListType){
        let listTag = st + ListType + sl + "<br>"; //ul / ol
        for(var i = 0; i < listNumber; i++){
            listTag += st+"li"+sl + st+"/li"+sl +"<br>"; //lists
        };
        listTag += st + ListType + sl;
        document.getElementById("createListPlaceholder").innerHTML = listTag;
        document.getElementById("createListPlaceholder").style.display = "block";
    }