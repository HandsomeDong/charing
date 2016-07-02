from django.shortcuts import render, render_to_response

from django.http import HttpResponse, JsonResponse, HttpResponseRedirect




def main(request):
    return render_to_response("index.html",{"staticmessage":"Hello, I'm ruirui"})
