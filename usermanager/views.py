from django.shortcuts import render, render_to_response
from usermanager.models import User
from usermanager.tool import random_str
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
import time


def login(request):
    return


def register(request):
    print(request.POST)
    return render_to_response("register.html", {"STATIC_URL": "/static/"})


@csrf_exempt
def submit_register(request):
    address = request.POST.get("address")
    pwd = request.POST.get("password")
    avaliable = User.objects.filter(address=address)
    if len(avaliable) == 0:
        user = User.objects.create(userid=random_str(), password=pwd, address=address)
        user.save()
        return JsonResponse({"status": "OK", "register_success": True})
    else:
        return JsonResponse({"status": "OK", "register_success": False})


@csrf_exempt
def check_email(request):
    address = request.POST.get("address")
    avaliable = User.objects.filter(address=address)
    if len(avaliable) == 0:
        return JsonResponse({"status": "OK", "register_success": True})
    else:
        return JsonResponse({"status": "OK", "register_success": False})

