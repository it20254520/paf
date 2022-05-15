
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
var status = validateBillingForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
 // If valid------------------------
 var type = ($("#hidbIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "BillngAPI",
 type : type,
 data : $("#formBilling").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onBillSaveComplete(response.responseText, status);
 }
 });
});


function onBillSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divBillGrid").html(resultSet.data);
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
 $("#hidbIDSave").val("");
 $("#formBilling")[0].reset();
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
//	$("#hidItemIDSave").val($(this).data("ItemID"));
//	$("#bAccNo").val($(this).closest("tr").find('td:eq(0)').text());
//	$("#bDate").val($(this).closest("tr").find('td:eq(1)').text());
//	$("#bUnit").val($(this).closest("tr").find('td:eq(2)').text());
//	$("#bUnitPrice").val($(this).closest("tr").find('td:eq(3)').text());
//	$("#bAmount").val($(this).closest("tr").find('td:eq(4)').text());
		
 $("#hidbIDSave").val($(this).closest("tr").find('#hidbIDUpdate').val());
 $("#bAccNo").val($(this).closest("tr").find('td:eq(1)').text());
 $("#bDate").val($(this).closest("tr").find('td:eq(2)').text());
 $("#bUnit").val($(this).closest("tr").find('td:eq(3)').text());
 $("#bUnitPrice").val($(this).closest("tr").find('td:eq(4)').text());
 $("#bAmount").val($(this).closest("tr").find('td:eq(5)').text());
});


//REMOVE==============================
$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "BillingAPI",
 type : "DELETE",
 data : "bID=" + $(this).data("bID"),
 dataType : "text",
 complete : function(response, status)
 {
 onBillDeleteComplete(response.responseText, status);
 }
 });
});


function onBillDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divBillGrid").html(resultSet.data);
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
function validateBillingForm()
{
// CODE
if ($("#bAccNo").val().trim() == "")
 {
 return "Insert Account Number";
 }
// NAME
if ($("#bDate").val().trim() == "")
 {
 return "Insert Date";
 }
if ($("#bUnit").val().trim() == "")
 {
 return "Insert units";
 }

if ($("#bUnitPrice").val().trim() == "")
 {
 return "Insert Unit Price";
 }
 
 if ($("#bAmount").val().trim() == "")
 {
 return "Insert Total Amount";
 }
return true;
}
