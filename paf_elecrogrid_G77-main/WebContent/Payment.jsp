<%@ page import="com.Payment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Payment Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/Payment.js"></script>
</head>
<body bgcolor = "#cccccc">
<div class="container" >
	<div class="row">
		<div class="col-30">
		<br><br>
		<center>
		<h1 style="font-size:34px; color:black; font-weight:bold;"> Make Payment </h1>
		</center>
		<br><br>
	
		<form id="formPayment" name="formPayment">
	 		<h2 style="font-size:18px; color:black;">Cardholder's Name:</h2>
	 		<input style="border-color: black; border-width: 2px" id="cHname" name="cHname" type="text" class="form-control form-control-sm">
	 		<br> 
			<h2 style="font-size:17px; color:black;">Card Type:</h2>
	 		<input style="border-color: black; border-width: 2px" id="cDtype" name="cDtype" type="text"
	 		class="form-control form-control-sm">
	 		<br>
	 		<h2 style="font-size:17px; color:black;"> Expire Date:</h2>
	 		<input style="border-color: black; border-width: 2px" id="ExpiryDate" name="ExpiryDate" type="text"
	 		class="form-control form-control-sm">
	 		<br> 
	 		<h2 style="font-size:17px; color:black;">Security Code:</h2>
	 		<input style="border-color: black; border-width: 2px" id="Scode" name="SCode" type="text"
	 		class="form-control form-control-sm">
	 		<br> 
	 		<h2 style="font-size:17px; color:black;">Card number:</h2>
	 		<input style="border-color: black; border-width: 2px; height: 50px" id="cDnumber" name="cDnumber" type="text"
	 		class="form-control form-control-sm">
	 		<class="form-control form-control-sm">
	 		<br><br>
	 		<center><input style="font-size:17px; width: 200px; background-color: #00cc00; border-color:#00cc00; color: black" id="btnSave" name="btnSave" type="button" value="SAVE" class="btn btn-primary"></center>
	 		<br><br>
	 		<input type="hidden" id="hidcdIDSave"
	 		name="hidcdIDSave" value="">
		</form>
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>
	<br>
	<div id="divPayGrid">
 <%
 Payment PaymentObj = new Payment();
 out.print(PaymentObj.readPayment());
 %>
</div>
</div> </div> </div>
</body>
</html>