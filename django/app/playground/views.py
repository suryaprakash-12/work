from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def hello(request):
    return render(request,'hello.html')

def hello1(request):
    return render(request,'welcome.html')

def wel(request):
    return render(request,'set.html')