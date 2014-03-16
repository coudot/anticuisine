$(document).ready(function(){
	$("button[name='email']").each(function(){
		var mailto = "mailto:contact@anticuisine.fr"
                var subject = $(this).attr('title');
                if (subject) { mailto = mailto + "?subject=" + subject; }
		$(this).click(function(){
			window.location.href = mailto;
			return false;
		});
	});
});
