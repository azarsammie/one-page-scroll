$(document).ready(function () {

    function completion() {
        var q1 = $(".q1").data("selected");
        var q2 = $(".q1andfk").val();
        var q3 = $(".rokla").val();
        var q4 = $(".email").val();
        var q5 = $(".fileu").val();
        var q6 = $(".q6").data("selected");
        var q7 = $(".q7").data("selected");
        var data = [q1, q2, q3, q4, q5, q6, q7];

        var c = 0;
        for (i = 0; i < data.length; i++) {
            if (data[i] == "undefined" || data[i] == "" || data[i] == null || data[i] == false) {
                c = c + 1;
            }
        }
        console.log(c);
        if (c == 0) {
            $(".perc").text("100%");
            $(".prog").css({ width: "100%" });
        } else if (c == 1) {
            $(".perc").text("95%");
            $(".prog").css({ width: "95%" });
        } else if (c == 2) {
            $(".perc").text("90%");
            $(".prog").css({ width: "90%" });
        } else if (c == 2) {
            $(".perc").text("85%");
            $(".prog").css({ width: "85%" });
        } else if (c == 3) {
            $(".perc").text("75%");
            $(".prog").css({ width: "75%" });
        } else if (c == 4) {
            $(".perc").text("70%");
            $(".prog").css({ width: "70%" });
        } else if (c == 5) {
            $(".perc").text("60%");
            $(".prog").css({ width: "60%" });
        } else if (c == 6) {
            $(".perc").text("30%");
            $(".prog").css({ width: "30%" });
        } else if (c == 7) {
            $(".perc").text("0%");
            $(".prog").css({ width: "0%" });
        }
    }
    // Submit Feedback
    $(".submit").click(function () {
        var totalQuestion = 7;
        var q1 = $(".q1").data("selected");
        var q2 = $(".q1andfk").val();
        var q3 = $(".rokla").val();
        var q4 = $(".email").val();
        var q5 = $(".fileu").val();
        var q6 = $(".q6").data("selected");
        var q7 = $(".q7").data("selected");

        var data = [q1, q2, q3, q4, q5, q6, q7];

        // console.log(data);
        for (i = 0; i < data.length; i++) {
            if (data[i] == "undefined" || data[i] == "" || data[i] == null || data[i] == false) {
                $(".main").moveTo(i + 1);
                break;
            }
        }


        if (q1 != "undefined" && q2 != "" && q3 != "" && q4 != "" && q5 != "" && q6 != "undefined" && q7 != "undefined") {
            // Then Send the information to the server
            $(".main").moveDown();
        }
    })

    $(".azar-button").click(function () {
        completion();
    });

    $(".rk").hover(function () {
        var a = $(this).data("key");
        $("." + a + "-key").css("display", "block");
    },
        function () {
            var a = $(this).data("key");
            if ($(this).hasClass("selected")) {

            } else {
                $("." + a + "-key").css("display", "none");
            }
        })

    $(".rk").click(function () {
        var a = $(this).data("key");
        $(".rk").removeClass("selected");
        $(".rlad").css("display", "none");
        $(".rlad").removeClass("iselected");
        $(".q1").removeAttr("data-selected");
        $("." + a + "-key").css("display", "block");

        $(".rfad").css({
            display: "none",
            marginTop: "10px",
            fontSize: "17px"
        });

        $(".rl").removeClass("iselected");

        $(this).addClass("anim selected");
        $("." + a + "-key").addClass("iselected");
        $("." + a + "-rl").addClass("iselected");
        $(".q1").attr("data-selected", "true");
        $("." + a + "-ch").css({
            display: "block",
            marginTop: "10px",
            fontSize: "17px"
        });

        setTimeout(() => {
            $('.main').moveDown();
            completion();
        }, 400);
    })

    $('textarea').on('keyup input', function () {
        $(this).css('height', '55px').css('height', this.scrollHeight + (this.offsetHeight - this.clientHeight));

        var page = $(this).data("page");
        if ($(this).val() != "") {
            $("." + page + "-btn").css("display", "block");
        } else {
            $("." + page + "-btn").css("display", "none");
        }
    });

    $(".email").on("keyup keydown", function () {
        var email = $(this).val();
        var page = $(this).data("page");
        if (IsEmail(email) == false) {
            $("." + page + "-btn").css("display", "none");
            $('.emadf').show();
        } else {
            $('.emadf').hide();
            $("." + page + "-btn").css("display", "block");
        }
    })

    $('input').on('keyup input', function () {
        var page = $(this).data("page");
        
        if ($(this).val() != "" && $.isNumeric($(this).val()) == true) {
            $("." + page + "-btn").css("display", "block");
        } else {
            $("." + page + "-btn").css("display", "none");
        }
    });



    $(document).keypress(function (e) {
        if (e.which == 13 && !e.shiftKey) {
            $(".main").moveDown();
            completion();
           var i = $(".active").children("textarea");

        }
    })

    // validate email

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            return false;
        } else {
            return true;
        }
    }

    // Star
    $(".align-ct-star-radio").click(function () {
        var sc = $(this).data("check");
        $(".q7").removeAttr("data-selected");
        if (sc == "s1") {
            $(".s1, .s2, .s3").removeClass("star-anni");
            $(".s1").addClass("star-anni");
            if ($(".s1, .s2, .s3").hasClass("fa-star")) {
                $(".s2, .s3").removeClass("fa-star");
                $(".s2, .s3").addClass("fa-star-o");
            } else {
                $(".s1").removeClass("fa-star-o");
                $(".s1").addClass("fa-star");
            }
        } else if (sc == "s2") {
            $(".s1, .s2, .s3").removeClass("star-anni");
            $(".s2").addClass("star-anni");
            if ($(".s2").hasClass("fa-star")) {
                $(".s3").removeClass("fa-star");
                $(".s3").addClass("fa-star-o");
            } else {
                $(".s1, .s2").removeClass("fa-star-o");
                $(".s1, .s2").addClass("fa-star");
            }

        } else if (sc == "s3") {
            $(".s1, .s2, .s3").removeClass("star-anni");
            $(".s3").addClass("star-anni");
            $(".s1, .s2, .s3").removeClass("fa-star-o");
            $(".s1, .s2, .s3").addClass("fa-star");
        }
        $(".q7").attr("data-selected", "true");
        setTimeout(() => {
            $('.main').moveDown();
            completion();
        }, 400);
    })


    $(".rolk").hover(function () {

        $(this).css("background", "rgba(26, 144, 162, 0.685)");
    }, function () {
        if (!$(this).hasClass("rolk-check")) {
            $(this).css("background", "rgb(26 145 162 / 25%)");
        } else {
            $(this).css("background", "rgba(26, 144, 162, 0.685)");

        }
    })

    $(".rolk").click(function () {
        $(".rolk").css("background", "rgba(26, 145, 162, 0.25)");
        $(".rolk").removeClass("rolk-annni");
        $(".q6").removeAttr("data-selected");


        $(this).addClass("rolk-annni");

        $(".q6").attr("data-selected", true);
        $(".rolk").removeClass("rolk-check");
        $(this).addClass("rolk-check");
        setTimeout(() => {
            $('.main').moveDown();
            completion();
        }, 400);
    })

    $(".azar-feedback").click(function () {
        $(".azar-feedback").hide();
        $(".progan").show();
        $(".feedback-modal").show();


        $(".close-btn").css({
            display: "block"
        })
    })

    // Close 
    $(".close-btn").click(function () {
        $(".azar-feedback").show();
        $(".feedback-modal").hide();
        $(".progan").hide();
    })

    

    $(".contactdf").on("keydown keyup", function(){
        $(this).removeClass("errorani");
        var v = $(this).val();
        if (/\D/g.test(this.value)) {
            this.value = this.value.replace(/\D/g,'');
            $(".sldkf").show();
            $(this).addClass("errorani");
        }else{
            $(".sldkf").hide();
        }
        
    })

    // Custom Select

    
$(".cselect").each(function(){

var $input = $(this).find("input");
var $dropDown = $(this).find("ul");

$(this).on("click", function(){
    if($(".daslfjkl").hasClass("fa-angle-up")){
        $(".daslfjkl").removeClass("fa-angle-up");
        $(".daslfjkl").addClass("fa-angle-down");
    }else{
    $(".daslfjkl").addClass("fa-angle-up");
    $(".daslfjkl").removeClass("fa-angle-down");
    }
    
$dropDown.stop().slideToggle();
});

$dropDown.on("click", "li", function(){
$input.val( $(this).text() );
});

});
});
// Auto focus

// Select using Key
$(document).on("keypress", function(e){
    if($("body").hasClass("viewing-page-1")){
        switch(e.which){
            case 97:
                $(".aakey").trigger("click");
                break;
                case 98:
                $(".bbkey").trigger("click");
                break
                case 99:
                $(".cckey").trigger("click");
                break;
                case 100:
                $(".ddkey").trigger("click");
                break;
        }
    }
})


// File Upload
// 
function ekUpload(){
function Init() {

console.log("Upload Initialised");

var fileSelect    = document.getElementById('file-upload'),
fileDrag      = document.getElementById('file-drag'),
submitButton  = document.getElementById('submit-button');

fileSelect.addEventListener('change', fileSelectHandler, false);

// Is XHR2 available?
var xhr = new XMLHttpRequest();
if (xhr.upload) {
// File Drop
fileDrag.addEventListener('dragover', fileDragHover, false);
fileDrag.addEventListener('dragleave', fileDragHover, false);
fileDrag.addEventListener('drop', fileSelectHandler, false);
}
}

function fileDragHover(e) {
var fileDrag = document.getElementById('file-drag');

e.stopPropagation();
e.preventDefault();

fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
}

function fileSelectHandler(e) {
// Fetch FileList object
var files = e.target.files || e.dataTransfer.files;

// Cancel event and hover styling
fileDragHover(e);

// Process all File objects
for (var i = 0, f; f = files[i]; i++) {
parseFile(f);
uploadFile(f);
}
}

// Output
function output(msg) {
// Response
var m = document.getElementById('messages');
m.innerHTML = msg;
}

function parseFile(file) {

console.log(file.name);
output(
'<strong>' + encodeURI(file.name) + '</strong>'
);

// var fileType = file.type;
// console.log(fileType);
var imageName = file.name;

var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
if (isGood) {
document.getElementById('start').classList.add("hidden");
document.getElementById('response').classList.remove("hidden");
document.getElementById('notimage').classList.add("hidden");
// Thumbnail Preview
document.getElementById('file-image').classList.remove("hidden");
document.getElementById('file-image').src = URL.createObjectURL(file);
}
else {
document.getElementById('file-image').classList.add("hidden");
document.getElementById('notimage').classList.remove("hidden");
document.getElementById('start').classList.remove("hidden");
document.getElementById('response').classList.add("hidden");
document.getElementById("file-upload-form").reset();
}
}

function setProgressMaxValue(e) {
var pBar = document.getElementById('file-progress');

if (e.lengthComputable) {
pBar.max = e.total;
}
}

function updateFileProgress(e) {
var pBar = document.getElementById('file-progress');

if (e.lengthComputable) {
pBar.value = e.loaded;
}
}

function uploadFile(file) {

var xhr = new XMLHttpRequest(),
fileInput = document.getElementById('class-roster-file'),
pBar = document.getElementById('file-progress'),
fileSizeLimit = 1024; // In MB
if (xhr.upload) {
// Check if file is less than x MB
if (file.size <= fileSizeLimit * 1024 * 1024) {
// Progress bar
pBar.style.display = 'inline';
xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
xhr.upload.addEventListener('progress', updateFileProgress, false);

// File received / failed
xhr.onreadystatechange = function(e) {
  if (xhr.readyState == 4) {
    // Everything is good!

    // progress.className = (xhr.status == 200 ? "success" : "failure");
    // document.location.reload(true);
  }
};

// Start upload
xhr.open('POST', document.getElementById('file-upload-form').action, true);
xhr.setRequestHeader('X-File-Name', file.name);
xhr.setRequestHeader('X-File-Size', file.size);
xhr.setRequestHeader('Content-Type', 'multipart/form-data');
xhr.send(file);
} else {
output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
}
}
}

// Check for the various File API support.
if (window.File && window.FileList && window.FileReader) {
Init();
} else {
document.getElementById('file-drag').style.display = 'none';
}
}
ekUpload();