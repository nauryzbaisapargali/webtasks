// task 1
$('#taskone div').find('button').click(function () {
	// body...
	$(this).parent().find('span').css("text-decoration"," line-through");
});