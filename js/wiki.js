$(document).ready(function(){

	$("#wikiSearch").click(function(){

		var searchTerm = $("#searchTerm").val();

		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
console.log(url);
		$.ajax({
			type: "GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){
		console.log(data[1][0]);
		console.log(data[2][0]);
		console.log(data[3][0]);
		$("#output").html("");
	for (var i = 0; i < data[1].length; i++) {
		$('#output').append("<li><div class=collapsible-header><a href=" + data[3][i] + " target=_blank><i class=material-icons>open_in_new</i></a>" + data[1][i] + "</div><div class=collapsible-body><p>" + data[2][i] + "</p></div></li>");
	}
	$("#searchTerm").val("");
			},
			error: function(errorMessage){
				alert("Did Not Get That!");
			}
		})
	});
		$("#searchTerm").keypress(function(e){
			if (e.which == 13) {
				$("#wikiSearch").click();
			}
		});
});
