## SSE Test

```s
$ curl -X POST -H "Content-Type: application/json" -d '{"message":"Hello, World2!"}' http://localhost:8080/event
```

```s
$ curl -X GET http://localhost:8080/events -v
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying 127.0.0.1:8080...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 8080 (#0)
> GET /events HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.68.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/event-stream
< Cache-Control: no-cache
< Connection: keep-alive
< Date: Sat, 22 Jun 2024 14:50:17 GMT
< Transfer-Encoding: chunked
<
data: {"message":"Hello, World2!"}
```