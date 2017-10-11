$('.basket').click(function() {
	// body...
	if(parseInt($(this).attr("select")) == 0)
	{
		var items = parseInt($('#items').text());
		var sum = parseInt($('#sum').text());
		var itemprice = parseInt($(this).attr("price"));
		$('#items').text(items+1);
		$('#sum').text(sum+itemprice);
		$(this).attr("select","1");
		$(this).empty().html('<img width="30px" class="icon" src="https://image.flaticon.com/icons/png/128/61/61584.png"/>');
	}
	else
	{
		$(this).empty().html('<img width="30px" class="icon" src="https://image.flaticon.com/icons/png/512/2/2772.png"/>');
		var items = parseInt($('#items').text());
		var sum = parseInt($('#sum').text());
		var itemprice = parseInt($(this).attr("price"));
		$('#items').text(items-1);
		$('#sum').text(sum-itemprice);
		$(this).attr("select","0");
	}
	
})