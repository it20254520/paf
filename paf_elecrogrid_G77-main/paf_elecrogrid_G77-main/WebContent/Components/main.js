
$(document).ready(function()
{
$("#response").prop('disabled', true);    
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{

// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
// Form validation-------------------
var status = validateMonitoringForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
 // If valid------------------------
 var type = ($("#hiduserIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "MonitoringAPI",
 type : type,
 data : $("#formMonitoring").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onuserSaveComplete(response.responseText, status);
 }
 });
});


function onuserSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divMoniGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 }
 14
 $("#hiduserIDSave").val("");
 $("#formMonitoring")[0].reset();
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
//$("#Anumber").prop('enable', true);     
//$("#Date").prop('enable', true);     
//$("#Address").prop('enable', true);     
//$("#Lreading").prop('enable', true); 
//$("#Nreading").prop('enable', true);     
  

 $("#hiduserIDSave").val($(this).closest("tr").find('#hiduserIDUpdate').val());
 $("#Date").val($(this).closest("tr").find('td:eq(1)').text());
 $("#Lreading").val($(this).closest("tr").find('td:eq(2)').text());
 $("#Nreading").val($(this).closest("tr").find('td:eq(3)').text());
 $("#Anumber").val($(this).closest("tr").find('td:eq(4)').text());
 $("#Address").val($(this).closest("tr").find('td:eq(5)').text());
});


//REMOVE==============================
$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "MonitoringAPI",
 type : "DELETE",
 data : "userID=" + $(this).data("userID"),
 dataType : "text",
 complete : function(response, status)
 {
 onuserDeleteComplete(response.responseText, status);
 }
 });
});


function onuserDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divMoniGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}



// CLIENT-MODEL================================================================
function validateMonitoringForm()
{
// CODE
if ($("#Date").val().trim() == "")
 {
 return "Insert Date ";
 }
// NAME
if ($("#Lreading").val().trim() == "")
 {
 return "Insert Last meter reading";
 }
if ($("#Nreading").val().trim() == "")
 {
 return "Insert New meter reading";
 }

if ($("#Anumber").val().trim() == "")
 {
 return "Insert Account number ";
 }
 
 if ($("#Address").val().trim() == "")
 {
 return "Insert Address ";
 }
return true;
}
