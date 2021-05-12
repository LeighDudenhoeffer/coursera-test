		// this is a variable to keep track of which chapter we are on
		var counter = 0;

		// when we click on a chapter thumbnail it displays that chapter
		// this code is pretty similar to the image gallery, but I've added some code
		// to update the counter
		$(".chapter-thumbnail").click(function(){
			// copy the html from the thumbnail (this) to the main viwer
			$("#mainViewer").html(
				$(this).html());

			// get the id of this element so we can get hold of its number
			var id = $(this).attr("id");

			// set the counter to the number of the chapter we selected.
			// We get this by taking the last charcter of the id and convert it to a number
			// id.slice gets a subsection of the string passing in -1 means we get just the
			// last character parseInt converts it to a number (integer)
			counter = parseInt(id.slice(-1));
		});

		// virtually click the first chapter to select it
		$("#chapter"+counter).click();

		// when we click on the main viewer we want to move forward or backward in the chapter
		$("#mainViewer").click(function (event){

			// move forward if we click to the right
			// or backward if we click to the left

			// event.offsetX is the horizontal
			// position of the mouse inside the
			// element we have clicked on,
			// it will be between 0
			// and the width of the element

			// $(this).width()*0.3 is 30% of
			// the with of the element

			// if event.offsetX is less than
			// 30% of the width, it means it is
			// on the left hand side
			if(event.offsetX
				< $(this).width()*0.3){
				// if we've clicked on the left
				// go back
				counter = counter - 1;
			} else {
				// if we've clicked on the right
				// go forwards
				counter = counter + 1;
			}

			// If we've gone below 0 it means
			// we were at the beginning, and
			// should just stay at zero
			if(counter < 0){
				counter =  0;
			}

			// $(".chapter-thumbnail").length
			// is the number of elements that
			// match the selector .chapter-thumbnail
			// i.e. the number of chapter thumbnails
			// if counter is equal to or more than
			// the number of thumbnails it means
			// we've gone past the last chapter which
			// is $(".chapter-thumbnail").length-1
			// (because we start counting at 0)
			if(counter >=
				$(".chapter-thumbnail").length){
				counter =
			$(".chapter-thumbnail").length-1;
			}

			// we get the id of the chapter thumbnail
			// we want by putting counter on the end
			// of it.
			// we can do a virtual click on the
			// chapter thumbnail to select it
			$("#chapter"+counter).click();
		});
