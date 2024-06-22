```s
$ curl -X POST -H "Content-Type: application/json" -d '{"message":"Hello, World2!"}' http://localhost:8080/event
```

```s
$ curl -X GET -d 'test' http://localhost:8080/long-polling -v
*   Trying 127.0.0.1:8080...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 8080 (#0)
> GET /long-polling HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.68.0
> Accept: */*
> Content-Length: 4
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 4 out of 4 bytes
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 28
< ETag: W/""
< Date: Sat, 22 Jun 2024 14:24:20 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact
{"message":"Hello, World2!"}
```