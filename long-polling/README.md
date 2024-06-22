## Long-Polling Test

```s
$ curl -X POST -H "Content-Type: application/json" -d '{"message":"Hello, World2!"}' http://localhost:8080/event
```

```s
$ curl -X GET http://localhost:8080/long-polling -v
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

## nodejs sleep

Node.jsはシングルスレッドのランタイムであり、非同期I/Oを利用して高いパフォーマンスを実現しています。

このコードでは、setTimeout関数を使用して非同期的に操作をスケジューリングしています。setTimeoutは非同期関数であり、指定した時間が経過した後にコールバック関数を実行します。しかし、その間、他のコードは引き続き実行されます。つまり、このsetTimeout関数はスレッドをブロックしません。

したがって、このNode.jsのコードは、新しいイベントがない場合でも10秒間待つという操作があっても、その間に他のリクエストを処理することができます。これはNode.jsの非同期I/Oとイベントループの特性によるもので、これによりNode.jsはシングルスレッドでありながら、多数の同時接続を効率的に処理することができます。

ただし、Node.jsがシングルスレッドであるため、CPU密集型のタスク（例えば、大量のデータのソートや複雑な計算など）はスレッドをブロックし、他のリクエストの処理を遅らせる可能性があります。そのような場合は、適切な設計やワーカースレッドの使用などが必要となります

