package com;

import java.io.IOException;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ComplaintAPI
 */
@WebServlet("/CustomerService")
public class CustomerService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Customer customer = new Customer();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CustomerService() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		{
			 String output = customer.insertCustomer(request.getParameter("customerName"),
			 request.getParameter("nic"),
			 request.getParameter("address"),
			 request.getParameter("mobileNo"),
			 request.getParameter("email"));
			 response.getWriter().write(output);
		}
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		 String output = customer.updateCustomer(paras.get("hidcustomerIDSave").toString(),
				 paras.get("customerName").toString(),
				 paras.get("nic").toString(),
				 paras.get("address").toString(),
				 paras.get("mobileNo").toString(),
				 paras.get("email").toString());
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		 String output = customer.deleteCustomer(paras.get("customerID").toString());
		response.getWriter().write(output);
	}

	private Map getParasMap(HttpServletRequest request) {

		 Map<String, String> map = new HashMap<String, String>();
		try
		 {
		 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
		 String queryString = scanner.hasNext() ?
		 scanner.useDelimiter("\\A").next() : "";
		 scanner.close();
		 String[] params = queryString.split("&");
		 for (String param : params)
		 {
		 
		 String[] p = param.split("=");
		 map.put(p[0], p[1]);
		 }
		 }
		catch (Exception e)
		 {
		 }
		return map;
		}
}
