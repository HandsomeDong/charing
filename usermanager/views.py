from django.shortcuts import render, render_to_response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from usermanager.tool import random_str
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
import time


def login(request):
    username = request.POST.get("address")
    password = request.POST.get("password")
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'stat': True})
    else:
        return JsonResponse({'stat': False})


def register(request):
    print(request.POST)
    return render_to_response("register.html", {"STATIC_URL": "/static/"})


@csrf_exempt
def submit_register(request):
    address = request.POST.get("address")
    pwd = request.POST.get("password")
    if len(User.objects.filter(username=address)) != 0:
        return JsonResponse({"status": "OK", "register_success": False})
    user = User.objects.create_user(address, password=pwd)
    user.save()
    return JsonResponse({"status": "OK", "register_success": True})


@csrf_exempt
def check_email(request):
    address = request.POST.get("address")
    avaliable = User.objects.filter(username=address)
    if len(avaliable) == 0:
        return JsonResponse({"status": "OK", "register_success": True})
    else:
        return JsonResponse({"status": "OK", "register_success": False})

