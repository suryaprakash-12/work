from django.urls import path
from .views import * 

urlpatterns=[
    path('1/',hello,name="t"),
    path('2/',hello1,name="t1"),
    path('3/',wel,name="t3")
]