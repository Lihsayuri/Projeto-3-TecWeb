from django.http import HttpResponse
from django.shortcuts import render, redirect
import requests
import requests
from bs4 import BeautifulSoup
from rest_framework.decorators import api_view
from rest_framework.response import Response

def index(request):
    return HttpResponse("Olá mundo! Este é o app notes de Tecnologias Web do Insper.")


@api_view(['GET', 'POST'])
def api_driverStandings(request):
    #download f1 page
    f1Page = 'https://www.formula1.com/en.html'
    result = requests.get(f1Page)
    result.content

    # if successful parse the download into a BeautifulSoup object, which allows easy manipulation 
    if result.status_code == 200:
        soup = BeautifulSoup(result.content, "html.parser")

    # find the object with HTML class wikitable sortable
    #print(soup)
    #const firstPlace = document.querySelector('.f1-podium--position.pos--1.d-none.d-md-inline-block')
    #const driverClass = firstPlace.querySelector('.driver-image')
    #const pictureFirstPlace = driverClass.querySelector('.lazy').getAttribute('data-src')
    classDriver1 = soup.find('a',{'class':'f1-podium--position pos--1 d-none d-md-inline-block'})
    classDriver1Img = classDriver1.find('picture',{'class':'driver-image'})
    pictureFirstPlace = classDriver1Img.find('img', {'class':'lazy'})['data-src']
    linkFirstPlaceImg = "https://www.formula1.com" + pictureFirstPlace 

    #---------------------------------------------------------------------------------------------

    classDriver2 = soup.find('a',{'class':'f1-podium--position pos--2 d-none d-md-inline-block'})
    classDriver2Img = classDriver2.find('picture',{'class':'driver-image'})
    pictureSecondPlace = classDriver2Img.find('img', {'class':'lazy'})['data-src']
    linkSecondPlaceImg = "https://www.formula1.com" + pictureSecondPlace

    #----------------------------------------------------------------------------------------------

    classDriver3 = soup.find('a',{'class':'f1-podium--position pos--3 d-none d-md-inline-block'})
    classDriver3Img = classDriver3.find('picture',{'class':'driver-image'})
    pictureThirdPlace = classDriver3Img.find('img', {'class':'lazy'})['data-src']
    linkThirdPlaceImg = "https://www.formula1.com" + pictureThirdPlace

    return linkFirstPlaceImg, linkSecondPlaceImg, linkThirdPlaceImg

# api_driverStandings("GET")
        