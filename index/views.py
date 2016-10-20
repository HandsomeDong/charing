from django.shortcuts import render, render_to_response
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect

num = 0


def main(request):
    global num
    name = ''
    if 'name' in request.GET:
        name = request.GET['name']
    num += 1
    num = 100
    #
    # p = Person(name="Fred Flintstone", shirt_size="L")
    # p.save()
    return render_to_response("index.html", {"STATIC_URL": "/static/", "number": num, "name": name})


