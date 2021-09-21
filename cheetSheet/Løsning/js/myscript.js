console.log("Hello World");

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
        let pTag = "&lt;table&gt; <br>" + "&lt;caption&gt;" + caption + "&lt;/caption&gt; <br>";

        pTag += "&lt;tr&gt; <br>"; //table rows heading start
        for(var j = 0; j < rows; j++){
            pTag += "&lt;th&gt;" + "&lt;/th&gt; <br>"; //table headings
        };
        pTag += "&lt;/tr&gt; <br>" //table row heading end

        for(var i = 0; i < rows; i++){ //number of table rows
            pTag += "&lt;tr&gt; <br>";
            for(var k = 0; k < cols; k++){
                pTag += "&lt;td&gt;" + "&lt;/td&gt; <br>"; //table data
            };
            pTag += "&lt;/tr&gt; <br>";
        };
        pTag += "&lt;/table&gt;";
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
        let listTag = "&lt;"+ ListType + "&gt; <br>"; //ul / ol
        for(var i = 0; i < listNumber; i++){
            listTag += "&lt;li&gt;" + "&lt;/li&gt; <br>"; //lists
        };
        listTag += "&lt;/"+ ListType +"&gt;";
        document.getElementById("createListPlaceholder").innerHTML = listTag;
        document.getElementById("createListPlaceholder").style.display = "block";
    }