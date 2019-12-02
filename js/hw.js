/*
         Email:utsav_patel@student.uml.edu
           Name: Utsav Patel
           I am a junior/senoir at Umass Lowell in  91.61 GUI Programming I
           91.461 Assignment:  Creating multiplication table error
           Utsav Patel, UMass Lowell Computer Science, upatel@cs.uml.edu
           Copyright (c) 2019 by Utsav Patel.  All rights reserved.  May be
           freely copied or excerpted for educational purposes with credit to
           the author.
           updated by UP on december 1st, 2019 at 9:23 AM
           w3schools.com was used for references
*/
/*This is adding the greater than method which was created by the jquery validation
team and a plugin which was found on jqueryvalidation
*/
$().ready(function () {
    $.validator.addMethod( "greaterThan", function( value, element, param ) {
      var target = $( param );
      if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
          target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
              $( element ).valid();
          } );
      }
      return Number(value) >= Number(target.val());

    });
/*This is setting the rules of the form to validate and create a error message below
the rules and messages will be for empty blanks, invalid numbers, and/or greater value*/

      		$("#myform").validate({
            rules: {
                firstHorizontal: {
                required: true,
                number: true
            },
            lastHorizontal: {
                required: true,
              number: true,
              greaterThan: '#firstHorizontal'
            },
            firstVertical: {
              required: true,
              number: true
            },
            lastVertical: {
              required: true,

              number: true,
              greaterThan:'#firstVertical'
            }
        },
          messages: {
            firstHorizontal: {
              required: "Please enter the  number",
              number: "The number is Invalid"

            },

            lastHorizontal: {
              required:  "Please enter the  number",
              number: "The number is Invalid",

              greaterThan: "Please enter a greater number than previous entered"
              },
              firstVertical: {
                required:"Please enter the  number",

                number:  "The number is Invalid"

              },
              lastVertical: {
                required:  "Please enter the  number",

                number:  "The number is Invalid",

                greaterThan: "Please enter a greater number than previous entered"
              }
                },
                  //create the table if suceess
                submitHandler: function() {
                  create_outputtable();

        },
        });
  });



          function create_outputtable() {
            /* Stores in the values entered by user*/
            var horizontal = Number(document.getElementById("firstHorizontal").value);
            var secondhorizontal = Number(document.getElementById("lastHorizontal").value);
            var vertical = Number(document.getElementById("firstVertical").value);
            var secondvertical = Number(document.getElementById("lastVertical").value);

          /* outputing the numbers in the table*/
         
             var outputnumber = "<tr><th> </th>";
             for(var i = horizontal; i <= secondhorizontal; i++){
               outputnumber += "<th>" + i + "</th>";
             }
            /*This will output all the numbers and do the calculation */
             outputnumber += "</tr>";
             for(var j = vertical; j <= secondvertical; j++) {
               outputnumber += "<tr><th>" + j + "</th>";
               for(var x = horizontal; x <= secondhorizontal; x++) {
               outputnumber += "<td>" + j*x + "</td>";
               }
               outputnumber += "</tr>";

             }
             /* Printing the table in the HTML filea*/
/*
        var table = document.getElementById("multipcationtable").innerHTML = outputnumber;
*/
            $('#multipcationtable').html(outputnumber);


}

            /* Extra feature to reset the entered input.
              can be used if input entered wrongly*/
          function reset() {
            document.getElementById("myFormreset").reset();
          }
