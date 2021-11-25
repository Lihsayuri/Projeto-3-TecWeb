from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('/driver-standings', views.api_driverStandings, name='api-driverStandings')
]