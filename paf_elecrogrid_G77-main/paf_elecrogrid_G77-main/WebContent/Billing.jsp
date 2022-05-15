<%@ page import="com.Billing"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Billing Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/Billing.js"></script>
</head>
<body bgcolor = "#cccccc">
<div class="container" >
	<div class="row">
		<div class="col-30">
		<br><br>
		<center>
		<h1 style="font-size:34px; color:black; font-weight:bold;"> Billing Management </h1>
		</center>
		<br><br>
	
		<form id="formBiling" name="formBilling">
	 		<h2 style="font-size:18px; color:black;">Account Number</h2>
	 		<input style="border-color: black; border-width: 2px" id="bAccNo" name="bAccNo" type="text" class="form-control form-control-sm">
	 		<br> 			
	 		<h2 style="font-size:17px; color:black;">Date :</h2>
	 		<input style="border-color: black; border-width: 2px" id="bDate" name="bDate" type="text"
	 		class="form-control form-control-sm">
	 		<br> 
	 		<h2 style="font-size:17px; color:black;">Total Units:</h2>
	 		<input style="border-color: black; border-width: 2px" id="bUnit" name="bUnit" type="text"
	 		class="form-control form-control-sm">
	 		<br> 
	 		<h2 style="font-size:17px; color:black;">Unit Price:</h2>
	 		<input style="border-color: black; border-width: 2px;" id="bUnitPrice" name="bUnitPrice" type="text"
	 		class="form-control form-control-sm">
	 		<br> 
	 		<h2 style="font-size:17px; color:black;">Total Amount:</h2>
	 		<input style="border-color: black; border-width: 2px;" id="bAmount" name="bAmount" type="text"
			class="form-control form-control-sm">
	 		<br><br>
	 		<center><input style="font-size:17px; width: 200px; background-color: #00cc00; border-color:#00cc00; color: black" id="btnSave" name="btnSave" type="button" value="SAVE" class="btn btn-primary"></center>
	 		<br><br>
	 		<input type="hidden" id="hidbIDSave"
	 		name="hidbIDSave" value="">
		</form>
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>
	<br>
	<div id="divBillGrid">
 <%
 Billing BillingObj = new Billing();
 out.print(BillingObj.readBilling());
 %>
</div>
</div> </div> </div>
</body>
</html>