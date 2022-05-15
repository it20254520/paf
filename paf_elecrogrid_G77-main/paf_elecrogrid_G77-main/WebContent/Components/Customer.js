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
var status = validateCustomerForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
 // If valid------------------------
 var type = ($("#hidcustomerIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url :  "/CustomerService",
 type : type,
 data : $("#formCustomer").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onCustomerSaveComplete(response.responseText, status);
 }
 });
});


function onCustomerSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divItemsGrid").html(resultSet.data);
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
 $("#hidcustomerIDSave").val("");
 $("#formCustomer")[0].reset();
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
//$("#customerName").prop('enable', true);     
//$("#nic").prop('enable', true);     
//$("#address").prop('enable', true);     
//$("#mobileNo").prop('enable', true); 
//$("#email").prop('enable', true);     
//  

 $("#hidcustomerIDSave").val($(this).closest("tr").find('#hidcustomerIDUpdate').val());
 $("#customerName").val($(this).closest("tr").find('td:eq(1)').text());
 $("#nic").val($(this).closest("tr").find('td:eq(2)').text());
 $("#address").val($(this).closest("tr").find('td:eq(3)').text());
 $("#mobileNo").val($(this).closest("tr").find('td:eq(4)').text());
 $("#email").val($(this).closest("tr").find('td:eq(5)').text());
});


//REMOVE==============================
$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "CustomerService",
 type : "DELETE",
 data : "customerID=" + $(this).data("customerID"),
 dataType : "text",
 complete : function(response, status)
 {
 onCustomerDeleteComplete(response.responseText, status);
 }
 });
});


function onuCustomerDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divCustGrid").html(resultSet.data);
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
function validateCustomerForm()
{
// CODE
if ($("#cusomerName").val().trim() == "")
 {
 return "Insert customer Full Namer";
 }
// NAME
if ($("#nic").val().trim() == "")
 {
 return "Insert Customer NIC number";
 }
if ($("#address").val().trim() == "")
 {
 return "Insert Customer Address";
 }

if ($("#mobileNo").val().trim() == "")
 {
 return "Insert Mobile Number";
 }
 
 if ($("#emal").val().trim() == "")
 {
 return "Insert valid Email Address";
 }
return true;
}
