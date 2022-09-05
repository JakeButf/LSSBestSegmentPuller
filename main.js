///Main Script
///Created by JakeZSR
///Twitter: @imJakeZSR
///Github: github.com/jakebutf

var Jake = Jake || {};
var Imported = Imported || {};
Imported['MainScript'] = 1.0;
Jake.MainScript = Jake.MainScript || {};

////////////////////////
//Variable Declaration//
////////////////////////
const element_fileUpload = document.getElementById("fileupload");
const element_result = document.getElementById("result");

///////////////////
//Event Listeners//
///////////////////
element_fileUpload.addEventListener("change", LSSUpload, false);

///////////
//Methods//
///////////
function LSSUpload()
{
    var fileLines;
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function(progressEvent)
    {
        var result = "";
        fileLines = this.result.split('\n');

        for(var i = 0; i < fileLines.length; i++)
        {
            fileLines[i] = fileLines[i].split(" ").join("");
            //console.log(fileLines[i]);
            if(fileLines[i].includes("<Segment>"))
            {
                result += fileLines[i + 1];
                result += "\n";
            }
            if(fileLines[i].includes("<BestSegmentTime>"))
            {
                result += fileLines[i + 1];
                result += "\n";
            }
        }
        console.log(result);
        element_result.value = result;
    };
    reader.readAsText(file);
}