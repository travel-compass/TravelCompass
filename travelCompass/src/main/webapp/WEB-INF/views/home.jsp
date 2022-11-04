<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>
	Hello world! asdfasdfasdfasdf
</h1>
	<c:if test="${1 == 1}" >
		<h1>maven 정상 동작</h1>
	</c:if>
	
	<form action="/test" method="POST">
		<input type="text" name="testInput">
		<button>테스트 제출</button>
	</form>
	
<P>  The time on the server is ${serverTime}. </P>
</body>
</html>