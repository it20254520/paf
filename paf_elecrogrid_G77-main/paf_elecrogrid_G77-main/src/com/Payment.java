package com;

import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class Payment {

	private Connection connect() {
		Connection con = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");

			// Provide the correct details: DBServer/DBName, username, password
			con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/db01?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC",
					"root", "root");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;
	}

	
	public String insertPayment(String cHname, String cDtype, String ExpiryDate, String SCode, String cDnumber) {
		String output = "";
		try {
			Connection con = connect();
			if (con == null) {
				return "Error while connecting to the database for inserting.";
			}
			// create a prepared statement
			String query = " insert into payments(`cdID`,`cHname`,`cDtype`,`ExpiryDate`,`SCode`,`cDnumber`)"
					+ " values (?, ?, ?, ?, ?, ?)";
			PreparedStatement preparedStmt = con.prepareStatement(query);
			// binding values
			preparedStmt.setInt(1, 0);
			preparedStmt.setString(2, cHname);
			preparedStmt.setString(3, cDtype);
			preparedStmt.setString(4, ExpiryDate);
			preparedStmt.setString(5, SCode);
			preparedStmt.setString(6, cDnumber);
			// execute the statement
			preparedStmt.execute();
			con.close();
			output = "Inserted successfully";
		} catch (Exception e) {
			output = "Error while inserting the payments.";
			System.err.println(e.getMessage());
		}
		return output;
	}

	public String readPayment() {
		String output = "";
		try {
			Connection con = connect();
			if (con == null) {
				return "Error while connecting to the database for reading.";
			}
			// Prepare the html table to be displayed
			output = "<table style = 'background-color: #8c8c8c; border: 2; border-color: black; padding: 2px'><tr><th style = 'color: black; margin-left: 10px; border-color: black'></th><tr><th>Payment ID</th><th>Card Holder name</th><th>Card type</th><th>Card number</th><th>Expiry date</th><th>CVN</th></tr>";
			String query = "select * from payments";
			Statement stmt = (Statement) con.createStatement();
			ResultSet rs = ((java.sql.Statement) stmt).executeQuery(query);
			// iterate through the rows in the result set
			while (rs.next()) {
				String cdID = Integer.toString(rs.getInt("cdID"));
				String cHname = rs.getString("cHname");
				String cDtype = rs.getString("cDtype");
				String ExpiryDate = rs.getString("ExpiryDate");
				String SCode = rs.getString("SCode");
				String cDnumber = rs.getString("cDnumber");

				// Add into the html table
				output += "<tr><td style = 'word-break: break-all;'><input id='hidcdIDUpdate'name='hidcdIDUpdate'type='hidden' value='" + cdID
						+ "'>" + cdID + "</td>";
				output += "<td>" + cHname + "</td>";
				output += "<td>" + cDtype + "</td>";
				output += "<td>" + ExpiryDate + "</td>";
				output += "<td>" + SCode + "</td>";
				output += "<td>" + cDnumber + "</td>";
				
//Buttons
				
				output += "<td style = 'width: 210px'><input name='btnUpdate'type='button' value='Update'class='btnUpdate btn btn-secondary'></td>"+ "<td style = 'width: 210px'><input name='btnRemove'type='button' "
				  		+ "value='Remove'class='btnRemove btn btn-danger'data-userid='"
						  + cdID + "'>" + "</td></tr>"; 
				
			}
			con.close();
			// Complete the html table
			output += "</table>";
		} catch (Exception e) {
			output = "Error while reading the payments.";
			System.err.println(e.getMessage());
		}
		return output;
	}

	public String updatePayment(String cdID, String cHname, String cDtype, String ExpiryDate, String SCode, String cDnumber) {
		String output = "";

		try {
			Connection con = connect();

			if (con == null) {
				return "Error while connecting to the database for updating.";
			}

			// create a prepared statement
			String query = "UPDATE payments SET cHname=?,cDtype=?,ExpiryDate=?,SCode=?,cDnumber=?" + "WHERE cdID=?";

			PreparedStatement preparedStmt = con.prepareStatement(query);

			// binding values
			preparedStmt.setString(1, cHname);
			preparedStmt.setString(2, cDtype);
			preparedStmt.setString(3, ExpiryDate);
			preparedStmt.setString(4, SCode);
			preparedStmt.setString(5, cDnumber);
			preparedStmt.setInt(6, Integer.parseInt(cdID));

			// execute the statement
			preparedStmt.execute();
			con.close();

			output = "Updated successfully";
		} catch (Exception e) {
			output = "Error while updating the payments.";
			System.err.println(e.getMessage());
		}

		return output;
	}

	public String deletePayment(String cdID) {
		String output = "";

		try {
			Connection con = connect();

			if (con == null) {
				return "Error while connecting to the database for deleting.";
			}

			// create a prepared statement
			String query = "delete from payments where cdID=?";

			PreparedStatement preparedStmt = con.prepareStatement(query);

			// binding values
			preparedStmt.setInt(1, Integer.parseInt(cdID));

			// execute the statement
			preparedStmt.execute();
			con.close();

			output = "Deleted successfully";
		} catch (Exception e) {
			output = "Error while deleting the payments.";
			System.err.println(e.getMessage());
		}

		return output;
	}

}
