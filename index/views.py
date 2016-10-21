from django.shortcuts import render, render_to_response
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect

num = 0


def main(request):
    print(request.POST)
    return render_to_response("register.html", {"STATIC_URL": "/static/"})


