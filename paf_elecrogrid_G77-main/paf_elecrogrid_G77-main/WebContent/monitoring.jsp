<%@ page import="com.Monitoring"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Power Monitoring</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/main.js"></script>
</head>
<body bgcolor = "#cccccc">
	<div class="container"> 
		<div class="row">
	 		<div class="col-30"> 
	 		<br><br>
	 		<center>
	 			<h1 class="m-3" style="font-size:34px; color:black; font-weight:bold;">Power monitoring service</h1>
	 		</center>
	 		<br><br> 
	 		
	 			<form id="formMonitoring" name="formMonitoring">
	 				<h2 style="font-size:18px; color:black;"> Date:</h2>
			 		<input style="border-color: black; border-width: 2px" id="Date" name="Date" type="text" class="form-control form-control-sm">
			 		<br> 
					<h2 style="font-size:17px; color:black;">Last Reading:</h2>
			 		<input style="border-color: black; border-width: 2px" id="Lreading" name="Lreading" type="text"
			 		class="form-control form-control-sm">
			 		<br> 
			 		<h2 style="font-size:17px; color:black;">New Reading:</h2>
			 		<input style="border-color: black; border-width: 2px" id="Nreading" name="Nreading" type="text"
			 		class="form-control form-control-sm">
			 		<br> 
			 		<h2 style="font-size:17px; color:black;">Account Number:</h2>
			 		<input style="border-color: black; border-width: 2px" id="Anumber" name="Anumber" type="text"
			 		class="form-control form-control-sm">
			 		<br> 
			 		<h2 style="font-size:17px; color:black;">Address:</h2>
			 		<input style="border-color: black; border-width: 2px; height: 50px" id="Address" name="Address" type="text"
			 		class="form-control form-control-sm">
			 		<br> 
			 		<br><br>
			 		<center><input style="font-size:17px; width: 200px; background-color: #00cc00; border-color:#00cc00; color: black" id="btnSave" name="btnSave" type="button" value="SAVE" class="btn btn-primary"></center>
			 		<br><br>
			 		<input type="hidden" id="hiduserIDSave"
			 		name="hiduserIDSave" value="">
				</form>
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			<br> 
	 			
	 		</div>
	 	</div>
	 
	 	<br> 
	 	
	 		<div id="divMoniGrid">
<%
Monitoring MonitoringObj = new Monitoring();
out.print(MonitoringObj.readMonitoring());
%>
 			</div>
	 	
	</div>
</body>
</html>