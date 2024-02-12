#!/bin/python3

# import sys
# import os
# import urllib.request
# import requests
# import json


#Use HTTP GET method to retireve information fro a db of countries.

def getCountries(s, p):
  #find how many pages to iterate through
  #iterate through the pages
  # get data, and return number of pops this is greater than our p

  req = requests.get(f'https://jsonmock.hackerrank.com/api/countries/search?name={s}').json()
  total_pages = req.['total_pages']

  for page_num in range(1, total_pages+1):
    req = requests.get(f'https://jsonmock.hackerrank.com/api/countries/search?name={s}&page={page_num}').json()

    for c in req['data']:
      if c['population'] > p:
        res += 1

  return res
