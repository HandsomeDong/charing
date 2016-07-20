from django.shortcuts import render, render_to_response
from index.models import Person
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect


num=0

def main(request):
    global num
    name=''
    if 'name' in request.GET:
        name=request.GET['name']
    num=num+1
    num=100
    #
    # p = Person(name="Fred Flintstone", shirt_size="L")
    # p.save()
    return render_to_response("index.html",{"STATIC_URL":"/static/","number":num,"name":name})

def login(request):
    return

def register(request):
    print(request.POST)
    return render_to_response("register.html",{"STATIC_URL":"/static/"})
