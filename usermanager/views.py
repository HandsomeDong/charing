from django.shortcuts import render, render_to_response
from index.models import Person
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
import time


def login(request):
    return


def register(request):
    print(request.POST)
    return render_to_response("register.html",{"STATIC_URL":"/static/"})


@csrf_exempt
def submit_register(request):

    return JsonResponse({"status": "OK34343"})
