function save_options()
{
	localStorage["address"] = document.getElementById("crm-host").value;
	localStorage["webhook"] = document.getElementById("webhook").value;
}

function restore_options()
{

	// Restore Trace Triggers
	var address = localStorage["address"];
	if (address !== null)	{
		$("#crm-host").val(address);
	} else {
		$("#crm-host").val(null);
	}

	// Restore Profile Triggers
	var webhook = localStorage["webhook"];
	if (webhook !== null)	{
		$("#webhook").val(webhook);
	} else {
		$("#webhook").val(null);
	}
}

$(function()
{
	$('.save-button').click(save_options);

	restore_options();
});
