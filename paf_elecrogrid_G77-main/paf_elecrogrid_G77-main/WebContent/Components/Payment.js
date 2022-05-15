
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
var status = validatePaymentForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
 // If valid------------------------
 var type = ($("#hidcdIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "PaymentAPI",
 type : type,
 data : $("#formPayment").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onpaySaveComplete(response.responseText, status);
 }
 });
});


function onpaySaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divPayGrid").html(resultSet.data);
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
 $("#hidcdIDSave").val("");
 $("#formPayment")[0].reset();
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
  
 $("#hidcdIDSave").val($(this).closest("tr").find('#hidcdIDUpdate').val());
 $("#cHname").val($(this).closest("tr").find('td:eq(1)').text());
 $("#cDtype").val($(this).closest("tr").find('td:eq(2)').text());
 $("#ExpiryType").val($(this).closest("tr").find('td:eq(3)').text());
 $("#SCode").val($(this).closest("tr").find('td:eq(4)').text());
 $("#cDnumber").val($(this).closest("tr").find('td:eq(5)').text());
});


//REMOVE==============================
$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "PaymentAPI",
 type : "DELETE",
 data : "cdID=" + $(this).data("cdID"),
 dataType : "text",
 complete : function(response, status)
 {
 onpayDeleteComplete(response.responseText, status);
 }
 });
});


function onpayDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divPayGrid").html(resultSet.data);
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
function validatePaymentForm()
{
// CODE
if ($("#cHname").val().trim() == "")
 {
 return "Insert Cardholder's Name ";
 }
// NAME
if ($("#cDtype").val().trim() == "")
 {
 return "Insert Card Type";
 }
if ($("#ExpiryDate").val().trim() == "")
 {
 return "Insert Card Expire Date";
 }

if ($("#SCode").val().trim() == "")
 {
 return "Insert Security Code ";
 }
 
 if ($("#cDnumber").val().trim() == "")
 {
 return "Insert Valid Card Number ";
 }
return true;
}
