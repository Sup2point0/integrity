'''
Napkin.io script for counting visits to Integrity!
'''

from napkin import request as REQUEST, response as RESPONSE
from napkin import store

import sys
from datetime import date


data = store.get("integrity")["data"]
print("// before =", data)
print("------------------------------------------")


def GET():
    '''Respond to a GET request by sending back visitor stats.'''

    RESPONSE.body = data
    RESPONSE.status_code = 200


def POST():
    '''Respond to a POST request by updating visitor count.'''

    try:
        if "localhost" in REQUEST.headers["Origin"].lower():
            print("received POST request from localhost, ignoring")
            sys.exit()
    except Exception as e:
        print("!! error processing request")
        print("------------------------------------------")
        raise e

    ## All-Time Visits
    visits = data.get("visits")
    if visits is None:
        sys.exit()

    data["visits"] += 1
    print(f">> updated total visits -> [{data['visits']}]")

    ## Monthly Visits
    year = str(date.today().year)
    month = str(date.today().strftime("%B"))

    if year and month:
        history = data["history"]

        if not history.get(year):
            history[year] = {}
        
        existing = history[year].get(month)
        history[year][month] = (existing or 0) +1
        print(f">> updated visits for {month} [{existing}] -> [{history[year][month]}]")

    ## Save
    print(">> saving data...")

    store.put("integrity", data)

    print("------------------------------------------")
    print("// after =", data)


if REQUEST.method == "POST":
    print("// POST")
    POST()
else:
    print("// GET")
    GET()
