from django.shortcuts import render, render_to_response

from django.http import HttpResponse, JsonResponse, HttpResponseRedirect


num=0
def main(request):
    global num
    num=num+1
    return render_to_response("index.html",{"STATIC_URL":"/static/","number":num})
