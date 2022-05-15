<%@ page import="com.Customer"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customer Service</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Customer.js"></script>
</head>
<body>
	<div class="container"> 
		<div class="row">
	 		<div class="col-30"> 
	 		<br><br>
	 		<center>
	 			<h1 class="m-3" style="font-size:34px; color:black; font-weight:bold;">Customer service</h1>
	 		</center>
	 		<br><br> 
	 		
	 			<form id="formCustomer" name="formCustomer">
	 				<h2 style="font-size:18px; color:black;">Customer Name:</h2>
			 		<input style="border-color: black; border-width: 2px" id="customerName" name="customerName" type="text" class="form-control form-control-sm">
			 		<br> 
					<h2 style="font-size:17px; color:black;">NIC Number:</h2>
			 		<input style="border-color: black; border-width: 2px" id="nic" name="nic" type="text"
			 		class="form-control form-control-sm">
			 		<br> 
			 		<h2 style="font-size:17px; color:black;">Address:</h2>
			 		<input style="border-color: black; border-width: 2px" id="address" name="address" type="text"
			 		class="form-control form-control-sm">
			 		<br> 
			 		<h2 style="font-size:17px; color:black;">Mobile Number:</h2>
			 		<input style="border-color: black; border-width: 2px" id="mobileNo" name="mobileNo" type="text"
			 		class="form-control form-control-sm">
			 		<br> 
			 		<h2 style="font-size:17px; color:black;">Email Address:</h2>
			 		<input style="border-color: black; border-width: 2px; height: 50px" id="email" name="email" type="text"
			 		class="form-control form-control-sm">
			 		<br> 
			 		<br><br>
			 		<center><input style="font-size:17px; width: 200px; background-color: #00cc00; border-color:#00cc00; color: black" id="btnSave" name="btnSave" type="button" value="SAVE" class="btn btn-primary"></center>
			 		<br><br>
			 		<input type="hidden" id="hidcustomerIDSave"
			 		name="hidcustomerIDSave" value="">
				</form>
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			<br> 
	 			
	 		</div>
	 	</div>
	 
	 	<br> 
	 	
	 		<div id="divCustGrid">
<%
Customer customer = new Customer();
out.print(customer.readCustomer());
%>
 			</div>
	 	
	</div>
</body>
</html>