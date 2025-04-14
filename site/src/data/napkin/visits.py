from napkin import request, store


visits = store.get("visits")

if "localhost" in request.headers["Origin"].lower():
    print("received request from localhost, ignoring")
else:
    store.put("visits", visits["data"] +1)

print(f"updated visits from {visits['data']} to {store.get('visits')['data']}")
