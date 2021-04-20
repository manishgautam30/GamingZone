$(document).ready(function() {

    $("#newdiv").hide();
    $("#winRar").hide();
    $("#lostRar").hide();

    $("#g1,#g2,#g3,#g4,#g5,#g6").hide();


    $("#start").click(function() {

        $("#fro").hide();
        var ch = 0;
        var shw = 0;

        $("#newdiv").show();
        $("#ent").focus();

        var word = ["success", "happy", "present", "dance", "tigers", "picture", "liberty", "science", "advice", "doctor", "java", "python", "style", "program", "canvas", "street", "cricket", "hockey", "light", "season", "session", "digital", "tea", "coffee", "hit", "kill", "die", "cry", "hill", "chill", "bug", "car", "last", "win"];



        var ran = Math.floor(Math.random() * 34);

        selectedWord = word[ran];

        lengthOfSelWord = selectedWord.length;

        for (var i = 1; i <= lengthOfSelWord; i++) {

            $("#gb").append("<div class='gbo h" + i + "'></div>");

        }

        win2 = "";

        $("#bt").click(function() {

            $("#ent").focus();

            var inputValue = $("#ent").val();
            if (inputValue != "") {
                $("#ent").val("");
                var inputValueUpper = inputValue.toLowerCase();
                var n = 0;

                for (var j = 0; j < lengthOfSelWord; j++) {

                    if (inputValueUpper == selectedWord[j]) {

                        var z = j + 1;

                        $(".h" + z).html("<h3>" + inputValueUpper + "</h3>");



                    } else {

                        n = n + 1;


                    }


                }

                if (n == lengthOfSelWord) {
                    ch = ch + 1;

                    $("#g" + ch).show();
                    shw = shw + 1;
                }
                if (shw == 6) {
                    ch = 0;
                    shw = 0;
                    $("#newdiv").hide();
                    $("#lostRar").show();
                    $("#lostword").text("The Word was" + " " + selectedWord);

                }
                var zx = 0;
                for (var v = 1; v <= lengthOfSelWord; v++) {

                    var xx = $(".h" + v).text();

                    if (xx != "") {
                        var zx = zx + 1;
                    }
                }
                if (zx == lengthOfSelWord) {
                    ch = 0;
                    shw = 0;
                    $("#newdiv").hide();
                    $("#winRar").show();
                    $("#winword").text("The Word was" + " " + selectedWord);

                }

            } else {

            }


        })

    })

    $(".fa-home").click(function() {
        ch = 0;
        shw = 0;
        $("#fro").show();
        $("#newdiv").hide();
        $("#gb").empty();
        $("#winRar").hide();

        $("#lostRar").hide();

        $("#g1,#g2,#g3,#g4,#g5,#g6").hide();

        win2 = "";


    })


})