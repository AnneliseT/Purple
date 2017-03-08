function Purchases() {
  "use strict";
  var $totalPrice = 0;

	function checkVisible(element) {
	    //check if element is hidden or not
	    if (element.is(":hidden")) {
	      return true;
	    } else {
	      return false;
	    }
	  }

	  //check elements exists
	function checkExist(element) {
	    //check specified elements or not - return boolean
		if (element.length) {
	      return true;
	    } else {
	      return false;
	    }
	 }

	function createButton(buttonClass, buttonText) {
	    //build button
	    var $button = $('<button class="'+buttonClass+'">'+buttonText+'</button>');
	    //return built button
	    return $button;
	}

	function createEntry() {
	    //object for wrapper html for note
	    var $item = $("<p>");
	    //create delete button
	    var $delete_button = createButton("item-delete", "delete");
	    //define input field
	    var $item_name = $("#item-name");
	    var $item_value = $("#item-value");
	    //conditional check for input field
	    if ($item_name.val() !== "") {
	      //set content for note
	      $totalPrice = $totalPrice + Number($item_value.val(), 10);
	      $totalPrice = Number($totalPrice.toFixed(2), 10);
	      $item.html($item_name.val() + ", "+ $item_value.val()+ ", " + $totalPrice);

	      //append delete button to each note
	      $item.prepend($delete_button);
	      //hide new note to setup fadeIn...
	      $item.hide();
	      //hide delete button until user selects note
	      $delete_button.hide();
	      //append note text to note-output
	      $(".item-output").append($item);
	      //fadeIn hidden new note
	      $item.fadeIn("slow");
	      //clear note value
	      $item_name.val("");
	      $item_value.val("");
	      //$item_value.val("");
	      //check visibility of note controls
	      if (checkVisible($(".item-controls")) === true) {
	        $(".item-controls").fadeIn();
	      }
	    } else {
	    	$item_name.text("Hiya!");
	    }
	}

	//handle user event for `add` button click
	$(".entry button").on("click", function(e) {
	    //call note builder function
	    createEntry();
	});

	  //handle user event for keyboard press
	$(".item-name input").on("keypress", function(e) {
	    //check code for keyboard press
	    if (e.keyCode === 13) {
	      createEntry();
	    }
	});

	  //handle deletion of single note - bind to existing element...
	$(".item-output").on("click", "button.item-delete" , function() {
	    //delete parent note
	    $(this).parent().remove();
	    //set note selector
	    var $item = $(".item-output p");
	    //check for empty notes, and then remove note-controls
	      if (checkExist($item) === false) {
	        //hide note-controls
	        $(".item-controls").hide();
	      }
	});

	  //handle deletion of all notes
	$("#items-delete").on("click", function(e) {
	    //set note selector
	    var $item = $(".item-output p");
	    //check $note exists
	    if (checkExist($item) === true) {
	      //hide note-controls
	      $(this).parent().hide();
	      //remove all notes
	      $item.remove();
	    }
	});

	  //handle click event per note
	$(".item-output").on("click", "p", function() {
	    //check if other delete buttons visible
	    if (checkVisible($("button.item-delete")) === true) {
	      //set all siblings to active=false to ensure checks are correct
	      $(this).siblings().attr("active", "false");
	      $("button.item-delete").hide();
	    }
	    //then handle click event for current note
	    if (!$(this).attr("active") || $(this).attr("active") === "false") {
	      $(this).attr("active", "true");
	      $(this).children("button.item-delete").show();
	    } else if ($(this).attr("active") === "true") {
	      $(this).attr("active", "false");
	      $(this).children("button.item-delete").hide();
	    }
	});
};

$(document).ready(Purchases);











